import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";

export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-linen aspect-[4/5] rounded-[40px] relative overflow-hidden">
               <img 
                 src="/images/ilaria-portrait.jpg" 
                 alt="Ilaria Rubei"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dusty-rose/20 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dusty-rose/30 bg-dusty-rose/5 text-dusty-rose font-sans text-xs tracking-widest uppercase">
              Mon Parcours
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-midnight mb-8">
              À la croisée de l'<span className="italic text-dusty-rose">art</span> et de la <span className="italic text-dusty-rose">thérapie</span>
            </h1>
            
            <div className="space-y-6 font-sans text-lg text-midnight/80 font-light leading-relaxed">
              <p>
                Née en Italie, j'ai d'abord exploré le monde à travers l'art et l'architecture avant de me tourner vers l'accompagnement thérapeutique. Cette sensibilité artistique imprègne aujourd'hui ma pratique, où je considère chaque individu comme une œuvre en devenir.
              </p>
              <p>
                Mon cheminement personnel et spirituel m'a conduite vers la psychologie transpersonnelle, une approche qui embrasse la totalité de l'être : le corps, l'âme et l'esprit.
              </p>
              <p>
                Je suis certifiée en thérapie transpersonnelle, sophrologie, et praticienne en soins énergétiques. Mon accompagnement est un espace de sécurité, d'écoute profonde et de non-jugement, conçu pour vous aider à renouer avec votre essence véritable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
