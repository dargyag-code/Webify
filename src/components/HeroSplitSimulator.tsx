"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { Plus, Minus, ArrowRight, CheckCheck, Zap } from "lucide-react";
import { buildWhatsAppLink, formatCOP } from "@/lib/whatsapp";
import type { IndustryId } from "@/components/HeaderNavigation";

interface SimulatorVariant {
  id: string;
  shortLabel: string;
  price: number;
}

interface SimulatorNiche {
  id: IndustryId;
  tabLabel: string;
  storeName: string;
  domain: string;
  image: string;
  imageAlt: string;
  productName: string;
  productMeta: string;
  stockBadge: string;
  selectorLabel: string;
  shippingLabel: string;
  shippingCost: number;
  variants: SimulatorVariant[];
}

export const HERO_NICHES: Record<IndustryId, SimulatorNiche> = {
  perfumeria: {
    id: "perfumeria",
    tabLabel: "Perfumería",
    storeName: "Aura Parfums",
    domain: "auraparfums.co",
    image: "/images/niche-perfume.jpg",
    imageAlt:
      "Frasco de perfume ámbar y decant de vidrio de 10ml sobre piedra travertino",
    productName: "Khamrah Lattafa EDP",
    productMeta: "Oriental especiado · Decant en vidrio o frasco sellado",
    stockBadge: "Despacho hoy Bogotá",
    selectorLabel: "Presentación / Mililitros",
    shippingLabel: "Envío Bogotá",
    shippingCost: 8000,
    variants: [
      { id: "decant-10", shortLabel: "Decant 10ml", price: 45000 },
      { id: "decant-30", shortLabel: "Decant 30ml", price: 95000 },
      { id: "frasco-100", shortLabel: "Frasco 100ml", price: 180000 },
    ],
  },
  streetwear: {
    id: "streetwear",
    tabLabel: "Streetwear",
    storeName: "Kulture Wear",
    domain: "kulturewear.co",
    image: "/images/niche-streetwear.jpg",
    imageAlt:
      "Hoodie boxy fit en algodón pesado lavado ácido colgado en riel de acero",
    productName: "Hoodie Boxy 420g Acid Wash",
    productMeta: "Algodón peruano pesado · Horma cuadrada caída",
    stockBadge: "Últimas 4 uds",
    selectorLabel: "Talla y lavado disponible",
    shippingLabel: "Envío Medellín",
    shippingCost: 12000,
    variants: [
      { id: "talla-m", shortLabel: "Talla M · Carbón", price: 125000 },
      { id: "talla-l", shortLabel: "Talla L · Carbón", price: 125000 },
      { id: "talla-xl", shortLabel: "Talla XL · Gris", price: 135000 },
    ],
  },
  barberia: {
    id: "barberia",
    tabLabel: "Barbería & Salud",
    storeName: "Velvet & Blade Studio",
    domain: "velvetstudio.co",
    image: "/images/niche-barber.jpg",
    imageAlt:
      "Sillón de barbería negro mate frente a espejo retroiluminado en nogal",
    productName: "Corte de Autor + Ritual Barba",
    productMeta: "Sesión de 50 min · Toalla caliente y perfilado",
    stockBadge: "Agenda sábado abierta",
    selectorLabel: "Servicio y especialista",
    shippingLabel: "Reserva de turno",
    shippingCost: 0,
    variants: [
      { id: "corte-barba", shortLabel: "Corte + Barba (50m)", price: 55000 },
      { id: "color-hidratacion", shortLabel: "Diseño Color (120m)", price: 180000 },
      { id: "valoracion", shortLabel: "Valoración Especial", price: 95000 },
    ],
  },
  gastronomia: {
    id: "gastronomia",
    tabLabel: "Gastronomía",
    storeName: "Brasa & Barrio",
    domain: "brasaybarrio.co",
    image: "/images/niche-burger.jpg",
    imageAlt:
      "Hamburguesa doble smash con queso cheddar fundido en bandeja de acero",
    productName: "Doble Smash Madurada",
    productMeta: "Pan brioche de papa · Doble carne 180g · Cheddar inglés",
    stockBadge: "Cocina abierta · 25m",
    selectorLabel: "Término y adiciones",
    shippingLabel: "Domicilio Zona Norte",
    shippingCost: 5000,
    variants: [
      { id: "sencilla", shortLabel: "Sencilla 180g", price: 28000 },
      { id: "doble-tocineta", shortLabel: "Doble + Tocineta", price: 36000 },
      { id: "combo-pareja", shortLabel: "Combo 2x Burgers", price: 68000 },
    ],
  },
};

