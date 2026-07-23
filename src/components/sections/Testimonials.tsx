"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const testimonials = [
  {
    text: "Sur plusieurs années, j'ai eu la chance de recevoir différents enseignements d'Ilaria : l'enfant intérieur, le breathwork, la formation autour du cacao cérémonial, du tabac cérémonial, les énergies du féminin et du masculin sacrés, la fabrication du tambour chamanique et son utilisation, la maîtrise Reiki. Ilaria m'a accompagnée dans un travail profond de guérison de mes blessures, de mes ombres mais aussi d'acceptation de ma propre Lumière. Elle m'a montré que je peux vivre les ailes ouvertes et accomplir mon travail le cœur ouvert tout en préservant mon énergie vitale. Ilaria est toujours présente en moi, dans mon cœur comme une grande sœur, comme l'enseignante que l'on n'oublie pas et qui a eu un impact transformateur sur ma vie.",
    name: "Isabelle Levecq",
    highlight: true,
  },
  {
    text: "Mon travail avec Ilaria a été une révélation douce, profonde, intime. Une façon de rencontrer mes racines, mes profondeurs, mon humanité dans sa version la plus profonde, sans masques, en douceur. Le travail intime, accompagné par ses mots toujours justes, sensés, sensibles, m'a permi d'avoir accès à d'autres espaces relationnels. Comprendre que « la spiritualité » c'est juste normal. C'est « juste » une présence au monde délestée de masques. Un espace de rencontre. Un espace de jeu. La vie.",
    name: "Claire Le Floch",
    highlight: true,
  },
  {
    text: "Rares et précieux sont les êtres humains qui ont fait le choix de consacrer leur vie à des causes qui les transcendent et le font avec authenticité, engagement et amour. Ilaria fait incontestablement partie de cette famille. Sa capacité à canaliser ce qui est présent pour le groupe et à le restituer pour lui permettre d'avancer en conscience ont toujours été d'une grande pertinence et puissance.",
    name: "Jean-Luc Arnoult",
    highlight: false,
  },
  {
    text: "Chaque workshop est spécial, permet de nous connecter à nos émotions. Ilaria guide vers le meilleur de soi-même avec énergie, sensibilité et humilité si spéciale.",
    name: "Lou",
    highlight: false,
  },
  {
    text: "Rencontrer Ilaria a changé ma manière de voir la vie. Des rêves matérialisés, de l'énergie partagée, le début d'une nouvelle vie. Le courage de devenir soi-même et le rester !",
    name: "Marina Losa",
    highlight: false,
  },
  {
    text: "Ilaria est une thérapeute compétente, aimante, efficace, qui t'encourage avec douceur. Son profond respect de notre rythme et sa passion pour le cacao sacré sont un baume pour l'âme.",
    name: "Paulina Biedugnis",
    highlight: false,
  },
  {
    text: "Un véritable tournant dans ma vie spirituelle. Avec Ilaria, chaque pratique est basée sur l'amour inconditionnel et l'acceptation. Son accompagnement individuel a été précieux, profond et structurant.",
    name: "Daniela",
    highlight: false,
  },
  {
    text: "Je recommande pleinement Ilaria les yeux fermés et le cœur ouvert ! C'est une femme magnifique. Elle sait transmettre avec justesse et sacré. Je la recommande aussi pour les praticiennes, son expérience et son écoute sont précieuses.",
    name: "Anne-Sophie",
    highlight: false,
  },
  {
    text: "Sa formation à la guérison de l'enfant intérieur a largement dépassé mes attentes. Ilaria offre un vrai soutien bien au-delà de l'outil : son accompagnement individuel a changé ma vie.",
    name: "Béatrice",
    highlight: false,
  },
  {
    text: "Grâce à la formation de Cacao avec Ilaria, j'ai trouvé guérison et confiance, et je transmets aujourd'hui cette pratique à mon tour. Sa sagesse et sa connexion au monde invisible facilitent la transformation.",
    name: "Linnea S.",
    highlight: false,
  },
];

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section id="temoignages" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-midnight/10 bg-white/60 text-midnight/60 font-sans text-xs tracking-widest uppercase">
            L'amour des clients
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-midnight">
            Ils ont vécu l'<span className="italic text-dusty-rose">expérience</span>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayed.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, ease: "easeOut" as const, delay: i * 0.06 }}
              className={`break-inside-avoid p-6 md:p-8 rounded-[24px] border transition-all duration-300 hover:shadow-lg ${
                t.highlight
                  ? "bg-white border-dusty-rose/15 shadow-md"
                  : "bg-linen/40 border-black/5"
              }`}
            >
              <p className="font-serif italic text-midnight/80 leading-relaxed mb-5 text-[15px]">
                « {t.text} »
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dusty-rose/15 flex items-center justify-center text-dusty-rose font-serif text-sm">
                  {t.name.charAt(0)}
                </div>
                <p className="font-sans text-sm text-midnight/60 tracking-wide">— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && testimonials.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border border-midnight/15 text-midnight font-sans text-sm tracking-wide hover:border-midnight hover:bg-midnight/5 transition-all"
            >
              Voir tous les témoignages ({testimonials.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
