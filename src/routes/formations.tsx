import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/formations")({
  component: FormationsPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function FormationsPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold font-sans text-xs tracking-widest uppercase">
            Formation pour Accompagnantes
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-midnight mb-4 leading-tight">
            De la blessure à l'<span className="italic text-dusty-rose">éclosion</span>
          </h1>
          <p className="font-serif text-xl italic text-midnight/60 mb-8">
            De la répétition du passé, à l'expérience du possible.
          </p>
          <p className="font-sans text-lg text-midnight/70 font-light leading-relaxed max-w-3xl mx-auto">
            Depuis cinq ans, je forme des thérapeutes et des praticiens à l'accompagnement dans la guérison des blessures.
            Je propose une méthode qui intègre 20 ans de recherche sur le sujet, des formations et des approches différentes et complémentaires.
          </p>
        </motion.div>
      </section>

      {/* Pour qui */}
      <section className="py-16 bg-linen/50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl text-midnight mb-6">Pour qui ?</h2>
              <p className="font-sans text-midnight/70 leading-relaxed">
                Les praticiens, thérapeutes et coachs désireux d'intégrer dans leurs accompagnements un parcours structuré par étapes,
                intégratif et expérientiel, visant à dépasser l'emprise des blessures du passé sur le présent et sur le possible.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-midnight mb-6">Qu'est-ce que cette formation vise ?</h2>
              <ul className="space-y-3">
                {[
                  "Intégrer le chemin qui mène à l'émergence de « la perle », de la lumière, du nouveau possible",
                  "Accompagner à sortir de la répétition d'un vécu comme une calamité vis-à-vis de laquelle nous nous sentons impuissants",
                  "Ouvrir l'espace du nouveau possible qui sommeille au cœur de la blessure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 flex-shrink-0">✧</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl text-midnight mb-8 text-center">En quoi cette formation diffère des autres ?</h2>
            <p className="font-sans text-midnight/70 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Pour changer d'expérience, la théorie et la compréhension intellectuelle ne sont pas suffisantes.
              Adresser le niveau émotionnel seulement non plus. Transcender l'humain par la spiritualité non plus.
              Toutes les pièces du puzzle sont nécessaires pour qu'une alchimie puisse s'opérer.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Accompagner à la conscientisation de l'inconscient par l'observation du lien entre intérieur et extérieur",
                "Identifier les stratégies d'adaptation à la douleur, les schémas issus des blessures encore actifs aujourd'hui",
                "Accompagner à accéder au ressenti cristallisé et à la libération émotionnelle",
                "Intégrer et accompagner avec des processus ciblés pour l'enfant intérieur, nos parties intérieures, le Soi",
                "Accompagner au niveau spirituel au changement d'identité du petit soi au Soi",
                "Accompagner au choix incarné d'un nouveau possible et faciliter l'autonomie d'intégration",
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="p-5 bg-linen/50 rounded-2xl border border-black/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-dusty-rose mt-0.5 flex-shrink-0 font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalités */}
      <section className="py-16 bg-linen/50">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="bg-white p-8 md:p-10 rounded-[28px] border border-black/5 shadow-sm">
            <h2 className="font-serif text-3xl text-midnight mb-6">Modalités pratiques</h2>
            <div className="space-y-4 font-sans text-midnight/70 text-[15px] leading-relaxed">
              <p><strong className="text-midnight">Format :</strong> En ligne sur Zoom</p>
              <p><strong className="text-midnight">Durée :</strong> 3 mois ensemble en intensif pour intégrer les étapes, en petit groupe</p>
              <p><strong className="text-midnight">Rythme :</strong> Une session de 2h par semaine, en ligne</p>
              <p><strong className="text-midnight">Supervision :</strong> À la fin de la formation est proposée une supervision sur six mois minimum (il est possible de prolonger), un rdv de 2h par mois, à distance</p>
              <p><strong className="text-midnight">Paiement :</strong> Possibilité de règlement en plusieurs fois</p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/5">
              <p className="font-sans text-midnight/60 text-sm mb-4">
                Un court entretien offert avec moi est nécessaire afin de faire le point sur vos besoins.
              </p>
              <a
                href="mailto:ilariainscriptions@gmail.com"
                className="inline-block px-8 py-4 rounded-full bg-midnight text-ivory font-sans text-sm tracking-wide hover:bg-midnight/90 transition-colors shadow-lg shadow-midnight/10"
              >
                Contacter pour l'entretien préalable →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conference replay */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-3xl text-midnight mb-4">Conférence gratuite</h2>
            <p className="font-serif italic text-xl text-dusty-rose mb-6">
              De la blessure à l'éclosion : Enfant intérieur, les sous-personnalités, le Soi.
            </p>
            <a
              href="https://www.youtube.com/watch?v=Wz9mFVTdwrc&t=4025s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full border border-dusty-rose/30 text-dusty-rose font-sans text-sm tracking-wide hover:bg-dusty-rose/5 hover:border-dusty-rose transition-all"
            >
              ▶ Écouter le replay de la conférence
            </a>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
