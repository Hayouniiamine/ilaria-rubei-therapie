import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "../components/layout/PublicLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto min-h-screen">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-midnight mb-6">Contact</h1>
            <p className="font-sans text-lg text-midnight/70 font-light mb-10 leading-relaxed">
              Vous avez une question ou souhaitez prendre rendez-vous ? 
              N'hésitez pas à m'écrire, je vous répondrai dans les plus brefs délais.
            </p>

            <div className="space-y-6 font-sans text-midnight/80">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:ilariainscriptions@gmail.com" className="text-dusty-rose hover:underline">
                  ilariainscriptions@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Consultations</h3>
                <p>En cabinet à Paris ou en téléconsultation (Zoom/Skype)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Réseaux Sociaux</h3>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.facebook.com/ilaria.rubei" target="_blank" rel="noopener noreferrer" className="text-midnight/60 hover:text-dusty-rose transition-colors">Facebook</a>
                  <a href="https://www.instagram.com/ilaria.rubei" target="_blank" rel="noopener noreferrer" className="text-midnight/60 hover:text-dusty-rose transition-colors">Instagram</a>
                  <a href="https://www.youtube.com/@ilariarubei" target="_blank" rel="noopener noreferrer" className="text-midnight/60 hover:text-dusty-rose transition-colors">YouTube</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl shadow-midnight/5 border border-ivory">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm text-midnight/60 mb-2">Prénom</label>
                  <input type="text" className="w-full bg-ivory border-none rounded-xl p-4 font-sans text-midnight focus:ring-2 focus:ring-dusty-rose/50 outline-none transition-all" />
                </div>
                <div>
                  <label className="block font-sans text-sm text-midnight/60 mb-2">Nom</label>
                  <input type="text" className="w-full bg-ivory border-none rounded-xl p-4 font-sans text-midnight focus:ring-2 focus:ring-dusty-rose/50 outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block font-sans text-sm text-midnight/60 mb-2">Email</label>
                <input type="email" className="w-full bg-ivory border-none rounded-xl p-4 font-sans text-midnight focus:ring-2 focus:ring-dusty-rose/50 outline-none transition-all" />
              </div>

              <div>
                <label className="block font-sans text-sm text-midnight/60 mb-2">Sujet</label>
                <select className="w-full bg-ivory border-none rounded-xl p-4 font-sans text-midnight focus:ring-2 focus:ring-dusty-rose/50 outline-none transition-all appearance-none">
                  <option>Demande d'information</option>
                  <option>Prise de rendez-vous</option>
                  <option>Inscription à un atelier</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-sm text-midnight/60 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-ivory border-none rounded-xl p-4 font-sans text-midnight focus:ring-2 focus:ring-dusty-rose/50 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-full bg-midnight text-ivory text-center font-sans tracking-wide hover:bg-midnight/90 transition-all shadow-xl shadow-midnight/10">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
