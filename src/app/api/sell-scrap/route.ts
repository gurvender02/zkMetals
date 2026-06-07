import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

/* ── Server-side validation schema (mirrors client, minus file upload) ── */
const sellScrapApiSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z
    .string()
    .min(2, "Contact person must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  metalType: z.string().min(1, "Please select a metal type"),
  quantity: z.string().min(1, "Please provide an approximate quantity"),
  message: z
    .string()
    .max(500, "Message must not exceed 500 characters")
    .optional(),
});

/* ── Resend Instance ──────────────────────────────────────────────────── */
const resend = new Resend(process.env.RESEND_API_KEY);

/* ── POST Handler ─────────────────────────────────────────────────────── */
export async function POST(request: Request) {
  try {
    /* 1. Parse body ───────────────────────────────────────────────────── */
    const body = await request.json();

    /* 2. Validate ─────────────────────────────────────────────────────── */
    const result = sellScrapApiSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: "Validation failed", fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    /* 3. Send email via Resend ────────────────────────────────────────── */
    const { error: resendError } = await resend.emails.send({
      from: "Zeeshan Metal Recycling <onboarding@resend.dev>",
      to: ["gurvender.singh2026@gmail.com"],
      replyTo: data.email,
      subject: `New Scrap Inquiry — ${data.companyName} (${data.metalType})`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f4f5; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #0F172A; padding: 32px 24px; text-align: center; }
    .header h1 { color: #B87333; font-size: 22px; margin: 0 0 4px 0; }
    .header p { color: #94a3b8; font-size: 14px; margin: 0; }
    .body { padding: 32px 24px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
    .field:last-child { border-bottom: none; margin-bottom: 0; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; margin-bottom: 4px; }
    .value { font-size: 16px; color: #111827; font-weight: 500; }
    .message-box { background: #f9fafb; border-left: 3px solid #B87333; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; }
    .footer { background: #f9fafb; padding: 20px 24px; text-align: center; font-size: 12px; color: #9ca3af; }
    .badge { display: inline-block; background: #B87333; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🏭 New Scrap Inquiry</h1>
      <p>Submitted via zeeshanmetal.com</p>
    </div>

    <div class="body">
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${escapeHtml(data.companyName)}</div>
      </div>

      <div class="field">
        <div class="label">Contact Person</div>
        <div class="value">${escapeHtml(data.contactPerson)}</div>
      </div>

      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${escapeHtml(data.phone)}" style="color:#0F172A;text-decoration:none;">${escapeHtml(data.phone)}</a></div>
      </div>

      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color:#0F172A;text-decoration:none;">${escapeHtml(data.email)}</a></div>
      </div>

      <div class="field">
        <div class="label">City / Location</div>
        <div class="value">${escapeHtml(data.city)}</div>
      </div>

      <div class="field">
        <div class="label">Metal Type</div>
        <div class="value"><span class="badge">${escapeHtml(data.metalType)}</span></div>
      </div>

      <div class="field">
        <div class="label">Approximate Quantity</div>
        <div class="value">${escapeHtml(data.quantity)}</div>
      </div>

      ${
        data.message
          ? `
      <div class="field">
        <div class="label">Additional Message</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>
      `
          : ""
      }
    </div>

    <div class="footer">
      Zeeshan Metal Recycling &bull; Automated Notification<br />
      Reply directly to this email to respond to the sender.
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    if (resendError) {
      console.error("[sell-scrap] Resend error:", resendError);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    /* 4. Success ──────────────────────────────────────────────────────── */
    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[sell-scrap] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

/* ── HTML escape helper ───────────────────────────────────────────────── */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
