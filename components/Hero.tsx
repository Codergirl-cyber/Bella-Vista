"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=90&auto=format&fit=crop"
          alt="Bella Vista restaurant interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 via-transparent to-transparent" />

      {/* Decorative side line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-10 top-1/2 -translate-y-1/2 w-px h-32 bg-gold-500/40 origin-top hidden lg:block"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="block w-12 h-px bg-gold-500" />
              <span className="eyebrow">Milano · Dal 1987</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 leading-none"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              <span className="block text-[clamp(3.5rem,8vw,7rem)] text-cream">
                Milan&apos;s soul
              </span>
              <span className="block text-[clamp(3.5rem,8vw,7rem)] gold-text italic">
                in every plate
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-cream/60 text-base font-light leading-relaxed mb-10 max-w-xl"
              style={{ letterSpacing: "0.04em" }}
            >
              Four decades of perfecting Italy&apos;s most treasured recipes. Handcrafted pasta, wood-fired specialties, and a cellar of over 400 Italian wines — in a setting designed to disappear into.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => handleScroll("#reservation")}
                className="relative group px-10 py-4 bg-gold-500 text-dark-900 text-xs font-medium tracking-widest uppercase overflow-hidden"
                style={{ letterSpacing: "0.2em" }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-cream">
                  Reserve a Table
                </span>
                <span className="absolute inset-0 bg-dark-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </button>

              <button
                onClick={() => handleScroll("#menu")}
                className="relative group px-10 py-4 border border-cream/30 text-cream/80 text-xs font-medium tracking-widest uppercase overflow-hidden hover:border-cream/60 transition-colors duration-300"
                style={{ letterSpacing: "0.2em" }}
              >
                <span className="relative z-10">View Menu</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-cream/40 text-xs tracking-widest uppercase" style={{ letterSpacing: "0.3em", fontSize: "0.6rem" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold-500 to-transparent"
        />
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 right-0 hidden lg:flex"
      >
        <div className="bg-dark-800/80 backdrop-blur-md border-l border-t border-gold-500/10 flex divide-x divide-gold-500/10">
          {[
            { value: "37", suffix: "yrs", label: "Of Excellence" },
            { value: "400+", suffix: "", label: "Wine Labels" },
            { value: "4.9", suffix: "★", label: "Guest Rating" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-5 text-center">
              <div className="text-xl font-light text-gold-500" style={{ fontFamily: "var(--font-cormorant)" }}>
                {stat.value}<span className="text-sm ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-cream/40 text-xs tracking-widest mt-0.5" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
