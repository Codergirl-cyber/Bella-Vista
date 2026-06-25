"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const testimonials = [
  {
    quote: "I've dined in some of the finest restaurants across Italy and France. Bella Vista belongs in that conversation — not as an imitator, but on its own terms. The Branzino and the Barolo selection alone would bring me back across the Atlantic.",
    name: "James Whitmore",
    title: "Food Critic, The Continental Review",
    stars: 5,
  },
  {
    quote: "We celebrated our 25th anniversary here and it was everything we hoped for. The service was warm without being stiff, the pasta was unlike anything we'd had outside of Tuscany, and the tiramisù — Luciana's original recipe — made my wife cry. Properly.",
    name: "Catherine & David Ross",
    title: "Guests since 2004",
    stars: 5,
  },
  {
    quote: "Chef Lorenzo's risotto is a lesson in restraint and depth. There's nothing flashy about it — it tastes exactly of what it is. That kind of confidence is rare and deeply satisfying. A table here is one of the best things you can do with an evening in this city.",
    name: "Sofia Marchetti",
    title: "Michelin Guide Inspector (retired)",
    stars: 5,
  },
  {
    quote: "Bella Vista is where I close every important deal. There's something about the room, the quiet service, the way they handle a table — it communicates that you take your guest seriously. Three years running, and every visit is flawless.",
    name: "Alexander Crane",
    title: "Managing Partner, Crane & Whitfield LLP",
    stars: 5,
  },
  {
    quote: "The tasting menu took us on a journey through Italy's seasons. Each course arrived with a story — where the truffle was foraged, which Piedmontese farm raised the lamb. That kind of transparency is rare. This isn't just a meal; it's an education.",
    name: "Dr. Priya Mehta",
    title: "Culinary Arts Professor, NYU",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (!autoplay || !inView) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [autoplay, inView]);

  return (
    <section className="section-padding bg-dark-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Guest Voices"
          title="What Our"
          titleItalic="Guests Say"
        />

        <div
          ref={ref}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Quote mark */}
          <FadeInSection>
            <div
              className="text-center text-[8rem] leading-none text-gold-500/10 select-none -mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;
            </div>
          </FadeInSection>

          {/* Testimonial content */}
          <div className="relative overflow-hidden min-h-[260px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: i === current ? 1 : 0,
                  y: i === current ? 0 : 20,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center"
                style={{ position: i === current ? "relative" : "absolute", top: 0, left: 0, pointerEvents: i === current ? "auto" : "none" }}
              >
                <p
                  className="text-cream/70 font-light leading-loose mb-8"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <span key={si} className="text-gold-500 text-sm">★</span>
                    ))}
                  </div>
                  <p
                    className="text-cream text-sm font-medium"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-cream/40 text-xs tracking-wider" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>
                    {t.title.toUpperCase()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-8 h-1 bg-gold-500"
                    : "w-2 h-1 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 border border-cream/20 text-cream/50 hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300 flex items-center justify-center text-lg"
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 border border-cream/20 text-cream/50 hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300 flex items-center justify-center text-lg"
            >
              →
            </button>
          </div>
        </div>

        {/* Press logos */}
        <FadeInSection delay={0.3}>
          <div className="mt-20 pt-12 border-t border-cream/8">
            <p className="text-center eyebrow mb-8">As Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-30">
              {["The New York Times", "Condé Nast Traveler", "Food & Wine", "Michelin Guide", "The Guardian"].map((pub) => (
                <span
                  key={pub}
                  className="text-cream text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic" }}
                >
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
