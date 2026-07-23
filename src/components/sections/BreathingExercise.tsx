"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "idle" | "inhale" | "hold" | "exhale" | "holdOut";

const PHASES: { phase: Phase; label: string; duration: number }[] = [
  { phase: "inhale", label: "Inspirez…", duration: 4000 },
  { phase: "hold", label: "Retenez…", duration: 4000 },
  { phase: "exhale", label: "Expirez…", duration: 6000 },
  { phase: "holdOut", label: "Pause…", duration: 2000 },
];

export function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase>("idle");
  const [phaseLabel, setPhaseLabel] = useState("Prêt·e ?");
  const [cycle, setCycle] = useState(0);
  const [scale, setScale] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseIndexRef = useRef(0);

  const runPhase = useCallback((index: number, cycleCount: number) => {
    const phaseData = PHASES[index % PHASES.length];
    setCurrentPhase(phaseData.phase);
    setPhaseLabel(phaseData.label);

    // Set scale for the breathing circle
    if (phaseData.phase === "inhale") {
      setScale(1.6);
    } else if (phaseData.phase === "exhale") {
      setScale(1);
    }

    timerRef.current = setTimeout(() => {
      const nextIndex = index + 1;
      const newCycle = nextIndex % PHASES.length === 0 ? cycleCount + 1 : cycleCount;
      if (nextIndex % PHASES.length === 0) {
        setCycle(newCycle);
      }
      phaseIndexRef.current = nextIndex;
      runPhase(nextIndex, newCycle);
    }, phaseData.duration);
  }, []);

  const start = () => {
    setIsActive(true);
    setCycle(0);
    phaseIndexRef.current = 0;
    runPhase(0, 0);
  };

  const stop = () => {
    setIsActive(false);
    setCurrentPhase("idle");
    setPhaseLabel("Prêt·e ?");
    setScale(1);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Dynamic transition duration based on current phase
  const getTransitionDuration = () => {
    if (currentPhase === "inhale") return 4;
    if (currentPhase === "exhale") return 6;
    return 0.3;
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a30] via-[#1d2d34] to-[#1a2a30]" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dusty-rose/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Label */}
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-dusty-rose/70 mb-4">
          Pause guidée
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-3">
          Respirez avec nous
        </h2>
        <p className="font-sans text-ivory/40 font-light max-w-md mx-auto mb-16 text-sm leading-relaxed">
          Un exercice simple inspiré du breathwork transpersonnel pour relâcher les tensions et revenir à soi.
        </p>

        {/* Breathing Circle */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ scale }}
              transition={{
                duration: getTransitionDuration(),
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle, rgba(214,159,154,0.15) 0%, transparent 70%)",
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute rounded-full border border-ivory/10"
              style={{ width: "180px", height: "180px" }}
              animate={{ scale }}
              transition={{
                duration: getTransitionDuration(),
                ease: "easeInOut",
              }}
            />

            {/* Core circle */}
            <motion.div
              className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center"
              animate={{ scale }}
              transition={{
                duration: getTransitionDuration(),
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle at 40% 40%, #c5956f, #a07458)",
                boxShadow: "0 0 60px rgba(197, 149, 111, 0.25), inset 0 0 30px rgba(0,0,0,0.15)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={phaseLabel}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="font-serif text-xl text-ivory"
                >
                  {phaseLabel}
                </motion.p>
              </AnimatePresence>
              {isActive && (
                <p className="font-sans text-ivory/50 text-xs mt-1">
                  Cycle {cycle + 1}
                </p>
              )}
              {!isActive && (
                <p className="font-sans text-ivory/40 text-xs mt-1">
                  Cycle {cycle}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        {!isActive ? (
          <button
            onClick={start}
            className="px-8 py-3 rounded-full bg-ivory text-midnight font-sans text-sm tracking-wide hover:bg-ivory/90 transition-colors shadow-lg"
          >
            Commencer
          </button>
        ) : (
          <button
            onClick={stop}
            className="px-8 py-3 rounded-full border border-ivory/20 text-ivory font-sans text-sm tracking-wide hover:border-ivory/40 transition-colors"
          >
            Arrêter
          </button>
        )}
      </div>
    </section>
  );
}
