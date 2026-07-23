"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function Book() {
  return (
    <section id="book" className="py-24 bg-linen/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Cover */}
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-lg shadow-2xl relative">
              <img
                src="/images/Cacao-sacre-Le-chemin-qui-mene-au-coeur.jpg"
                alt="Livre Cacao Sacré par Ilaria Rubei"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Details */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, ease: "easeOut" as const, delay: 0.2 }}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold font-sans text-xs tracking-widest uppercase">
              Mon Livre
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-3 leading-tight">
              Cacao Sacré
            </h2>
            <p className="font-serif text-xl italic text-dusty-rose mb-6">
              Le chemin qui mène au cœur
            </p>
            <p className="font-sans text-sm text-midnight/50 uppercase tracking-widest mb-6">
              Éditions Véga — Guy Trédaniel
            </p>

            <div className="space-y-4 font-sans text-midnight/75 text-[15px] font-light leading-relaxed mb-8">
              <p>
                Première autrice en français à publier un ouvrage entièrement dédié au cacao cérémoniel,
                je partage, dans ce livre, la rencontre avec une plante maîtresse :
              </p>
              <ul className="space-y-2 ml-1">
                {[
                  "Un guide pour explorer le rituel du cacao, ses bienfaits, sa dimension chamanique et sacrée",
                  "Des clés pour relier le corps, l'âme et le cœur ; réconcilier l'intérieur et l'extérieur, l'ombre et la lumière",
                  "Conseils pratiques : comment choisir, préparer et vivre la médecine du Cacao en conscience",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">✧</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="italic text-midnight/60">
                Le cacao est une merveilleuse plante enseignante, un allié précieux qui nous invite à éclairer
                ce qui a besoin d'être vu, d'être transmuté, en fonction de notre sensibilité et de notre histoire singulière.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.amazon.fr/dp/B0DPZML9R7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-midnight text-ivory font-sans text-sm tracking-wide hover:bg-midnight/90 transition-colors shadow-lg shadow-midnight/10"
              >
                Commander sur Amazon
              </a>
              <a
                href="https://www.fnac.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-midnight/15 text-midnight font-sans text-sm tracking-wide hover:border-midnight hover:bg-midnight/5 transition-all"
              >
                Voir sur la FNAC
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
