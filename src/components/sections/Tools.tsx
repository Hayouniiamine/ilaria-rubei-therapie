"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const tools = [
  { name: "EMDR", desc: "Libération des traumatismes, mémoire émotionnelle" },
  { name: "Breathwork", desc: "Respiration consciente, transformation corporelle" },
  { name: "Constellations familiales", desc: "Systémiques, relationnelles, animiques" },
  { name: "Dialogue intérieur", desc: "Enfant intérieur, Voice Dialogue" },
  { name: "Cacao cérémoniel", desc: "Plantes sacrées — Mapacho, Lotus bleu, Rose" },
  { name: "Accompagnement psycho-spirituel", desc: "Somatique et rituel" },
];

export function Tools() {
  return (
    <section id="outils" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-midnight/10 bg-white/60 text-midnight/60 font-sans text-xs tracking-widest uppercase">
            Des approches adaptées à votre histoire
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-4">
            Outils & <span className="italic text-dusty-rose">Pratiques</span>
          </h2>
          <p className="font-sans text-lg text-midnight/60 font-light max-w-2xl mx-auto">
            J'utilise des outils adaptés à ton histoire et à tes besoins, combinant le niveau psychologique, émotionnel, corporel et spirituel.
          </p>
        </motion.div>

        {/* Pill-style scrollable tags for mobile, grid for desktop */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, ease: "easeOut" as const, delay: i * 0.06 }}
              className="group relative px-6 py-4 md:px-8 md:py-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:border-dusty-rose/20 transition-all duration-300 cursor-default"
            >
              <h3 className="font-serif text-lg text-midnight group-hover:text-dusty-rose transition-colors">
                {tool.name}
              </h3>
              <p className="font-sans text-sm text-midnight/50 mt-1">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