const SPRING_3D = {
  type: "spring" as const,
  stiffness: 180,
  damping: 22,
};

function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      className={`pointer-events-none select-none absolute z-20 ${className || ""}`}
    >
      <path d="M4.5 0V9M0 4.5H9" stroke="#0F1713" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}

interface HeroSplitSimulatorProps {
  activeIndustry: IndustryId;
  onSelectIndustry: (industry: IndustryId) => void;
  onOpenQuoteDrawer: (preselectedPlanId?: string) => void;
}

export default function HeroSplitSimulator({
  activeIndustry,
  onSelectIndustry,
  onOpenQuoteDrawer,
}: HeroSplitSimulatorProps) {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<
    "Nequi" | "Bre-B" | "Bancolombia"
  >("Nequi");

  // Rotación 3D acumulada o pulso al cambiar entre industrias
  const [flipTargetY, setFlipTargetY] = useState<number>(0);
  const prevIndustryRef = useRef<IndustryId>(activeIndustry);

  useEffect(() => {
    if (prevIndustryRef.current !== activeIndustry) {
      prevIndustryRef.current = activeIndustry;
      setSelectedVariantIndex(0);
      setQuantity(1);
      if (!shouldReduceMotion) {
        setFlipTargetY(-16);
        const timer = setTimeout(() => setFlipTargetY(0), 220);
        return () => clearTimeout(timer);
      }
    }
  }, [activeIndustry, shouldReduceMotion]);

  // Seguimiento de cursor en 3D (useMotionValue + useSpring stiffness: 180, damping: 22)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springRotateY = useSpring(pointerX, { stiffness: 180, damping: 22 });
  const springRotateX = useSpring(pointerY, { stiffness: 180, damping: 22 });

  // Inclinación suave por scroll en móvil y escritorio
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scrollTiltX = useTransform(scrollYProgress, [0, 1], [0, 9]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(normX * 14);
    pointerY.set(-normY * 12);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const currentNiche = HERO_NICHES[activeIndustry] || HERO_NICHES.perfumeria;
  const currentVariant =
    currentNiche.variants[selectedVariantIndex] || currentNiche.variants[0];

  const subtotalCOP = currentVariant.price * quantity;
  const totalCOP = subtotalCOP + currentNiche.shippingCost;

  const handleQuantityDelta = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const itemsSummary = `${quantity}x ${currentNiche.productName} (${currentVariant.shortLabel}) ${formatCOP(subtotalCOP)}`;

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="w-full bg-[#F4F2ED] border-b border-[#0F1713]/12"
    >
      <div className="max-w-[1360px] mx-auto swiss-border-x relative">
        <Crosshair className="hidden sm:block -top-[4.5px] -left-[4.5px]" />
        <Crosshair className="hidden sm:block -top-[4.5px] -right-[4.5px]" />

        {/* Grilla Editorial Suiza de 12 columnas con divisoria expuesta de 1px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12">
          {/* Columna Izquierda (7 cols) — Tipografía Asimétrica de Gran Escala + Copy Directo */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-6 sm:p-10 lg:p-14">
              {/* Coordenada editorial suiza */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-7 border-b border-[#0F1713]/12 font-mono text-xs text-[#0F1713]/65 tabular-nums">
                <span>01 / ARQUITECTURA COMERCIAL COLOMBIA</span>
                <span className="text-[#0F1713] font-medium">
                  ENTREGA EN 5 A 10 DÍAS · PAGO 50 / 50
                </span>
              </div>

              {/* H1 exacto sin punto final al terminar */}
              <h1 className="font-display text-[38px] sm:text-[56px] lg:text-[64px] font-extrabold text-[#0F1713] tracking-[-0.042em] leading-[0.98] mb-7">
                Presencia digital de agencia moderna.{" "}
                <span className="text-[#0F1713]/55 font-semibold">
                  A precio de emprendedor
                </span>
              </h1>

              {/* Subtítulo exacto solicitado */}
              <p className="text-base sm:text-[18px] text-[#0F1713]/80 leading-[1.6] max-w-[58ch] mb-9">
                En Colombia, una agencia tradicional te cobra millones y una
                plantilla gratuita se ve amateur. Diseñamos tu catálogo
                interactivo, sistema de reservas o tienda online en menos de 10
                días: lista para cobrar por WhatsApp, Nequi, Bre-B o pasarela,
                sin mensualidades obligatorias.
              </p>

              {/* Acciones táctiles con clip-path y física Emil Kowalski */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenQuoteDrawer("catalog")}
                  className="btn-tactile btn-clip-emerald min-h-[52px] px-7 bg-[#0F1713] text-[#F4F2ED] font-semibold text-sm sm:text-[15px] inline-flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  <span className="relative z-10 inline-flex items-center gap-2.5">
                    <span>Cotizar mi proyecto ahora</span>
                    <Zap className="w-4 h-4 text-emerald-400 fill-current" />
                  </span>
                </button>

                <a
                  href="#precios"
                  className="btn-tactile min-h-[52px] px-6 bg-transparent hover:bg-[#0F1713]/[0.04] text-[#0F1713] font-medium text-sm sm:text-[15px] border border-[#0F1713]/20 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Ver tabla de precios COP</span>
                  <ArrowRight className="arrow-shift w-4 h-4" strokeWidth={1.75} />
                </a>
              </div>
            </div>

            {/* Riel inferior de telemetría comercial en grilla de 1px (Cero logos técnicos de programación) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#0F1713]/12 border-t border-[#0F1713]/12 bg-[#EAE6DF]/45">
              <div className="p-5 sm:p-6">
                <span className="block font-mono text-[11px] uppercase text-[#0F1713]/55 mb-1">
                  Referencia mercado
                </span>
                <span className="font-mono text-sm sm:text-base font-medium text-[#0F1713] tabular-nums block">
                  Agencia tradicional: $1.2M – $3.5M COP
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <span className="block font-mono text-[11px] uppercase text-[#0F1713]/55 mb-1">
                  Tarifa Webify Go
                </span>
                <span className="font-mono text-base sm:text-lg font-medium text-[#0F1713] tabular-nums block">
                  Desde $450.000 COP{" "}
                  <span className="text-xs text-emerald-700">($225k abono)</span>
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <span className="block font-mono text-[11px] uppercase text-[#0F1713]/55 mb-1">
                  Recaudo en Colombia
                </span>
                <span className="font-mono text-sm sm:text-base font-medium text-[#0F1713] tabular-nums block">
                  Nequi · Bre-B · Wompi · 0% comisión
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha (5 cols) — ESCENARIO 3D ESPACIAL (perspective: 1200px + preserve-3d) */}
          <div
            ref={stageRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#EAE6DF]/60 flex flex-col justify-between overflow-visible"
          >
            {/* Barra de selección rápida sincronizada con el Dock inferior */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#0F1713]/12">
              <span className="font-mono text-[11px] uppercase text-[#0F1713]/70 tracking-tight">
                MODELO 3D INTERACTIVO · EJE Z
              </span>
              <div className="flex items-center gap-1">
                {(
                  [
                    { id: "perfumeria", label: "Perfumes" },
                    { id: "streetwear", label: "Streetwear" },
                    { id: "barberia", label: "Barbería" },
                    { id: "gastronomia", label: "Gastro" },
                  ] as const
                ).map((tab) => {
                  const active = activeIndustry === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => onSelectIndustry(tab.id)}
                      className={`px-2 py-1 font-mono text-[11px] transition-colors ${
                        active
                          ? "bg-[#0F1713] text-[#F4F2ED] font-medium"
                          : "text-[#0F1713]/65 hover:text-[#0F1713]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contenedor con perspective: 1200px */}
            <div
              style={{ perspective: "1200px" }}
              className="relative flex-1 flex items-center justify-center py-2 sm:py-4"
            >
              {/* Dispositivo Móvil Espacial 3D con seguimiento de cursor + rotación spring al cambiar industria */}
              <motion.div
                animate={{ rotateY: flipTargetY }}
                transition={SPRING_3D}
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotateX: springRotateX,
                        rotateY: springRotateY,
                        transformStyle: "preserve-3d",
                      }
                }
                className="w-full max-w-[420px] preserve-3d relative"
              >
                <motion.div
                  style={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotateX: scrollTiltX,
                          transformStyle: "preserve-3d",
                        }
                  }
                  className="preserve-3d relative rounded-[26px] bg-[#0F1713] p-3 sm:p-4 border border-white/15 shadow-[0_32px_70px_-16px_rgba(9,13,22,0.45)]"
                >
                  {/* PLANO BASE: translateZ(0px) — Imagen editorial del producto + chasis */}
                  <div
                    style={{ transform: "translateZ(0px)" }}
                    className="relative h-48 sm:h-52 w-full rounded-[18px] overflow-hidden bg-zinc-900 border border-white/10"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentNiche.image}
                        src={currentNiche.image}
                        alt={currentNiche.imageAlt}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { opacity: 0.35, scale: 1.05 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.26 }}
                        className="w-full h-full object-cover object-center"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1713] via-black/25 to-black/35 pointer-events-none" />

                    {/* Isla dinámica y dominio en el plano base */}
                    <div className="absolute top-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#F4F2ED] font-mono text-[11px] border border-white/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{currentNiche.domain}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#F4F2ED] text-[#0F1713] font-mono text-[10px] font-medium">
                        {currentNiche.stockBadge}
                      </span>
                    </div>

                    {/* Nombre del producto y odómetro de precio en el plano base */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-3 text-white">
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block">
                          {currentNiche.storeName}
                        </span>
                        <h2 className="font-display text-lg sm:text-xl font-bold text-white leading-tight truncate">
                          {currentNiche.productName}
                        </h2>
                        <p className="text-[11px] text-zinc-300 truncate mt-0.5">
                          {currentNiche.productMeta}
                        </p>
                      </div>

                      <div className="px-3 py-1.5 rounded-xl bg-[#F4F2ED] text-[#0F1713] font-mono text-sm font-medium tabular-nums shrink-0 overflow-hidden">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={`${currentNiche.id}-${currentVariant.id}`}
                            initial={
                              shouldReduceMotion
                                ? { opacity: 1 }
                                : { y: 14, opacity: 0 }
                            }
                            animate={{ y: 0, opacity: 1 }}
                            exit={
                              shouldReduceMotion
                                ? { opacity: 1 }
                                : { y: -14, opacity: 0 }
                            }
                            transition={{ duration: 0.18 }}
                            className="block"
                          >
                            {formatCOP(currentVariant.price)}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* PLANO MEDIO: translateZ(24px) — Selectores de talla / mililitros con sombra proyectada */}
                  <div
                    style={{
                      transform: shouldReduceMotion
                        ? "none"
                        : "translateZ(24px)",
                    }}
                    className="layer-z-24 relative -mt-2 mx-1 rounded-2xl bg-[#F4F2ED] text-[#0F1713] p-3.5 border border-[#0F1713]/15"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#0F1713]/65 mb-2">
                      <span>1. {currentNiche.selectorLabel}</span>
                      <span>CAPA Z +24PX</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                      {currentNiche.variants.map((variant, idx) => {
                        const isSelected = selectedVariantIndex === idx;
                        return (
                          <button
                            key={variant.id}
                            type="button"
                            onClick={() => setSelectedVariantIndex(idx)}
                            className={`btn-tactile py-2 px-2 rounded-xl text-left transition-colors ${
                              isSelected
                                ? "bg-[#0F1713] text-[#F4F2ED]"
                                : "bg-white text-[#0F1713] border border-[#0F1713]/10 hover:bg-[#EAE6DF]"
                            }`}
                          >
                            <span className="block text-[11px] font-semibold truncate">
                              {variant.shortLabel}
                            </span>
                            <span
                              className={`block font-mono text-[10px] tabular-nums mt-0.5 ${
                                isSelected
                                  ? "text-emerald-400"
                                  : "text-[#0F1713]/60"
                              }`}
                            >
                              {formatCOP(variant.price)}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Cantidad + Selector de pago */}
                    <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-[#0F1713]/10">
                      <div className="inline-flex items-center rounded-lg bg-white border border-[#0F1713]/12 p-0.5">
                        <button
                          type="button"
                          aria-label="Disminuir cantidad"
                          onClick={() => handleQuantityDelta(-1)}
                          className="btn-tactile w-7 h-7 rounded bg-[#F4F2ED] text-[#0F1713] flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" strokeWidth={2} />
                        </button>
                        <span className="font-mono text-xs font-medium px-2.5 tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Aumentar cantidad"
                          onClick={() => handleQuantityDelta(1)}
                          className="btn-tactile w-7 h-7 rounded bg-[#F4F2ED] text-[#0F1713] flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" strokeWidth={2} />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-1 bg-white border border-[#0F1713]/12 p-0.5 rounded-lg flex-1">
                        {(["Nequi", "Bre-B", "Bancolombia"] as const).map(
                          (method) => {
                            const activePay = paymentMethod === method;
                            return (
                              <button
                                key={method}
                                type="button"
                                onClick={() => setPaymentMethod(method)}
                                className={`btn-tactile h-7 rounded text-[11px] font-mono transition-colors ${
                                  activePay
                                    ? "bg-[#0F1713] text-[#F4F2ED] font-medium"
                                    : "text-[#0F1713]/70 hover:text-[#0F1713]"
                                }`}
                              >
                                {method}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>

                  {/* PLANO FRONTAL: translateZ(50px) — Ticket de WhatsApp + Badge de pago flotando fuera del chasis */}
                  <div
                    style={{
                      transform: shouldReduceMotion
                        ? "none"
                        : "translateZ(50px)",
                    }}
                    className="layer-z-50 relative mt-3 -mx-1 sm:-mx-2 rounded-2xl bg-[#D9FDD3] text-[#111B21] p-3.5 border border-emerald-600/35"
                  >
                    <div className="flex items-center justify-between gap-2 pb-1.5 mb-1.5 border-b border-[#075E54]/15 font-mono text-[10px]">
                      <span className="font-semibold text-[#075E54] uppercase">
                        ● TICKET WHATSAPP · CAPA Z +50PX
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#075E54] text-white font-medium">
                        Pago {paymentMethod}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-[#075E54]">
                      Hola {currentNiche.storeName}, nuevo pedido web:
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#111B21] mt-1">
                      <span className="truncate pr-2">
                        • {quantity}x {currentNiche.productName} (
                        {currentVariant.shortLabel})
                      </span>
                      <span className="font-mono font-medium tabular-nums shrink-0">
                        {formatCOP(subtotalCOP)}
                      </span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#075E54]/15 flex items-center justify-between gap-2">
                      <span className="font-mono text-xs sm:text-sm font-medium text-[#075E54] tabular-nums">
                        Total: {formatCOP(totalCOP)} COP
                      </span>

                      <a
                        href={buildWhatsAppLink({
                          type: "hero_simulator",
                          itemsSummary,
                          totalCOP: `${formatCOP(totalCOP)} COP`,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactile px-3 py-1.5 rounded-lg bg-[#075E54] hover:bg-[#064E46] text-white font-mono text-[11px] inline-flex items-center gap-1.5 shrink-0"
                      >
                        <span>Probar en WhatsApp</span>
                        <CheckCheck
                          className="w-3.5 h-3.5 text-emerald-300"
                          strokeWidth={2}
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
