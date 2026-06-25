"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const menuData = {
  Starters: [
    { name: "Burrata con Fichi e Prosciutto", desc: "Creamy Pugliese burrata, Parma ham, grilled figs, aged balsamic, toasted sourdough", price: "$28" },
    { name: "Carpaccio di Polpo", desc: "Octopus terrine, capers, lemon oil, Taggiasca olives, micro celery", price: "$32" },
    { name: "Tartare di Manzo al Coltello", desc: "Hand-cut beef tartare, truffle aioli, caperberries, Parmigiano, quail egg", price: "$36" },
    { name: "Crema di Ceci con Gamberi", desc: "Slow-cooked chickpea cream, grilled Mazara red prawns, nduja oil, crispy sage", price: "$34" },
    { name: "Carpaccio di Salmone Atlantico", desc: "Wild Atlantic salmon, avocado, citrus gel, dill oil, salmon roe, cucumber", price: "$30" },
  ],
  "Main Course": [
    { name: "Tagliolini al Tartufo Nero", desc: "Hand-cut egg pasta, Norcia black truffle, aged butter, 36-month Parmigiano", price: "$62" },
    { name: "Branzino in Crosta di Sale", desc: "Salt-baked wild sea bass, lemon thyme, seasonal vegetables, salsa verde", price: "$74" },
    { name: "Costata di Manzo Valdostana", desc: "45-day dry-aged ribeye, Barolo jus, roasted bone marrow, watercress, anchovy", price: "$89" },
    { name: "Risotto ai Porcini e Barolo", desc: "Carnaroli, wild porcini, Barolo reduction, whipped Grana Padano", price: "$58" },
    { name: "Agnello alla Piemontese", desc: "Slow-roasted rack of lamb, salsa di erbe, roasted artichoke, fondant potato", price: "$82" },
    { name: "Pappardelle all'Anatra Selvatica", desc: "Bronze-die pappardelle, wild duck ragù, juniper, aged Chianti Classico, thyme", price: "$54" },
  ],
  Desserts: [
    { name: "Tiramisù della Nonna Luciana", desc: "The original family recipe. Espresso-soaked Savoiardi, fresh mascarpone mousse, Peruvian cocoa", price: "$22" },
    { name: "Pannacotta alla Vaniglia", desc: "Bourbon vanilla panna cotta, Amalfi lemon curd, honeycomb, candied zest", price: "$18" },
    { name: "Tortino al Cioccolato", desc: "Valrhona dark chocolate fondant, pistachio gelato, sea salt, olive oil", price: "$24" },
    { name: "Cannoli Siciliani", desc: "Hand-formed pastry shells, sheep's ricotta, Bronte pistachio, candied orange", price: "$20" },
  ],
  Drinks: [
    { name: "Negroni alla Bella Vista", desc: "Campari, Vermouth di Torino, Tanqueray, smoked orange, rosemary", price: "$22" },
    { name: "Aperol Spritz Classico", desc: "Aperol, Prosecco Superiore, soda, blood orange, fresh basil", price: "$18" },
    { name: "Barolo Chinato", desc: "Digestivo from Piedmont. Quinine bark, cinchona, gentian — served on ice", price: "$24" },
    { name: "Acqua Morelli", desc: "Still or sparkling mineral water from Monte Morello springs, Tuscany", price: "$8" },
  ],
};

type TabKey = keyof typeof menuData;

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("Starters");

  return (
    <section id="menu" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Right side decorative image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden xl:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          eyebrow="Cucina Italiana"
          title="Our"
          titleItalic="Menu"
          subtitle="Seasonal, ingredient-led cooking rooted in Italy's regional traditions."
        />

        {/* Tabs */}
        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-0 mb-14 border border-gold-500/15 w-fit mx-auto">
            {(Object.keys(menuData) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-7 py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "text-dark-900 bg-gold-500"
                    : "text-cream/50 hover:text-cream"
                }`}
                style={{ letterSpacing: "0.2em", fontFamily: "var(--font-jost)" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            {menuData[activeTab].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group flex items-start gap-6 py-6 border-b border-cream/8 hover:border-gold-500/20 transition-colors duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h4
                      className="text-lg font-light text-cream group-hover:text-gold-500 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.name}
                    </h4>
                    <span
                      className="text-lg font-light text-gold-500 whitespace-nowrap"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p className="text-cream/40 text-xs font-light leading-relaxed" style={{ letterSpacing: "0.04em" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeInSection delay={0.3}>
          <div className="text-center mt-14">
            <p className="text-cream/40 text-xs mb-6 tracking-widest" style={{ letterSpacing: "0.2em" }}>
              FULL MENU AVAILABLE UPON REQUEST OR AT THE TABLE
            </p>
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block border border-gold-500/50 text-gold-500 px-10 py-3.5 text-xs tracking-widest uppercase hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
              style={{ letterSpacing: "0.2em" }}
            >
              Reserve Your Table
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
