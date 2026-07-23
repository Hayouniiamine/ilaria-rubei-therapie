import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";

export const Route = createFileRoute("/agenda")({
  component: AgendaPage,
});

function AgendaPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-midnight mb-6">Agenda</h1>
          <p className="font-sans text-lg text-midnight/70 font-light">
            Retrouvez ici les dates des prochains ateliers, cercles de femmes et événements.
          </p>
        </div>

        <div className="space-y-6">
          {[
            { date: "15 Sep", title: "Cercle de Femmes : Renouer avec sa puissance", type: "En Ligne" },
            { date: "28 Sep", title: "Atelier Respiration Holotropique", type: "Paris" },
            { date: "12 Oct", title: "Retraite : L'Éveil du Cœur", type: "Sud de la France" },
          ].map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-dusty-rose/30 transition-colors">
              <div className="flex-shrink-0 bg-linen text-midnight w-20 h-20 rounded-2xl flex flex-col items-center justify-center">
                <span className="font-serif text-2xl font-bold">{event.date.split(" ")[0]}</span>
                <span className="font-sans text-xs uppercase tracking-widest">{event.date.split(" ")[1]}</span>
              </div>
              <div className="flex-grow">
                <p className="font-sans text-xs text-dusty-rose uppercase tracking-widest mb-1">{event.type}</p>
                <h3 className="font-serif text-2xl text-midnight">{event.title}</h3>
              </div>
              <div>
                <button className="px-6 py-2 rounded-full bg-midnight text-ivory text-sm font-sans hover:bg-midnight/80 transition-colors whitespace-nowrap">
                  S'inscrire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
