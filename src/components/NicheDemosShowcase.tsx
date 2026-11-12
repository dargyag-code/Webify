"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, SlidersHorizontal } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { IndustryId } from "./HeaderNavigation";

interface NicheDemosShowcaseProps {
  activeIndustry: IndustryId;
  onSelectIndustry: (industry: IndustryId) => void;
  onOpenQuoteDrawer: (preselectedPlanId?: string) => void;
}

interface DemoConfig {
  id: IndustryId;
  index: string;
  tabTitle: string;
  domain: string;
  brandName: string;
  tagline: string;
  recommendedPlanId: string;
  recommendedPlanLabel: string;
  deliveryDays: string;
  image: string;
  productTitle: string;
  productSubtitle: string;
  selectorLabel: string;
  options: {
    id: string;
    label: string;
    sub: string;
    price: number;
    badge?: string;
  }[];
  addonLabel: string;
  addons: {
    id: string;
    label: string;
    price: number;
  }[];
  engineeringPoints: {
    title: string;
    detail: string;
  }[];
}

const DEMOS: Record<IndustryId, DemoConfig> = {
  perfumeria: {
    id: "perfumeria",
    index: "01",
    tabTitle: "Perfumería & Decants",
    domain: "auraparfums.co",
    brandName: "Aura Parfums",
    tagline: "Catálogo olfativo con selector de mililitros y liquidación instantánea",
    recommendedPlanId: "catalog",
    recommendedPlanLabel: "WEBIFY CATALOG — $1.190.000 COP (Abono $595.000)",
    deliveryDays: "7 días hábiles",
    image: "/images/niche-perfume.jpg",
    productTitle: "Khamrah Lattafa EDP",
    productSubtitle: "Familia Ámbar Especiada · Notas de canela, dátiles, praliné y vainilla",
    selectorLabel: "SELECCIONA PRESENTACIÓN (CAMBIO DE PRECIO EN VIVO)",
    options: [
      {
        id: "decant-5",
        label: "Decant 5 ml",
        sub: "Atomizador de vidrio · ~65 sprays",
        price: 38000,
      },
      {
        id: "decant-10",
        label: "Decant 10 ml",
        sub: "Estuche metálico · ~130 sprays",
        price: 68000,
        badge: "MÁS PEDIDO",
      },
      {
        id: "full-100",
        label: "Frasco 100 ml",
        sub: "Caja sellada original",
        price: 180000,
      },
    ],
    addonLabel: "MODALIDAD DE ENTREGA Y EMPAQUE",
    addons: [
      { id: "envio-bog", label: "Envío express Bogotá / Medellín", price: 8000 },
      { id: "regalo", label: "Caja imantada de regalo + tarjeta", price: 12000 },
    ],
    engineeringPoints: [
      {
        title: "Selector dinámico por mililitros (5ml / 10ml / 100ml)",
        detail:
          "El cliente cambia de decant a botella sellada y el precio se actualiza sin recargar la página ni preguntar por DM.",
      },
      {
        title: "Filtros por familia olfativa y ocasión",
        detail:
          "Árabes, diseñador, nicho, clima frío o citas nocturnas en menos de un segundo desde el celular.",
      },
      {
        title: "Orden estructurada directo a tu WhatsApp o Nequi",
        detail:
          "Recibes referencia, mililitros exactos, ciudad de envío y total sumado listo para despachar.",
      },
    ],
  },
  streetwear: {
    id: "streetwear",
    index: "02",
    tabTitle: "Moda & Streetwear",
    domain: "kulturewear.co",
    brandName: "Kulture Wear",
    tagline: "Drops de colección con guía de tallas interactiva y stock por prenda",
    recommendedPlanId: "commerce",
    recommendedPlanLabel: "WEBIFY COMMERCE — $2.150.000 COP (Abono $1.075.000)",
    deliveryDays: "10 días hábiles",
    image: "/images/niche-streetwear.jpg",
    productTitle: "Heavyweight Boxy Hoodie 480g",
    productSubtitle: "Algodón peruano peinado · Lavado ácido artesanal · Drop 04 Limitado",
    selectorLabel: "SELECCIONA TALLA Y FIT EN TIEMPO REAL",
    options: [
      {
        id: "size-s",
        label: "Talla S · Boxy",
        sub: "Ancho 58cm · Largo 67cm (Quedan 3)",
        price: 210000,
      },
      {
        id: "size-m",
        label: "Talla M · Boxy",
        sub: "Ancho 61cm · Largo 70cm (Últimas 2)",
        price: 210000,
        badge: "TALLA CLAVE",
      },
      {
        id: "size-l",
        label: "Talla L · Oversize",
        sub: "Ancho 64cm · Largo 73cm (Disponible)",
        price: 210000,
      },
    ],
    addonLabel: "COMPLEMENTA EL DROP CON PRECIO DE LANZAMIENTO",
    addons: [
      { id: "cap-washed", label: "Gorra Distressed Anthracite", price: 75000 },
      { id: "tote-heavy", label: "Tote Bag Lona Cruda 400g", price: 35000 },
    ],
    engineeringPoints: [
      {
        title: "Matriz real de tallas y medidas en centímetros",
        detail:
          "Reduce cambios y devoluciones mostrando el fit exacto (Boxy vs. Oversize) y las unidades restantes por talla.",
      },
      {
        title: "Checkout híbrido: Wompi / Addi o separación por WhatsApp",
        detail:
          "Permite pagar con tarjeta, PSE, Nequi o contraentrega sin pagar las mensualidades en dólares de Shopify.",
      },
      {
        title: "Velocidad instantánea para tráfico de TikTok e Instagram Ads",
        detail:
          "Carga en menos de 1 segundo para que ningún clic de tu pauta rebote por pantalla en blanco.",
      },
    ],
  },
  barberia: {
    id: "barberia",
    index: "03",
    tabTitle: "Barbería & Salud",
    domain: "velvetblade.co",
    brandName: "Velvet & Blade Studio",
    tagline: "Agenda de citas y turnos en 3 toques sin contestar mensajes toda la tarde",
    recommendedPlanId: "pro",
    recommendedPlanLabel: "WEBIFY PRO — $890.000 COP (Abono $445.000)",
    deliveryDays: "5 días hábiles",
    image: "/images/niche-barber.jpg",
    productTitle: "Ritual Corte de Autor + Barba Vapor",
    productSubtitle: "45 minutos · Asesoría visagista, toalla caliente con eucalipto y acabado mate",
    selectorLabel: "ELIGE SERVICIO Y PROFESIONAL DISPONIBLE HOY",
    options: [
      {
        id: "corte-autor",
        label: "Corte de Autor (40 min)",
        sub: "Con Mateo Vélez · Master Barber",
        price: 55000,
      },
      {
        id: "ritual-completo",
        label: "Corte + Barba Vapor (60 min)",
        sub: "Con Mateo Vélez · 4:30 p. m. / 6:00 p. m.",
        price: 82000,
        badge: "FAVORITO",
      },
      {
        id: "vip-facial",
        label: "Experiencia VIP + Facial (75 min)",
        sub: "Con Julián Ríos · 5:15 p. m.",
        price: 115000,
      },
    ],
    addonLabel: "PRODUCTOS DE CUIDADO PARA RETIRAR EN EL LOCAL",
    addons: [
      { id: "cera-mate", label: "Arcilla Texturizante Mate 90g", price: 42000 },
      { id: "aceite-barba", label: "Aceite Orgánico de Cedro & Argán", price: 38000 },
    ],
    engineeringPoints: [
      {
        title: "Reserva por servicio, especialista y bloque horario",
        detail:
          "Tus clientes ven precios claros y apartan su cita en 20 segundos sin interrumpirte mientras estás atendiendo.",
      },
      {
        title: "Abono anticipado por Nequi o Bre-B para eliminar inasistencias",
        detail:
          "Asegura el compromiso del cliente solicitando un abono o confirmación directa antes de bloquear la silla.",
      },
      {
        title: "Venta cruzada de productos de cuidado antes de llegar al estudio",
        detail:
          "Incrementa el ticket promedio ofreciendo ceras, tónicos o kits dermatológicos durante la reserva.",
      },
    ],
  },
  gastronomia: {
    id: "gastronomia",
    index: "04",
    tabTitle: "Gastronomía & Gastro",
    domain: "brasaybarrio.co",
    brandName: "Brasa & Barrio",
    tagline: "Menú digital de autor con modificadores y pedidos a domicilio con 0% comisión",
    recommendedPlanId: "catalog",
    recommendedPlanLabel: "WEBIFY CATALOG — $1.190.000 COP (Abono $595.000)",
    deliveryDays: "7 días hábiles",
    image: "/images/niche-burger.jpg",
    productTitle: "Doble Smash Trufa & Brioche Dorado",
    productSubtitle: "220g de corte madurado, cheddar inglés fundido, cebolla crispy y mayo de trufa negra",
    selectorLabel: "ELIGE EL COMBO Y TÉRMINO DE LA CARNE",
    options: [
      {
        id: "solo-burger",
        label: "Solo Burger 220g",
        sub: "Pan brioche artesanal sellado en mantequilla",
        price: 36000,
      },
      {
        id: "combo-rústicas",
        label: "Combo + Papas Rústicas & Soda",
        sub: "Papas en doble cocción con romero + bebida",
        price: 49000,
        badge: "RECOMENDADO",
      },
      {
        id: "duo-pareja",
        label: "Pack Dúo (2 Burgers + 2 Papas)",
        sub: "Ideal para pedir en casa sin pagar comisión de app",
        price: 89000,
      },
    ],
    addonLabel: "ADICIONES DE COCINA Y DOMICILIO PROPIO",
    addons: [
      { id: "tocineta", label: "Adición Tocineta Ahumada al Barril", price: 7500 },
      { id: "domicilio", label: "Domicilio directo del restaurante", price: 6000 },
    ],
    engineeringPoints: [
      {
        title: "Recupera el 28% de margen que hoy se llevan las apps de domicilios",
        detail:
          "Tus clientes frecuentes piden directo desde tu Instagram con modificadores claros (sin cebolla, término, adiciones).",
      },
      {
        title: "Comanda lista para cocina y motorizado en un solo clic",
        detail:
          "El pedido entra con dirección exacta, barrio, método de pago y total liquidado sin errores de dictado.",
      },
      {
        title: "Fotografía gastronómica en alta definición sin PDFs pesados",
        detail:
          "Olvídate de los menús en PDF que tardan 15 segundos en descargar y obligan a hacer zoom con los dedos.",
      },
    ],
  },
};

