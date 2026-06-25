"use client";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com", icon: "FB" },
  { label: "TripAdvisor", href: "https://tripadvisor.com", icon: "TA" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-cream/8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top bar */}
        <FadeInSection>
          <div className="py-16 grid md:grid-cols-3 gap-12 items-start">
            {/* Brand */}
            <div>
              <div
                className="text-3xl font-light tracking-widest gold-text mb-2"
                style={{ fontFamily: "var(--font-italiana)" }}
              >
                BELLA VISTA
              </div>
              <p className="eyebrow mb-5" style={{ fontSize: "0.6rem", letterSpacing: "0.35em" }}>
                RISTORANTE · EST. 1987
              </p>
              <p className="text-cream/40 text-xs font-light leading-relaxed" style={{ letterSpacing: "0.04em", maxWidth: "220px" }}>
                Milan&apos;s soul in every plate. Four decades of authentic Italian fine dining.
              </p>
              {/* Socials */}
              <div className="flex gap-3 mt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-cream/15 flex items-center justify-center text-cream/40 hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300 text-xs"
                    aria-label={s.label}
                    style={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="eyebrow mb-5" style={{ fontSize: "0.6rem" }}>Navigation</p>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-cream/45 text-xs font-light hover:text-gold-500 transition-colors duration-300 tracking-wider w-fit"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Hours summary */}
            <div>
              <p className="eyebrow mb-5" style={{ fontSize: "0.6rem" }}>Contact</p>
              <div className="space-y-4">
                <div>
                  <p className="text-cream/40 text-xs mb-0.5" style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}>ADDRESS</p>
                  <p className="text-cream/60 text-xs font-light leading-relaxed">
                    142 Via della Vigna Nuova<br />New York, NY 10021
                  </p>
                </div>
                <div>
                  <p className="text-cream/40 text-xs mb-0.5" style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}>RESERVATIONS</p>
                  <a href="tel:+12125550192" className="text-cream/60 hover:text-gold-500 transition-colors text-xs font-light">
                    +1 (212) 555-0192
                  </a>
                </div>
                <div>
                  <p className="text-cream/40 text-xs mb-0.5" style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}>KITCHEN HOURS</p>
                  <p className="text-cream/60 text-xs font-light">Wed–Sun · From 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom bar */}
        <div className="py-6 border-t border-cream/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/25 text-xs" style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} BELLA VISTA RISTORANTE · ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-cream/25 hover:text-cream/50 transition-colors text-xs"
                style={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-8 right-8 w-10 h-10 bg-gold-500 text-dark-900 flex items-center justify-center text-sm font-bold z-30 hover:bg-gold-400 transition-colors duration-300"
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </footer>
  );
}
