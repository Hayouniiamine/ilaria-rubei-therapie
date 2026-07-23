"use client";
import { motion } from "framer-motion";
import { HeroParticles } from "../three/HeroParticles";

import { EnergyOrb } from "../three/EnergyOrb";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-ivory -z-20" />
      <HeroParticles />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-dusty-rose/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dusty-rose/30 bg-dusty-rose/5 text-dusty-rose font-sans text-xs tracking-widest uppercase">
            Thérapeute Transpersonnelle · Autrice · Formatrice
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-midnight">
            Incarner notre nature <span className="italic text-dusty-rose">Divine</span>, en intégrant pleinement l'humain
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-midnight/70 font-light mb-10 leading-relaxed max-w-lg">
            J'accompagne les êtres sensibles — celles et ceux qui aspirent à incarner leur vérité,
            à guérir les blessures du passé, à aimer en conscience et à offrir leur contribution unique au monde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendly.com/ilariarubei/rdv-decouverte"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-midnight text-ivory text-center font-sans tracking-wide hover:bg-midnight/90 transition-all shadow-xl shadow-midnight/10"
            >
              Entretien Découverte (Offert)
            </a>
            <a 
              href="#parcours"
              className="px-8 py-4 rounded-full border border-midnight/20 text-midnight text-center font-sans tracking-wide hover:border-midnight hover:bg-midnight/5 transition-all"
            >
              Découvrir les parcours
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-midnight/60 font-sans">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-ivory bg-linen flex items-center justify-center text-xs">
                  ★
                </div>
              ))}
            </div>
            <span>Paris · Séances en visio partout dans le monde</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full mt-10 lg:mt-0"
        >
          {/* Main 3D Element */}
          <div className="w-full h-full relative">
             <EnergyOrb />
          </div>
          
          {/* Floating Quote */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 -left-12 bg-ivory p-6 rounded-2xl shadow-xl max-w-xs backdrop-blur-md bg-ivory/90 border border-white/50"
          >
            <p className="font-serif italic text-lg text-midnight leading-tight">
              « La blessure est l'endroit où la lumière entre en vous »
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-widest text-dusty-rose">— Rumi</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
