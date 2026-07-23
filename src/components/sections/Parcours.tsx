"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceModal, ServiceData } from "../ui/ServiceModal";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const parcoursData: ServiceData[] = [
  {
    id: "moi-au-soi",
    num: "I",
    title: "Du Moi au Soi",
    subtitle: "Thérapie individuelle",
    accent: "text-dusty-rose",
    accentBg: "bg-dusty-rose/5 border-dusty-rose/20",
    description:
      "Pour revenir à ton centre, guérir les blessures du passé, sortir des schémas répétitifs et renouer avec ton authenticité. Un accompagnement en thérapie transpersonnelle pour la réunification intérieure.",
    price: "90 €",
    duration: "Séance individuelle de 1h15, en présentiel ou en ligne.",
    details: [
      "Exploration et guérison de l'enfant intérieur",
      "Libération des mémoires émotionnelles",
      "Sortie des schémas de survie et d'adaptation",
      "Reconnexion à son essence et sa joie véritable"
    ],
    calendlyUrl: "https://calendly.com/ilariarubei/rdv-decouverte",
  },
  {
    id: "entre-nous",
    num: "II",
    title: "Entre Nous",
    subtitle: "Thérapie de couple",
    accent: "text-sage",
    accentBg: "bg-sage/5 border-sage/20",
    description:
      "Pour transformer ta relation à l'autre (en solo ou en couple), aller vers l'amour conscient, la communication vraie, l'intimité qui restaure et fait grandir. Un espace pour traverser la dépendance, la peur ou l'épuisement, et célébrer la richesse du lien.",
    price: "120 €",
    duration: "Séance de couple de 1h15, en présentiel ou en ligne.",
    details: [
      "Communication consciente et authentique",
      "Compréhension des blessures réactivées dans le lien",
      "Traversée des dynamiques de dépendance affective",
      "Restauration de la confiance et de l'intimité"
    ],
    calendlyUrl: "https://calendly.com/ilariarubei/rdv-decouverte",
  },
  {
    id: "rayonnement",
    num: "III",
    title: "Rayonnement",
    subtitle: "Vocation & Créativité",
    accent: "text-gold",
    accentBg: "bg-gold/5 border-gold/20",
    description:
      "Pour révéler ta vocation, donner ta voix au monde, dépasser l'auto-censure, la honte ou le syndrome de l'imposteur, et incarner ta contribution authentique. Pour artistes, accompagnants, créateurs, porteurs de projets.",
    price: "90 €",
    duration: "Séance individuelle de 1h15, en présentiel ou en ligne.",
    details: [
      "Clarification de sa mission de vie (Ikigai profond)",
      "Levée des blocages liés à la visibilité et l'imposture",
      "Déploiement du potentiel créatif",
      "Structure et ancrage pour les porteurs de projets"
    ],
    calendlyUrl: "https://calendly.com/ilariarubei/rdv-decouverte",
  },
];

export function Parcours() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <section id="parcours" className="py-24 bg-linen/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-midnight/10 bg-white/60 text-midnight/60 font-sans text-xs tracking-widest uppercase">
            L'accompagnement & Tarifs
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-4">
            Trois parcours, un <span className="italic text-dusty-rose">Cœur</span>
          </h2>
          <p className="font-sans text-midnight/60 text-sm max-w-xl mx-auto">
            Engagement conseillé : minimum 8 séances réparties sur 4 mois. Première séance découverte offerte.
          </p>
        </motion.div>

        {/* Asymmetric grid: first row 60/40, second row full */}
        <div className="grid lg:grid-cols-5 gap-6 mb-6">
          {/* Card I — spans 3 cols */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0 }}
            className={`lg:col-span-3 p-8 md:p-10 rounded-[28px] border ${parcoursData[0].accentBg} backdrop-blur-sm group hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col`}
            onClick={() => setSelectedService(parcoursData[0])}
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`font-serif text-5xl ${parcoursData[0].accent} opacity-30 -mt-2`}>{parcoursData[0].num}</span>
              <div className="text-right">
                <p className="font-serif text-2xl text-midnight">{parcoursData[0].price}</p>
                <p className="font-sans text-xs text-midnight/50">par séance</p>
              </div>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-midnight mb-2">{parcoursData[0].title}</h3>
            <p className="font-sans text-midnight/70 leading-relaxed mb-8 flex-grow max-w-xl">{parcoursData[0].description}</p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className={`font-sans text-sm font-medium ${parcoursData[0].accent} group-hover:underline tracking-wide`}>
                Découvrir ce parcours →
              </span>
            </div>
          </motion.div>

          {/* Card II — spans 2 cols */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}
            className={`lg:col-span-2 p-8 md:p-10 rounded-[28px] border ${parcoursData[1].accentBg} backdrop-blur-sm group hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col relative overflow-hidden`}
            onClick={() => setSelectedService(parcoursData[1])}
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-sage/80 text-white text-[10px] font-sans tracking-widest uppercase rounded-bl-xl">
              Duo
            </div>
            <div className="flex justify-between items-start mb-4">
              <span className={`font-serif text-5xl ${parcoursData[1].accent} opacity-30 -mt-2`}>{parcoursData[1].num}</span>
              <div className="text-right mt-4 md:mt-0">
                <p className="font-serif text-2xl text-midnight">{parcoursData[1].price}</p>
                <p className="font-sans text-xs text-midnight/50">par séance</p>
              </div>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-midnight mb-2">{parcoursData[1].title}</h3>
            <p className="font-sans text-midnight/70 leading-relaxed mb-8 flex-grow">{parcoursData[1].description}</p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className={`font-sans text-sm font-medium ${parcoursData[1].accent} group-hover:underline tracking-wide`}>
                Découvrir ce parcours →
              </span>
            </div>
          </motion.div>
        </div>

        {/* Card III — full width */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.24 }}
          className={`p-8 md:p-10 rounded-[28px] border ${parcoursData[2].accentBg} backdrop-blur-sm group hover:shadow-lg transition-all duration-500 cursor-pointer`}
          onClick={() => setSelectedService(parcoursData[2])}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className={`font-serif text-5xl ${parcoursData[2].accent} opacity-30 -mt-2`}>{parcoursData[2].num}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-midnight">{parcoursData[2].title}</h3>
              </div>
              <p className="font-sans text-midnight/70 leading-relaxed">{parcoursData[2].description}</p>
            </div>
            
            <div className="md:text-right flex flex-col md:items-end justify-center">
              <p className="font-serif text-4xl text-midnight mb-1">{parcoursData[2].price}</p>
              <p className="font-sans text-sm text-midnight/50 mb-6">par séance</p>
              
              <span className={`inline-block font-sans text-sm font-medium ${parcoursData[2].accent} group-hover:underline tracking-wide`}>
                Découvrir ce parcours →
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <ServiceModal 
        isOpen={selectedService !== null} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </section>
  );
}
