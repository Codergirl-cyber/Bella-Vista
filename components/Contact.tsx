"use client";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";

const hours = [
  { day: "Monday – Tuesday", time: "Closed" },
  { day: "Wednesday – Thursday", time: "6:00 PM – 10:30 PM" },
  { day: "Friday – Saturday", time: "5:30 PM – 11:00 PM" },
  { day: "Sunday", time: "5:30 PM – 9:30 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Find Us"
          title="Visit"
          titleItalic="Bella Vista"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info columns */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Address */}
            <FadeInSection direction="left">
              <div>
                <span className="eyebrow block mb-4">Address</span>
                <div className="gold-line mb-5" />
                <p
                  className="text-cream/70 font-light leading-loose text-sm"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem" }}
                >
                  142 Via della Vigna Nuova<br />
                  Upper East District<br />
                  New York, NY 10021
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-gold-500 text-xs tracking-widest hover:underline"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
                >
                  GET DIRECTIONS →
                </a>
              </div>
            </FadeInSection>

            {/* Contact */}
            <FadeInSection direction="left" delay={0.1}>
              <div>
                <span className="eyebrow block mb-4">Contact</span>
                <div className="gold-line mb-5" />
                <div className="space-y-4">
                  <div>
                    <p className="text-cream/40 text-xs mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>PHONE</p>
                    <a href="tel:+12125550192" className="text-cream/70 hover:text-gold-500 transition-colors text-sm font-light">
                      +1 (212) 555-0192
                    </a>
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>EMAIL</p>
                    <a href="mailto:table@bellavista.com" className="text-cream/70 hover:text-gold-500 transition-colors text-sm font-light">
                      table@bellavista.com
                    </a>
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs mb-1" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>PRIVATE EVENTS</p>
                    <a href="mailto:events@bellavista.com" className="text-cream/70 hover:text-gold-500 transition-colors text-sm font-light">
                      events@bellavista.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Hours */}
            <FadeInSection direction="left" delay={0.2} className="sm:col-span-2">
              <div>
                <span className="eyebrow block mb-4">Opening Hours</span>
                <div className="gold-line mb-5" />
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-baseline gap-6">
                      <span className="text-cream/50 text-xs font-light" style={{ letterSpacing: "0.04em" }}>{h.day}</span>
                      <span
                        className={`text-sm font-light ${h.time === "Closed" ? "text-cream/30" : "text-gold-500"}`}
                        style={{ fontFamily: "var(--font-cormorant)", whiteSpace: "nowrap" }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-cream/30 text-xs leading-relaxed" style={{ fontSize: "0.65rem", letterSpacing: "0.05em" }}>
                  Kitchen closes 45 minutes before closing time. Last reservations accepted 1 hour before closing.
                </p>
              </div>
            </FadeInSection>
          </div>

          {/* Map placeholder */}
          <FadeInSection direction="right" delay={0.2}>
            <div className="relative h-[480px] bg-dark-700 overflow-hidden group">
              {/* Simulated map with grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Pin */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="flex justify-center mb-4"
                  >
                    <div className="w-10 h-10 border-2 border-gold-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gold-500 rounded-full" />
                    </div>
                  </motion.div>
                  <p
                    className="text-gold-500 text-xl font-light mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Bella Vista
                  </p>
                  <p className="text-cream/40 text-xs tracking-wider" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                    142 VIA DELLA VIGNA NUOVA
                  </p>
                </div>
              </div>

              {/* Overlay with CTA */}
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-800/90 backdrop-blur border border-gold-500/30 text-gold-500 px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
                  style={{ letterSpacing: "0.2em" }}
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-gold-500/10" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
