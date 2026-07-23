"use client";
import { motion, AnimatePresence } from "framer-motion";
import { PopupButton } from "react-calendly";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export interface ServiceData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  description: string;
  details: string[];
  calendlyUrl: string;
  accent: string;
  accentBg: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setRootElement(document.getElementById("root"));
    }
  }, []);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-midnight/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl bg-linen rounded-[32px] shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className={`p-8 md:p-10 relative ${service.accentBg}`}>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-midnight/60 hover:text-midnight transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <span className={`font-serif text-5xl ${service.accent} opacity-40`}>
                    {service.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl text-midnight">{service.title}</h3>
                    <p className={`font-sans text-sm tracking-widest uppercase ${service.accent}`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="font-sans text-midnight/80 text-lg leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 overflow-y-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <div>
                      <h4 className="font-serif text-xl text-midnight mb-3">En détail</h4>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`${service.accent} mt-1 flex-shrink-0`}>✧</span>
                            <span className="font-sans text-[15px] text-midnight/70 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & CTA Card */}
                  <div className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col items-center text-center">
                      <p className="font-serif text-4xl text-midnight mb-1">{service.price}</p>
                      <p className="font-sans text-sm text-midnight/50 mb-6">{service.duration}</p>
                      
                      <div className="w-full">
                        {rootElement ? (
                          <PopupButton
                            url={service.calendlyUrl}
                            rootElement={rootElement}
                            text="Prendre rendez-vous"
                            className="w-full py-3 rounded-full bg-midnight text-ivory font-sans text-sm tracking-wide hover:bg-midnight/90 transition-colors shadow-md"
                          />
                        ) : (
                          <button className="w-full py-3 rounded-full bg-midnight/50 text-ivory font-sans text-sm tracking-wide" disabled>
                            Chargement...
                          </button>
                        )}
                      </div>
                      
                      <p className="font-sans text-xs text-midnight/40 mt-4 leading-relaxed">
                        Entretien découverte de 15 min offert avant de s'engager.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
