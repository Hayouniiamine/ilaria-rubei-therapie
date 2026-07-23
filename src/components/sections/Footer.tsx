"use client";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-midnight text-ivory/80">
      {/* Contact Form Section */}
      <div className="border-b border-ivory/10 py-20 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dusty-rose/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA & Info */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">
                Prenons rendez-vous
              </h2>
              <p className="font-sans text-ivory/50 font-light mb-8 max-w-md text-lg leading-relaxed">
                Première séance découverte offerte. Contacte-moi pour un point de départ personnalisé.
              </p>
              
              <div className="space-y-6 font-sans text-sm">
                <div>
                  <p className="text-ivory/30 uppercase tracking-widest text-xs mb-1">Email</p>
                  <a href="mailto:ilariainscriptions@gmail.com" className="text-ivory hover:text-dusty-rose transition-colors text-lg">
                    ilariainscriptions@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-ivory/30 uppercase tracking-widest text-xs mb-1">Cabinet</p>
                  <p className="text-ivory/70 text-lg">Paris (75005) & en Ligne</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <div className="w-16 h-16 bg-dusty-rose/20 text-dusty-rose rounded-full flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-ivory mb-2">Message envoyé !</h3>
                  <p className="font-sans text-ivory/60">Je vous répondrai dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-ivory/40">Nom</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        className="w-full bg-midnight border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder-ivory/20 focus:outline-none focus:border-dusty-rose/50 focus:ring-1 focus:ring-dusty-rose/50 transition-all font-sans text-sm"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-ivory/40">Email</label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        className="w-full bg-midnight border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder-ivory/20 focus:outline-none focus:border-dusty-rose/50 focus:ring-1 focus:ring-dusty-rose/50 transition-all font-sans text-sm"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="font-sans text-xs uppercase tracking-widest text-ivory/40">Message</label>
                    <textarea 
                      required
                      id="message"
                      rows={4}
                      className="w-full bg-midnight border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder-ivory/20 focus:outline-none focus:border-dusty-rose/50 focus:ring-1 focus:ring-dusty-rose/50 transition-all font-sans text-sm resize-none"
                      placeholder="Comment puis-je vous aider ?"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-ivory text-midnight font-sans text-sm font-medium tracking-wide hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <p className="font-serif text-2xl text-ivory mb-3">Ilaria Rubei</p>
              <p className="font-sans text-ivory/40 text-sm leading-relaxed">
                Thérapeute transpersonnelle, autrice et formatrice.
                <br />
                Paris · Séances en visio partout dans le monde.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-ivory/30 mb-4">Navigation</p>
              <nav className="space-y-2 font-sans text-sm">
                <Link to="/" className="block text-ivory/60 hover:text-ivory transition-colors">Accueil</Link>
                <Link to="/accompagnement" className="block text-ivory/60 hover:text-ivory transition-colors">Accompagnements</Link>
                <Link to="/formations" className="block text-ivory/60 hover:text-ivory transition-colors">Formations</Link>
                <Link to="/a-propos" className="block text-ivory/60 hover:text-ivory transition-colors">À propos</Link>
                <Link to="/blog" className="block text-ivory/60 hover:text-ivory transition-colors">Journal</Link>
                <Link to="/contact" className="block text-ivory/60 hover:text-ivory transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Social & links */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-ivory/30 mb-4">Retrouvez-moi</p>
              <div className="space-y-2 font-sans text-sm">
                <a href="https://www.instagram.com/ilaria.rubei" target="_blank" rel="noopener noreferrer" className="block text-ivory/60 hover:text-ivory transition-colors">
                  Instagram @ilaria.rubei
                </a>
                <a href="https://www.facebook.com/ilaria.rubei" target="_blank" rel="noopener noreferrer" className="block text-ivory/60 hover:text-ivory transition-colors">
                  Facebook
                </a>
                <a href="https://www.youtube.com/@ilariarubei" target="_blank" rel="noopener noreferrer" className="block text-ivory/60 hover:text-ivory transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-ivory/30 text-xs">
              © {new Date().getFullYear()} Ilaria Rubei. Tous droits réservés.
            </p>
            <div className="flex gap-6 font-sans text-ivory/30 text-xs">
              <a href="#" className="hover:text-ivory/60 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-ivory/60 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
