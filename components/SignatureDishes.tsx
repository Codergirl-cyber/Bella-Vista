"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import FadeInSection from "./FadeInSection";

const dishes = [
  {
    name: "Tagliolini al Tartufo Nero",
    description: "Hand-cut egg tagliolini, tossed in aged butter with generous shavings of Norcia black truffle and a touch of Parmigiano Reggiano aged 36 months.",
    price: "$62",
    tag: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Branzino in Crosta di Sale",
    description: "Wild-caught sea bass baked whole in a Sicilian sea-salt crust with lemon zest and fresh thyme. Unveiled tableside — a ritual as old as the coast it comes from.",
    price: "$74",
    tag: "Pesce",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Risotto ai Porcini e Barolo",
    description: "Carnaroli risotto cooked in a Barolo reduction, finished with wild porcini mushrooms foraged from Piedmontese forests and whipped Grana Padano.",
    price: "$58",
    tag: "Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Costata di Manzo Valdostana",
    description: "Dry-aged 45-day ribeye from a Valdostan farm, served with a Barolo jus, roasted bone marrow, and a crisp watercress salad with anchovy dressing.",
    price: "$89",
    tag: "Carne",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Pappardelle all'Anatra Selvatica",
    description: "Wide ribbons of bronze-die pappardelle with a slow-braised wild duck ragù, scented with juniper, aged Chianti Classico, and fresh thyme.",
    price: "$54",
    tag: "Pasta",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Tiramisù della Nonna Luciana",
    description: "The original family recipe — served in its deep ceramic dish. Espresso-soaked Savoiardi, mascarpone mousse made fresh each morning, dusted with single-origin Peruvian cocoa.",
    price: "$22",
    tag: "Dolce",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85&auto=format&fit=crop",
  },
];

export default function SignatureDishes() {
  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Kitchen's Pride"
          title="Signature"
          titleItalic="Dishes"
          subtitle="Six plates that define who we are — each one perfected over years, never changed without reason."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, index }: { dish: (typeof dishes)[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-dark-700 overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-dark-700/20 to-transparent opacity-70" />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span
            className="bg-dark-900/70 backdrop-blur-sm border border-gold-500/30 text-gold-500 px-3 py-1"
            style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.25em" }}
          >
            {dish.tag.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="text-xl font-light text-cream leading-tight group-hover:text-gold-500 transition-colors duration-300"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {dish.name}
          </h3>
          <span
            className="text-xl font-light text-gold-500 whitespace-nowrap"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {dish.price}
          </span>
        </div>
        <p className="text-cream/45 text-xs font-light leading-relaxed" style={{ letterSpacing: "0.04em" }}>
          {dish.description}
        </p>

        {/* Hover line */}
        <motion.div
          className="mt-5 h-px bg-gold-500 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-500/20 transition-all duration-300 group-hover:border-gold-500/50" />
    </motion.div>
  );
}