const INDUSTRY_ORDER: IndustryId[] = [
  "perfumeria",
  "streetwear",
  "barberia",
  "gastronomia",
];

export function NicheDemosShowcase({
  activeIndustry,
  onSelectIndustry,
  onOpenQuoteDrawer,
}: NicheDemosShowcaseProps) {
  const demo = DEMOS[activeIndustry];
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    demo.addons[0]?.id ?? "",
  ]);

  // Synchronize internal option selection when industry changes
  const activeOption =
    demo.options[selectedOptionIdx] ?? demo.options[1] ?? demo.options[0];

  const handleIndustrySwitch = (id: IndustryId) => {
    onSelectIndustry(id);
    setSelectedOptionIdx(1);
    const firstAddon = DEMOS[id].addons[0]?.id;
    setSelectedAddons(firstAddon ? [firstAddon] : []);
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((item) => item !== addonId)
        : [...prev, addonId],
    );
  };

  const addonsTotal = demo.addons
    .filter((a) => selectedAddons.includes(a.id))
    .reduce((acc, item) => acc + item.price, 0);

  const totalCOP = activeOption.price + addonsTotal;

  const whatsappDemoUrl = buildWhatsAppLink({
    type: "demo_niche",
    demoId: demo.id,
    demoTitle: demo.tabTitle,
    subdomain: demo.domain,
    brandName: demo.brandName,
    simulatedTicket: `${demo.productTitle} (${activeOption.label}) — Total: $${totalCOP.toLocaleString("es-CO")} COP`,
  });

  return (
    <section
      id="demos"
      className="relative border-b border-[#0F1713]/12 bg-[#F6F5F0]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-[#0F1713]/12">
        {/* Swiss Section Index Row */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3.5 sm:col-span-4 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#059669]">
              ● [02 / ARQUITECTURAS INTERACTIVAS EN VIVO]
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 sm:col-span-8 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525A55]">
              SINCRONIZADO CON LA BARRA DE COMANDO INFERIOR
            </span>
            <span className="hidden font-mono text-[11px] text-[#0F1713] md:inline">
              PRUEBA EL FLUJO DE COMPRA REAL ↓
            </span>
          </div>
        </div>

        {/* Section Title Row (Zero trailing periods) */}
        <div className="grid grid-cols-1 border-b border-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12">
          <div className="px-5 py-10 sm:px-8 lg:col-span-7 lg:py-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#0F1713]">
              No adaptamos plantillas genéricas. Construimos el flujo exacto que{" "}
              <span className="font-serif italic font-normal text-[#059669]">
                tu negocio necesita para cobrar
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-end px-5 pb-10 sm:px-8 lg:col-span-5 lg:py-14">
            <p className="text-[16px] leading-[1.6] text-[#525A55]">
              Un comercio de perfumería necesita vender por mililitros; una
              marca de ropa por tallas y medidas; una barbería por hora y
              profesional. Toca cada industria abajo y prueba el simulador en
              tiempo real.
            </p>
          </div>
        </div>

        {/* Swiss 1px Tab Navigation Bar */}
        <div className="grid grid-cols-2 divide-x divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12 lg:grid-cols-4 lg:divide-y-0">
          {INDUSTRY_ORDER.map((id) => {
            const item = DEMOS[id];
            const isActive = activeIndustry === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleIndustrySwitch(id)}
                className={`group relative flex flex-col justify-between p-5 text-left transition-colors sm:p-6 ${
                  isActive
                    ? "bg-[#0F1713] text-[#F6F5F0]"
                    : "bg-[#F6F5F0] text-[#0F1713] hover:bg-[#EFECE4]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="swiss-demo-tab-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-x-0 top-0 h-[3px] bg-[#10B981]"
                  />
                )}
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                      isActive ? "text-[#10B981]" : "text-[#525A55]"
                    }`}
                  >
                    [{item.index}] · {item.domain}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-[#10B981]" : "bg-[#0F1713]/20"
                    }`}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                    {item.tabTitle}
                  </h3>
                  <p
                    className={`mt-1 line-clamp-1 font-mono text-[11px] ${
                      isActive ? "text-white/65" : "text-[#525A55]"
                    }`}
                  >
                    Caso: {item.brandName}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Asymmetric 12-Column Live Architecture Viewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={demo.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 divide-y divide-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-y-0"
          >
            {/* LEFT COLUMN (5 cols): Commercial & Conversion Engineering Spec */}
            <div className="flex flex-col justify-between bg-[#F6F5F0] p-5 sm:p-8 lg:col-span-5 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0F1713]/12 pb-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#525A55]">
                      CASO DEMOSTRATIVO #{demo.index}
                    </span>
                    <h3 className="mt-1 font-display text-[26px] font-semibold tracking-[-0.03em] text-[#0F1713]">
                      {demo.brandName}
                    </h3>
                  </div>
                  <span className="border border-[#0F1713]/15 bg-[#EFECE4] px-2.5 py-1 font-mono text-[11px] font-medium text-[#0F1713]">
                    Entrega: {demo.deliveryDays}
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[#525A55]">
                  {demo.tagline}
                </p>

                {/* Recommended package tag */}
                <div className="mt-5 border border-[#059669]/30 bg-[#10B981]/10 p-3.5">
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                    ARQUITECTURA SUGERIDA PARA ESTE NICHO
                  </span>
                  <span className="mt-1 block font-mono text-[12.5px] font-semibold tabular-nums text-[#0F1713]">
                    {demo.recommendedPlanLabel}
                  </span>
                </div>

                {/* 3 Conversion Engineering Points */}
                <div className="mt-7 divide-y divide-[#0F1713]/12 border-y border-[#0F1713]/12">
                  {demo.engineeringPoints.map((pt, i) => (
                    <div key={pt.title} className="py-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 font-mono text-[11px] font-semibold text-[#059669]">
                          0{i + 1}
                        </span>
                        <div>
                          <h4 className="font-display text-[15px] font-semibold text-[#0F1713]">
                            {pt.title}
                          </h4>
                          <p className="mt-1 text-[13.5px] leading-relaxed text-[#525A55]">
                            {pt.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Action Bar */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onOpenQuoteDrawer(demo.recommendedPlanId)}
                  className="btn-clip-emerald inline-flex flex-1 items-center justify-center gap-2 bg-[#0F1713] px-5 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#F6F5F0] active:scale-[0.98]"
                >
                  <span>Cotizar versión para mi marca</span>
                  <ArrowUpRight className="h-4 w-4 text-[#10B981]" />
                </button>
                <a
                  href={whatsappDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 border border-[#0F1713]/20 bg-white px-4 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0F1713] transition-colors hover:bg-[#EFECE4]"
                >
                  <span>Pedir demo en WhatsApp</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN (7 cols): Interactive Live Product Simulator (NO macOS traffic light dots) */}
            <div className="flex flex-col justify-between bg-[#EFECE4]/55 p-5 sm:p-8 lg:col-span-7 lg:p-10">
              {/* Architectural Technical Top Bar (Strictly no red/yellow/green dots) */}
              <div className="flex flex-wrap items-center justify-between gap-2 border border-[#0F1713]/15 bg-[#0F1713] px-4 py-3 text-[#F6F5F0]">
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-[#10B981]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white">
                    SIMULADOR DE COMPRA EN VIVO · {demo.domain}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#10B981]">
                  ● INTERACTIVO · TOCA LAS OPCIONES
                </span>
              </div>

              {/* Main Interactive Artifact Surface */}
              <div className="grid grid-cols-1 border-x border-b border-[#0F1713]/15 bg-white md:grid-cols-12">
                {/* Product Photography Column (5 cols) */}
                <div className="relative min-h-[260px] border-b border-[#0F1713]/12 bg-[#0F1713] md:col-span-5 md:border-b-0 md:border-r">
                  <img
                    src={demo.image}
                    alt={demo.productTitle}
                    className="h-full w-full object-cover opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1713] via-[#0F1713]/25 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <span className="inline-flex items-center gap-1 bg-[#10B981] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#04110B]">
                      <Sparkles className="h-3 w-3" />
                      STOCK EN TIEMPO REAL
                    </span>
                    <h4 className="mt-2 font-display text-[20px] font-semibold leading-tight text-white">
                      {demo.productTitle}
                    </h4>
                    <p className="mt-1 text-[12px] leading-snug text-white/75">
                      {demo.productSubtitle}
                    </p>
                  </div>
                </div>

                {/* Interactive Configurator Column (7 cols) */}
                <div className="flex flex-col justify-between p-5 sm:p-6 md:col-span-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#525A55]">
                        {demo.selectorLabel}
                      </span>
                    </div>

                    {/* Variant Selector Buttons */}
                    <div className="mt-2.5 grid grid-cols-1 gap-2">
                      {demo.options.map((opt, idx) => {
                        const active = idx === selectedOptionIdx;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setSelectedOptionIdx(idx)}
                            className={`flex items-center justify-between border p-3 text-left transition-all ${
                              active
                                ? "border-[#0F1713] bg-[#0F1713] text-white"
                                : "border-[#0F1713]/15 bg-[#F6F5F0] text-[#0F1713] hover:border-[#0F1713]/40"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-display text-[14px] font-semibold">
                                  {opt.label}
                                </span>
                                {opt.badge && (
                                  <span
                                    className={`px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] ${
                                      active
                                        ? "bg-[#10B981] text-[#04110B]"
                                        : "bg-[#0F1713]/10 text-[#0F1713]"
                                    }`}
                                  >
                                    {opt.badge}
                                  </span>
                                )}
                              </div>
                              <span
                                className={`mt-0.5 block font-mono text-[11px] ${
                                  active ? "text-white/70" : "text-[#525A55]"
                                }`}
                              >
                                {opt.sub}
                              </span>
                            </div>
                            <span
                              className={`font-mono text-[14px] font-semibold tabular-nums ${
                                active ? "text-[#10B981]" : "text-[#0F1713]"
                              }`}
                            >
                              ${opt.price.toLocaleString("es-CO")}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Optional Add-ons */}
                    <div className="mt-5">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#525A55]">
                        {demo.addonLabel}
                      </span>
                      <div className="mt-2 space-y-2">
                        {demo.addons.map((addon) => {
                          const checked = selectedAddons.includes(addon.id);
                          return (
                            <button
                              key={addon.id}
                              type="button"
                              onClick={() => toggleAddon(addon.id)}
                              className={`flex w-full items-center justify-between border px-3 py-2.5 text-left transition-colors ${
                                checked
                                  ? "border-[#059669] bg-[#10B981]/10 text-[#0F1713]"
                                  : "border-[#0F1713]/12 bg-white text-[#525A55] hover:bg-[#F6F5F0]"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className={`flex h-4 w-4 items-center justify-center border ${
                                    checked
                                      ? "border-[#059669] bg-[#059669] text-white"
                                      : "border-[#0F1713]/30 bg-white"
                                  }`}
                                >
                                  {checked && <Check className="h-3 w-3" />}
                                </span>
                                <span className="text-[13px] font-medium text-[#0F1713]">
                                  {addon.label}
                                </span>
                              </div>
                              <span className="font-mono text-[12px] font-semibold tabular-nums text-[#0F1713]">
                                +${addon.price.toLocaleString("es-CO")}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Live Calculated Order Ticket Bar */}
                  <div className="mt-6 border-t border-[#0F1713]/12 pt-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#525A55]">
                          TOTAL ORDEN LISTA PARA COBRAR
                        </span>
                        <span className="font-mono text-[11px] text-[#059669]">
                          ● Nequi · Bre-B · Wompi · WhatsApp
                        </span>
                      </div>
                      <motion.span
                        key={totalCOP}
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-display text-[26px] font-bold tabular-nums tracking-[-0.03em] text-[#0F1713]"
                      >
                        ${totalCOP.toLocaleString("es-CO")}{" "}
                        <span className="font-mono text-[11px] font-normal text-[#525A55]">
                          COP
                        </span>
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
