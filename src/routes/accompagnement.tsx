import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/accompagnement")({
  component: AccompagnementPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function AccompagnementPage() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setRootElement(document.getElementById("root"));
    }
  }, []);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dusty-rose/30 bg-dusty-rose/5 text-dusty-rose font-sans text-xs tracking-widest uppercase">
            Trois chemins, un seul centre
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-midnight mb-6 leading-tight">
            Un accompagnement <span className="italic text-dusty-rose">sur mesure</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-midnight/70 font-light leading-relaxed max-w-3xl mx-auto">
            La thérapie transpersonnelle intègre la dimension psychologique, émotionnelle, corporelle et spirituelle :
            elle vise la réunification intérieure, la libération des blessures, la reconnexion à sa vraie nature.
          </p>
        </motion.div>
      </section>

      {/* ── Parcours I : Du Moi au Soi ── */}
      <section id="moi-au-soi" className="py-20 bg-linen/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-serif text-6xl text-dusty-rose/20">I</span>
              <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-3 -mt-4">Du Moi au Soi</h2>
              <p className="font-sans text-sm uppercase tracking-widest text-dusty-rose mb-8">
                Reconnexion à l'essence · Guérison intérieure · Authenticité · Transformation
              </p>
              <p className="font-sans text-midnight/70 leading-relaxed mb-6">
                Je propose un accompagnement individuel de thérapie transpersonnelle à Paris (75005) ou en ligne,
                pour les personnes sensibles en quête d'authenticité et de vérité.
              </p>
              <p className="font-sans text-midnight/70 leading-relaxed mb-8">
                <span className="font-medium text-midnight">Relation à soi :</span> s'unifier, incarner sa vérité, guérir.
              </p>

              <h3 className="font-serif text-2xl text-midnight mb-4">À qui s'adresse cet accompagnement ?</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Aux personnes sensibles, profondes, très empathiques, qui ressentent une grande richesse intérieure mais aussi une grande fragilité…",
                  "À celles et ceux qui vivent avec la honte, une peur d'être « trop » ou « pas assez », le sentiment d'être inadéquat ou illégitime",
                  "À ceux qui souffrent d'un manque chronique d'estime de soi, de confiance en soi ou qui doutent de leur valeur",
                  "À celles et ceux qui portent le poids de blessures anciennes, de la peur du regard des autres, ou de schémas d'auto-critique",
                  "À ceux qui cherchent à sortir de l'hyper-adaptation, du jugement intérieur",
                  "À quiconque souhaite guérir l'origine de ces sentiments, retrouver son centre, l'élan d'être soi",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 flex-shrink-0">✧</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-midnight mb-4">Le chemin du retour à Soi</h3>
              <ul className="space-y-3 mb-10">
                {[
                  "Reconnaître et se libérer des conditionnements du passé qui agissent dans l'ombre de notre présent",
                  "Intégrer, rencontrer et guérir l'enfant intérieur ; réintégrer les parties réprimées, oubliées ou blessées en soi",
                  "Trouver et apprendre à rejoindre le Soi en vérité, au lieu de rester identifié·e au faux-soi",
                  "Apaiser les blessures émotionnelles, réguler le système nerveux pour retrouver son propre centre",
                  "Laisser émerger sa voix authentique, son besoin, son élan — par fidélité à la vérité de son être",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sage mt-1.5 flex-shrink-0">→</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-2xl text-midnight mb-4">Bénéfices</h3>
              <ul className="space-y-3 mb-10">
                {[
                  "Retrouver l'apaisement profond et la capacité à trouver son centre, ce lieu de paix, de sécurité, de joie",
                  "Se reconnecter à ses émotions, développer son intelligence émotionnelle",
                  "Réintégrer les dimensions refoulées de soi (créative, sensuelle, intuitive, receveuse…)",
                  "Prendre soin des blessures profondes, libérer les héritages transgénérationnels",
                  "Cesser de survivre, sortir des cycles répétitifs, s'ouvrir à la joie, à la confiance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-dusty-rose mt-1.5 flex-shrink-0">◆</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Modalités */}
              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                <p className="font-serif text-xl text-midnight mb-2">Modalités</p>
                <p className="font-sans text-midnight/70 text-sm mb-1">En individuel · Présentiel Paris 75005 ou à distance (Zoom)</p>
                <p className="font-sans text-midnight/70 text-sm mb-1">Minimum 8 séances réparties sur 4 mois</p>
                <p className="font-serif text-2xl text-dusty-rose mt-3">90 € <span className="text-sm text-midnight/50 font-sans">/ séance</span></p>
                {rootElement ? (
                  <PopupButton
                    url="https://calendly.com/ilariarubei/rdv-decouverte"
                    rootElement={rootElement}
                    text="Entretien découverte offert →"
                    className="inline-block mt-4 px-6 py-3 rounded-full bg-midnight text-ivory text-sm font-sans tracking-wide hover:bg-midnight/90 transition-colors"
                  />
                ) : (
                  <button className="inline-block mt-4 px-6 py-3 rounded-full bg-midnight/50 text-ivory text-sm font-sans tracking-wide" disabled>
                    Chargement...
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Parcours II : Entre Nous ── */}
      <section id="entre-nous" className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-serif text-6xl text-sage/20">II</span>
              <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-3 -mt-4">Entre Nous</h2>
              <p className="font-sans text-sm uppercase tracking-widest text-sage mb-8">
                Chemin relationnel · Communication consciente · Transformation du lien · Dépendance affective
              </p>

              <h3 className="font-serif text-2xl text-midnight mb-4">À qui s'adresse cet accompagnement ?</h3>
              <p className="font-sans text-midnight/70 leading-relaxed mb-4">
                Aux personnes ou couples qui aspirent à vivre le couple…
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vivent des difficultés relationnelles, des schémas de blocages, de conflits, ou de fermeture récurrente dans l'intimité",
                  "Ressentent une peur de la vulnérabilité, de l'abandon ou de la dépendance affective",
                  "Souhaitent sortir de la suradaptation, de l'évitement ou des luttes de pouvoir",
                  "Aspirent à une communication plus consciente, à poser des limites claires, à la joie de l'altérité",
                  "Souhaitent apprendre à rester connectés à leur propre centre sans se perdre dans le lien à l'autre",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sage mt-1.5 flex-shrink-0">✧</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-midnight/60 italic text-sm mb-8">
                Cet accompagnement existe en solo (travail individuel) ou en couple (séances communes).
              </p>

              <h3 className="font-serif text-2xl text-midnight mb-4">Un chemin pour apprendre à…</h3>
              <ul className="space-y-3">
                {[
                  "Habiter une autonomie fertile, relié à sa propre essence",
                  "Rester connecté(e) à sa verticalité intérieure autant qu'aux émotions de chacun",
                  "Savoir dire un vrai oui, un vrai non",
                  "Sortir des dynamiques de suradaptation, dépendance affective, et évitement",
                  "Oser la vulnérabilité sans se perdre, cultiver une communication féconde",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sage mt-1.5 flex-shrink-0">→</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-midnight mb-4">Bénéfices</h3>
              <ul className="space-y-3 mb-10">
                {[
                  "Identifier et transformer les mécanismes d'auto-sabotage, de fermeture ou de lutte dans la relation",
                  "Apprendre à écouter ses émotions et à en reconnaître les messages, les besoins cachés",
                  "Oser exprimer ses besoins & poser ses limites de façon authentique et sécurisante",
                  "Prendre soin des blessures qui émergent au sein du lien, sortir des projections",
                  "Célébrer la différence comme une richesse et co-créer une alliance vivante",
                  "Trouver un centre stable pour aimer depuis la sécurité et l'abondance plutôt que le manque",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sage mt-1.5 flex-shrink-0">◆</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-4">
                <p className="font-serif text-xl text-midnight">Modalités</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-linen/60 p-4 rounded-xl">
                    <p className="font-sans text-sm font-semibold text-midnight mb-1">En solo</p>
                    <p className="font-serif text-2xl text-dusty-rose">90 € <span className="text-sm text-midnight/50 font-sans">/ 1h15</span></p>
                  </div>
                  <div className="bg-linen/60 p-4 rounded-xl">
                    <p className="font-sans text-sm font-semibold text-midnight mb-1">En couple</p>
                    <p className="font-serif text-2xl text-dusty-rose">120 € <span className="text-sm text-midnight/50 font-sans">/ 1h15</span></p>
                  </div>
                </div>
                <p className="font-sans text-midnight/70 text-sm">Minimum 8 séances · 1 séance / 2 semaines max</p>
                <p className="font-sans text-midnight/70 text-sm">Présentiel Paris (75005) ou en ligne (Zoom)</p>
                <a
                  href="mailto:ilariainscriptions@gmail.com"
                  className="inline-block mt-2 px-6 py-3 rounded-full bg-midnight text-ivory text-sm font-sans tracking-wide hover:bg-midnight/90 transition-colors"
                >
                  Contact & inscription →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Parcours III : Rayonnement ── */}
      <section id="rayonnement" className="py-20 bg-linen/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-serif text-6xl text-gold/20">III</span>
              <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-3 -mt-4">Rayonnement</h2>
              <p className="font-sans text-sm uppercase tracking-widest text-gold mb-8">
                Mission de vie · Vocation unique · Créativité · Incarner sa voix unique
              </p>

              <h3 className="font-serif text-2xl text-midnight mb-4">À qui s'adresse cet accompagnement ?</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Ressentent un appel à offrir quelque chose d'essentiel au monde : une vocation, une mission, un message singulier",
                  "Se sentent freinés par le conditionnement, le manque de confiance, la peur d'être « trop » ou « pas assez »",
                  "Oscillent entre élan créatif profond et auto-sabotage, sentiment d'usurpation (syndrome de l'imposteur)",
                  "Souhaitent exprimer leur créativité, transmettre, guider, enseigner",
                  "Désirent réconcilier vie spirituelle, incarnation concrète et impact dans le monde",
                  "Artistes, accompagnants, thérapeutes, en reconversion, porteurs de projet de sens",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 flex-shrink-0">✧</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-2xl text-midnight mb-4">Un accompagnement pour…</h3>
              <ul className="space-y-3">
                {[
                  "Retrouver le feu vivant de la créativité « du Je Suis » (et non du manque)",
                  "Distinguer la voix vraie de l'élan profond de celle de l'ego inquiet",
                  "Oser faire rayonner sa voix, son art, sa présence unique dans le monde",
                  "Cesser de vouloir prouver sa valeur, s'affranchir du regard des autres",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 flex-shrink-0">→</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-midnight mb-4">Bénéfices</h3>
              <ul className="space-y-3 mb-10">
                {[
                  "Guérir la peur d'être trop ou pas assez, dépasser la légitimité, transformer le burn-out en joie d'un don-vivant",
                  "Oser se positionner, affirmer sa voix, transmettre ou déployer son projet unique",
                  "Prendre soin des blocages émotionnels ou des fidélités invisibles qui empêchent la pleine réalisation",
                  "Apprendre à faire des choix alignés, naturels, créatifs, vivants",
                  "Réconcilier sa vie intérieure, la spiritualité vécue, et sa présence dans le monde",
                  "Passer d'une contribution « en attente de validation » à une offrande vivante, incarnée, libre",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 flex-shrink-0">◆</span>
                    <span className="font-sans text-midnight/75 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                <p className="font-serif text-xl text-midnight mb-2">Modalités</p>
                <p className="font-sans text-midnight/70 text-sm mb-1">En individuel · Présentiel Paris (75003) ou en ligne (Zoom)</p>
                <p className="font-sans text-midnight/70 text-sm mb-1">Engagement conseillé : 8 séances / 4 mois</p>
                <p className="font-sans text-midnight/70 text-sm mb-1">Pour artistes, accompagnants, porteurs de projet, en reconversion</p>
                <p className="font-serif text-2xl text-dusty-rose mt-3">90 € <span className="text-sm text-midnight/50 font-sans">/ séance (1h15)</span></p>
                <a
                  href="mailto:ilariainscriptions@gmail.com"
                  className="inline-block mt-4 px-6 py-3 rounded-full bg-midnight text-ivory text-sm font-sans tracking-wide hover:bg-midnight/90 transition-colors"
                >
                  Contact & inscription →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Outils & Approche ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-4xl text-midnight mb-4">Outils & Approche</h2>
            <p className="font-sans text-midnight/70 font-light max-w-2xl mx-auto">
              Une approche intégrative qui combine spiritualité transpersonnelle, travail psycho-somatique et outils thérapeutiques reconnus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Thérapie Transpersonnelle", desc: "Dialogue Intérieur, Enfant Intérieur, Processus Chamaniques" },
              { name: "EMDR", desc: "Libération des traumas et expériences difficiles — approche scientifiquement validée" },
              { name: "Constellations Familiales", desc: "Explorez les patterns familiaux qui vous limitent, transformations profondes et rapides" },
              { name: "Breathwork", desc: "Reconnectez-vous à votre corps et à votre essence — libère les blocages émotionnels et énergétiques" },
              { name: "Méditation & Transe", desc: "Pratiques d'intériorisation et d'exploration du « royaume intérieur »" },
              { name: "Thérapie de Couple", desc: "Transformez votre relation en espace de croissance mutuelle et d'amour authentique" },
            ].map((tool, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="bg-linen/50 p-6 rounded-2xl border border-black/5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl text-midnight mb-2">{tool.name}</h3>
                <p className="font-sans text-midnight/60 text-sm leading-relaxed">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment commencer ── */}
      <section className="py-20 bg-linen/50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-4xl text-midnight mb-6">Comment commencer ?</h2>
            <p className="font-sans text-lg text-midnight/70 font-light mb-8">
              Contactez-moi pour un premier échange. Nous discuterons de votre situation, de vos besoins,
              et de la meilleure approche pour vous.
            </p>
            {rootElement ? (
              <PopupButton
                url="https://calendly.com/ilariarubei/rdv-decouverte"
                rootElement={rootElement}
                text="Réserver l'entretien découverte (offert)"
                className="inline-block px-10 py-4 rounded-full bg-midnight text-ivory font-sans tracking-wide hover:bg-midnight/90 transition-all shadow-xl shadow-midnight/10 text-lg"
              />
            ) : (
              <button className="inline-block px-10 py-4 rounded-full bg-midnight/50 text-ivory font-sans tracking-wide text-lg" disabled>
                Chargement...
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-4xl text-midnight mb-10 text-center">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                { q: "Puis-je faire les séances en ligne ?", a: "Oui, absolument. Toutes les séances peuvent se faire en ligne via Zoom, ou en présentiel si vous êtes à proximité." },
                { q: "Combien de séances recommandez-vous ?", a: "Un minimum de 8 séances pour voir des changements durables. Certaines personnes continuent plus longtemps selon leurs besoins." },
                { q: "Quelle est la durée d'une séance ?", a: "Entre 1h15 et 1h30." },
                { q: "Que se passe-t-il après la séance ?", a: "Vous recevrez des recommandations pour intégrer les transformations. Certaines personnes ressentent des changements immédiats, d'autres ont besoin de quelques jours pour intégrer." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-midnight/10 pb-6">
                  <h3 className="font-serif text-xl text-midnight mb-2">{faq.q}</h3>
                  <p className="font-sans text-midnight/70 text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
