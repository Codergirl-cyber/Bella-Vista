"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop",
    alt: "Bella Vista dining room at night",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85&auto=format&fit=crop",
    alt: "Wood-fired pizza preparation",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=85&auto=format&fit=crop",
    alt: "Chef plating a dish",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=700&q=85&auto=format&fit=crop",
    alt: "Signature risotto",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=700&q=85&auto=format&fit=crop",
    alt: "Wine cellar",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85&auto=format&fit=crop",
    alt: "Handmade pasta workshop",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=85&auto=format&fit=crop",
    alt: "Italian cuisine plating",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85&auto=format&fit=crop",
    alt: "Classic tiramisù",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85&auto=format&fit=crop",
    alt: "Restaurant ambiance",
    tall: false,
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Experience"
          title="A Glimpse of"
          titleItalic="Bella Vista"
          subtitle="Every corner, every plate — crafted with intention."
        />

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => setLightbox(img.src)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery image"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 border border-cream/20 text-cream/70 hover:text-gold-500 hover:border-gold-500/50 transition-all flex items-center justify-center text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryItem({
  img,
  index,
  onClick,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-3"
    >
      <div className={`relative ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/30 transition-all duration-500" />
        {/* View icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 border border-cream/60 flex items-center justify-center">
            <span className="text-cream text-lg">+</span>
          </div>
        </div>
        {/* Gold corner */}
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500" />
      </div>
    </motion.div>
  );
}
