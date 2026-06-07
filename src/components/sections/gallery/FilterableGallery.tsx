"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { X, ZoomIn, Camera } from "lucide-react";

/* ── Category Data ──────────────────────────────────────────────────── */
const categories = [
  "All",
  "Factory",
  "Trucks",
  "Scrap Material",
  "Metal Processing",
  "Finished Ingots",
  "Team",
] as const;

type Category = (typeof categories)[number];

interface GalleryImage {
  id: number;
  category: Exclude<Category, "All">;
  src: string;
  alt: string;
}

/* ── Image Data ─────────────────────────────────────────────────────── */
const galleryImages: GalleryImage[] = [
  { id: 1, category: "Factory", src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", alt: "Main processing facility exterior" },
  { id: 2, category: "Trucks", src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop", alt: "Heavy duty transport truck" },
  { id: 3, category: "Scrap Material", src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", alt: "Pile of mixed metal scrap" },
  { id: 4, category: "Metal Processing", src: "https://images.unsplash.com/photo-1565626423153-f7200b21e06c?q=80&w=800&auto=format&fit=crop", alt: "Smelting furnace in operation" },
  { id: 5, category: "Finished Ingots", src: "https://images.unsplash.com/photo-1622359416447-bc82a6cd05c6?q=80&w=800&auto=format&fit=crop", alt: "Stacked pure copper ingots" },
  { id: 6, category: "Team", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", alt: "Metallurgical testing team" },
  { id: 7, category: "Factory", src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=800&auto=format&fit=crop", alt: "Interior of the baling facility" },
  { id: 8, category: "Scrap Material", src: "https://images.unsplash.com/photo-1542484393-db29107db274?q=80&w=800&auto=format&fit=crop", alt: "Sorted brass scrap ready for processing" },
  { id: 9, category: "Metal Processing", src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", alt: "Industrial metal shearing machine" },
  { id: 10, category: "Finished Ingots", src: "https://images.unsplash.com/photo-1582299863777-2f16b2e31e5f?q=80&w=800&auto=format&fit=crop", alt: "Processed copper blocks" },
  { id: 11, category: "Trucks", src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop", alt: "Roll-off container truck" },
  { id: 12, category: "Team", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop", alt: "Workers in the sorting yard" },
];

/* ── Lightbox Component ─────────────────────────────────────────────── */
function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="size-6" />
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src.replace("w=800", "w=1600")}
          alt={image.alt}
          className="h-full max-h-[85vh] w-full object-contain"
        />

        {/* Caption Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-5">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-brand-copper">
            {image.category}
          </span>
          <p className="text-sm font-medium text-white sm:text-base">
            {image.alt}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Gallery Component ─────────────────────────────────────────── */
export function FilterableGallery() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeTab === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  const getCount = useCallback(
    (cat: Category) =>
      cat === "All"
        ? galleryImages.length
        : galleryImages.filter((img) => img.category === cat).length,
    []
  );

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <Container>
          {/* ── Filter Tabs ──────────────────────────────────────── */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  id={`gallery-tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setActiveTab(category)}
                  className={`group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-brand-copper text-white shadow-lg shadow-brand-copper/25"
                      : "bg-neutral-100 text-muted-foreground hover:bg-neutral-200 hover:text-foreground dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  }`}
                >
                  {category}
                  <span
                    className={`ml-1.5 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none transition-colors ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-neutral-200 text-neutral-500 group-hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-400"
                    }`}
                  >
                    {getCount(category)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Results Count ────────────────────────────────────── */}
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Camera className="size-4" />
            <span>
              Showing <strong className="text-foreground">{filteredImages.length}</strong>{" "}
              {filteredImages.length === 1 ? "photo" : "photos"}
              {activeTab !== "All" && (
                <>
                  {" "}in{" "}
                  <strong className="text-brand-copper">{activeTab}</strong>
                </>
              )}
            </span>
          </div>

          {/* ── Image Grid ───────────────────────────────────────── */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Zoom Icon */}
                  <div className="absolute right-3 top-3 z-10 rounded-full bg-brand-navy/60 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ZoomIn className="size-4 text-white" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-copper">
                      {image.category}
                    </span>
                    <p className="text-sm font-medium text-white line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── Empty State ──────────────────────────────────────── */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <Camera className="mb-4 size-12 text-muted-foreground/40" />
              <p className="text-lg font-semibold text-muted-foreground">
                No photos in this category yet
              </p>
              <p className="mt-1 text-sm text-muted-foreground/70">
                Check back soon — we&apos;re always updating our gallery.
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* ── Lightbox Modal ────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
