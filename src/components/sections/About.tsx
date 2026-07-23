"use client";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative shadow-2xl">
              <img
                src="/images/ilaria-portrait.jpg"
                alt="Ilaria Rubei — Thérapeute transpersonnelle"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-dusty-rose/15 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-sage/15 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, ease: "easeOut" as const, delay: 0.15 }}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dusty-rose/30 bg-dusty-rose/5 text-dusty-rose font-sans text-xs tracking-widest uppercase">
              À propos
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-8 leading-tight">
              Ici, la thérapie devient <span className="italic text-dusty-rose">initiation</span>
            </h2>

            <div className="space-y-5 font-sans text-midnight/75 text-[16px] font-light leading-relaxed">
              <p>
                J'accompagne les êtres sensibles — celles et ceux qui aspirent à incarner leur vérité,
                à guérir les blessures du passé, à aimer en conscience et à offrir leur contribution unique au monde.
              </p>
              <p>
                Ici, la thérapie devient initiation, la relation espace sacré, et la guérison, retrouvailles avec la joie de l'être.
              </p>
              <p>
                Je propose une approche intégrative qui combine <strong className="text-midnight font-medium">spiritualité transpersonnelle</strong>, 
                travail <strong className="text-midnight font-medium">psycho-somatique</strong> et outils thérapeutiques reconnus 
                — EMDR, constellations familiales, breathwork — des approches scientifiquement validées.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/a-propos"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-midnight/15 text-midnight font-sans text-sm tracking-wide hover:border-midnight hover:bg-midnight/5 transition-all"
              >
                Plus à propos de moi →
              </Link>
              <a
                href="https://www.youtube.com/@ilariarubei"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-dusty-rose/20 text-dusty-rose font-sans text-sm tracking-wide hover:border-dusty-rose hover:bg-dusty-rose/5 transition-all"
              >
                Voir mes vidéos YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
