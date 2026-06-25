"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeInSection from "./FadeInSection";
import CountUp from "react-countup";

const stats = [
  { value: 37, suffix: "", label: "Years of Excellence" },
  { value: 14, suffix: "", label: "James Beard Nominations" },
  { value: 3, suffix: "", label: "Michelin Stars" },
  { value: 420, suffix: "+", label: "Wines in Our Cellar" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, #C9A84C 80px, #C9A84C 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, #C9A84C 80px, #C9A84C 81px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          {/* Images stacked */}
          <FadeInSection direction="left">
            <div className="relative h-[520px]">
              <div className="absolute top-0 left-0 w-[75%] h-[80%] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85&auto=format&fit=crop"
                  alt="Bella Vista dining room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-dark-900/10" />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] overflow-hidden border-4 border-dark-900">
                <Image
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=85&auto=format&fit=crop"
                  alt="Fresh pasta preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              {/* Gold accent square */}
              <div className="absolute bottom-10 left-10 w-16 h-16 border border-gold-500/30" />
              <div className="absolute -top-4 -left-4 w-8 h-8 border border-gold-500/20" />
            </div>
          </FadeInSection>

          {/* Text */}
          <div>
            <FadeInSection delay={0.1}>
              <span className="eyebrow">Our Story</span>
              <div className="flex items-center gap-4 my-4">
                <span className="gold-line" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h2
                className="text-[clamp(2rem,3.5vw,3.2rem)] font-light text-cream leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Born in Milan,<br />
                <em className="gold-text">raised by passion</em>
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <p className="text-cream/55 font-light leading-loose mb-5 text-sm" style={{ letterSpacing: "0.04em" }}>
                In 1987, Luciana and Marco Ferretti left the Navigli district of Milan carrying nothing but a worn recipe book and the unshakeable belief that honest Italian cooking, made with the right hands and the right ingredients, could become something people return to for decades.
              </p>
              <p className="text-cream/55 font-light leading-loose text-sm" style={{ letterSpacing: "0.04em" }}>
                They were right. Today, Bella Vista is recognized as one of the finest Italian restaurants outside of Italy — a place where every dish tells a story rooted in regional tradition, and every visit feels like a reunion.
              </p>
            </FadeInSection>

            {/* Stats row */}
            <FadeInSection delay={0.4}>
              <div ref={ref} className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-cream/10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-3xl font-light text-gold-500 leading-none"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {inView ? (
                        <CountUp end={s.value} duration={2.5} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                      ) : "0"}
                    </div>
                    <div className="text-cream/40 text-xs mt-1.5 tracking-widest" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                      {s.label.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Chef section */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <FadeInSection delay={0.1}>
              <span className="eyebrow">Executive Chef</span>
              <div className="flex items-center gap-4 my-4">
                <span className="gold-line" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h2
                className="text-[clamp(2rem,3.5vw,3.2rem)] font-light text-cream leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Chef Lorenzo Ferretti
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <p className="text-cream/55 font-light leading-loose mb-5 text-sm" style={{ letterSpacing: "0.04em" }}>
                The son of the founders, Lorenzo grew up at the restaurant&apos;s pass — watching, tasting, and learning from every cook who passed through. After training under three-Michelin-star chefs in Florence and Lyon, he returned home to carry the family flame forward.
              </p>
              <p className="text-cream/55 font-light leading-loose text-sm" style={{ letterSpacing: "0.04em" }}>
                His cooking philosophy is simple: respect the ingredient, trust the technique, let the flavor speak. He changes the menu four times a year, always following what Italy&apos;s seasons and small producers offer — never the other way around.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Certified Sommelier", "Florence Culinary Institute", "Michelin Recognition 2019–2024"].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-gold-500/20 text-gold-500/70 text-xs tracking-wider" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.2} direction="right" className="lg:col-span-2">
            <div className="relative h-[500px] lg:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=700&q=85&auto=format&fit=crop"
                alt="Chef Lorenzo Ferretti"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-xl italic text-cream/80 font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  &ldquo;Cooking is memory. Every plate I send out carries thirty-seven years of family history.&rdquo;
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
