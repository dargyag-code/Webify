"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";

export type IndustryId =
  | "perfumeria"
  | "streetwear"
  | "barberia"
  | "gastronomia";

export const DOCK_INDUSTRIES: {
  id: IndustryId;
  label: string;
  shortLabel: string;
}[] = [
  { id: "perfumeria", label: "Perfumería", shortLabel: "Perfumería" },
  { id: "streetwear", label: "Streetwear", shortLabel: "Streetwear" },
  { id: "barberia", label: "Barbería & Salud", shortLabel: "Barbería" },
  { id: "gastronomia", label: "Gastronomía", shortLabel: "Gastro" },
];

const SPRING_DOCK = {
  type: "spring" as const,
  stiffness: 420,
  damping: 30,
  mass: 0.75,
};

interface HeaderNavigationProps {
  activeIndustry: IndustryId;
  onSelectIndustry: (industry: IndustryId) => void;
  onOpenQuoteDrawer: (preselectedPlanId?: string) => void;
}

export default function HeaderNavigation({
  activeIndustry,
  onSelectIndustry,
  onOpenQuoteDrawer,
}: HeaderNavigationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* 1. Header minimalista no intrusivo (NO fijo/sticky que corte títulos al hacer scroll) */}
      <header className="relative z-20 w-full bg-[#F4F2ED] border-b border-[#0F1713]/12">
        <div className="max-w-[1360px] mx-auto swiss-border-x px-4 sm:px-8 h-14 flex items-center justify-between gap-4">
          {/* Izquierda: Logo W. Webify.co */}
          <a
            href="#inicio"
            aria-label="W. Webify.co — Inicio"
            className="inline-flex items-center gap-2.5 shrink-0 group"
          >
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-[-0.04em] text-[#0F1713] inline-flex items-baseline">
              <span>W</span>
              <span className="text-emerald-500">.</span>
              <span className="ml-1.5">Webify</span>
              <span className="font-mono text-xs font-normal text-[#0F1713]/55 ml-0.5">
                .co
              </span>
            </span>
          </a>

          {/* Derecha: Estado en vivo ● Estudio Digital Colombia · 5 cupos disponibles este mes */}
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F1713]/80 tabular-nums truncate">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="truncate">
              Estudio Digital Colombia · 5 cupos disponibles este mes
            </span>
          </div>
        </div>
      </header>

      {/* 2. Floating Magnetic Dock (Barra de Comando Flotante inferior con física Emil Kowalski) */}
      <nav
        aria-label="Barra de comando flotante"
        className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 flex justify-center px-2.5 sm:px-4 pointer-events-none"
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={SPRING_DOCK}
          style={{ backgroundColor: "rgba(15, 23, 19, 0.88)" }}
          className="pointer-events-auto backdrop-blur-xl text-[#F4F2ED] border border-white/15 rounded-2xl p-1.5 sm:p-2 shadow-[0_24px_60px_-10px_rgba(9,13,22,0.55)] flex items-center gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar"
        >
          {/* Selector interactivo de industria en vivo */}
          <div
            role="group"
            aria-label="Cambiar industria activa en vivo"
            className="flex items-center bg-white/[0.06] rounded-xl p-0.5 sm:p-1 gap-0.5 sm:gap-1 shrink-0"
          >
            {DOCK_INDUSTRIES.map((item) => {
              const isSelected = activeIndustry === item.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  whileHover={shouldReduceMotion ? undefined : { y: -1.5 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                  onClick={() => onSelectIndustry(item.id)}
                  className={`relative px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-colors whitespace-nowrap ${
                    isSelected
                      ? "text-[#0F1713] font-semibold"
                      : "text-[#F4F2ED]/75 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="dock-industry-active-pill"
                      transition={
                        shouldReduceMotion ? { duration: 0 } : SPRING_DOCK
                      }
                      className="absolute inset-0 rounded-lg bg-[#F4F2ED]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 hidden md:inline">
                    {item.label}
                  </span>
                  <span className="relative z-10 md:hidden">
                    {item.shortLabel}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <span
            aria-hidden="true"
            className="hidden sm:block w-px h-6 bg-white/15 shrink-0"
          />

          {/* Acceso rápido a Precios ($225k abono) */}
          <motion.a
            href="#precios"
            whileHover={shouldReduceMotion ? undefined : { y: -1.5 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#F4F2ED]/90 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 tabular-nums"
          >
            <span>Precios</span>
            <span className="text-emerald-400">($225k abono)</span>
          </motion.a>

          {/* Botón de acción verde esmeralda que abre el Cotizador en Drawer Vaul */}
          <motion.button
            type="button"
            aria-label="Cotizar mi proyecto"
            whileHover={shouldReduceMotion ? undefined : { y: -1.5, scale: 1.01 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            onClick={() => onOpenQuoteDrawer()}
            className="px-2.5 sm:px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0F1713] font-semibold text-[11px] sm:text-xs inline-flex items-center gap-1 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span className="hidden sm:inline">Cotizar mi proyecto</span>
            <span className="sm:hidden">Cotizar</span>
            <Zap className="w-3.5 h-3.5 fill-current shrink-0" />
          </motion.button>
        </motion.div>
      </nav>
    </>
  );
}
