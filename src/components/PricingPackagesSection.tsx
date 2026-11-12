"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Check, ArrowUpRight, X, Sparkles, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export interface PackageSpec {
  id: string;
  index: string;
  name: string;
  shortName: string;
  badge?: string;
  featured?: boolean;
  totalPrice: number;
  deposit50: number;
  agencyRange: string;
  deliveryDays: string;
  idealFor: string;
  features: string[];
}

export const WEBIFY_PACKAGES: PackageSpec[] = [
  {
    id: "go",
    index: "01",
    name: "Webify Go",
    shortName: "Go",
    totalPrice: 450000,
    deposit50: 225000,
    agencyRange: "Agencia tradicional: $1.2M – $2.2M COP",
    deliveryDays: "3 a 4 días hábiles",
    idealFor:
      "Emprendedores, marcas personales y servicios que necesitan presencia profesional inmediata y botón directo a WhatsApp o Nequi.",
    features: [
      "Landing page editorial de alta conversión (1 vista completa)",
      "Catálogo rápido o vitrina de hasta 12 productos / servicios",
      "Botón de pedido o reserva estructurada directo a tu WhatsApp",
      "Optimización extrema para tráfico de Instagram y TikTok",
      "Certificado SSL + Hosting rápido bonificado el primer año",
    ],
  },
  {
    id: "pro",
    index: "02",
    name: "Webify Pro",
    shortName: "Pro",
    totalPrice: 890000,
    deposit50: 445000,
    agencyRange: "Agencia tradicional: $1.8M – $3.2M COP",
    deliveryDays: "5 días hábiles",
    idealFor:
      "Barberías, consultorios, estudios de belleza y negocios de servicios que cobran o agendan turnos a diario.",
    features: [
      "Sitio multipágina o flujo de reservas por servicio y especialista",
      "Hasta 35 servicios o referencias con precios y variantes claras",
      "Formulario inteligente de cotización o agenda en 3 toques",
      "Integración de cobro con Nequi, Bre-B, Daviplata o link Wompi",
      "SEO local para aparecer en Google Maps y búsquedas de tu ciudad",
    ],
  },
  {
    id: "catalog",
    index: "03",
    name: "Webify Catalog",
    shortName: "Catalog",
    badge: "EL MÁS ELEGIDO EN COLOMBIA",
    featured: true,
    totalPrice: 1190000,
    deposit50: 595000,
    agencyRange: "Agencia tradicional: $2.5M – $4.2M COP",
    deliveryDays: "7 días hábiles",
    idealFor:
      "Perfumerías, restaurantes, tiendas de calzado, accesorios y comercios que venden por variantes y cierran por WhatsApp.",
    features: [
      "Catálogo interactivo con carrito y filtros en vivo (hasta 60 ítems)",
      "Selector dinámico de mililitros, tallas, sabores o adiciones",
      "Cálculo automático de envío por barrio o ciudad antes de pedir",
      "Comanda detallada que llega a tu WhatsApp lista para despachar",
      "Panel autogestionable para cambiar precios y agotar stock en 10s",
    ],
  },
  {
    id: "commerce",
    index: "04",
    name: "Webify Commerce",
    shortName: "Commerce",
    totalPrice: 2150000,
    deposit50: 1075000,
    agencyRange: "Agencia tradicional: $3.8M – $6.5M COP",
    deliveryDays: "10 días hábiles",
    idealFor:
      "Marcas de moda, streetwear y distribuidoras que necesitan pasarela de pagos automática (tarjetas, PSE, Addi) + WhatsApp.",
    features: [
      "Tienda online completa con pasarela Wompi / MercadoPago / Bold",
      "Cobro automático 24/7 con PSE, Nequi, tarjetas y financiación Addi",
      "Control de inventario automático por talla, color o referencia",
      "Carga inicial de hasta 120 productos con edición fotográfica",
      "Capacitación 1 a 1 en vivo + 30 días de soporte prioritario",
    ],
  },
];

export interface QuoteAddon {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const QUOTE_ADDONS: QuoteAddon[] = [
  {
    id: "extra-100",
    title: "Carga extra (+100 productos)",
    description:
      "Subimos y organizamos 100 referencias adicionales con sus variantes, precios y fotos optimizadas.",
    price: 250000,
  },
  {
    id: "custom-domain",
    title: "Dominio propio .com o .co (1 año)",
    description:
      "Registramos y configuramos tu nombre comercial a tu nombre con correos corporativos listos.",
    price: 95000,
  },
  {
    id: "stories-kit",
    title: "Kit de lanzamiento para Historias",
    description:
      "6 piezas gráficas verticales listas para anunciar tu nueva web en Instagram y estados de WhatsApp.",
    price: 120000,
  },
];

/**
 * Vertical numerical odometer component (Emil Kowalski spring physics)
 */
function OdometerCurrency({
  amount,
  isDark = false,
}: {
  amount: number;
  isDark?: boolean;
}) {
  const formatted = `$${amount.toLocaleString("es-CO")}`;

  return (
    <span className="inline-flex items-baseline overflow-hidden font-display text-[clamp(2rem,3vw,2.65rem)] font-bold leading-none tracking-[-0.04em] tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={formatted}
          initial={{ y: "100%", opacity: 0, filter: "blur(2px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(2px)" }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 32,
            mass: 0.7,
          }}
          className={`inline-block ${isDark ? "text-white" : "text-[#0F1713]"}`}
        >
          {formatted}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface PricingPackagesSectionProps {
  onOpenQuoteDrawer: (preselectedPlanId?: string) => void;
}

export function PricingPackagesSection({
  onOpenQuoteDrawer,
}: PricingPackagesSectionProps) {
  const [showDeposit50, setShowDeposit50] = useState<boolean>(true);

  return (
    <section
      id="precios"
      className="relative border-b border-[#0F1713]/12 bg-[#F6F5F0]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-[#0F1713]/12">
        {/* Swiss Section Index Bar */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3.5 sm:col-span-4 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#059669]">
              ● [03 / INVERSIÓN ÚNICA · REGLA 50/50]
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 sm:col-span-8 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525A55]">
              CERO MENSUALIDADES OBLIGATORIAS · CÓDIGO 100% TUYO
            </span>
            <span className="hidden font-mono text-[11px] font-semibold text-[#0F1713] md:inline">
              AGENCIA TRADICIONAL: $1.2M – $3.5M COP
            </span>
          </div>
        </div>

        {/* Section Headline + Odometer Switch Header */}
        <div className="grid grid-cols-1 border-b border-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12">
          <div className="px-5 py-10 sm:px-8 lg:col-span-7 lg:py-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#0F1713]">
              Precios publicados de frente: inicias con el{" "}
              <span className="font-serif italic font-normal text-[#059669]">
                50% y pagas el resto al recibir
              </span>
            </h2>
            <p className="mt-4 max-w-[58ch] text-[16px] leading-[1.6] text-[#525A55]">
              Sin cotizaciones misteriosas por DM ni contratos amarrados. Elige
              la arquitectura que calza con tu negocio, inicia con la mitad y
              liquida el 50% restante únicamente cuando apruebes tu página
              funcionando en vivo.
            </p>
          </div>

          {/* Interactive 100% vs 50% Switch Cell */}
          <div className="flex flex-col justify-between bg-[#EFECE4]/60 px-5 py-8 sm:px-8 lg:col-span-5 lg:py-14">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#525A55]">
                CONMUTADOR DE VISUALIZACIÓN DE INVERSIÓN
              </span>
              <div
                role="group"
                aria-label="Seleccionar modo de precio"
                className="mt-3 grid grid-cols-2 border border-[#0F1713]/20 bg-[#F6F5F0] p-1"
              >
                <button
                  type="button"
                  onClick={() => setShowDeposit50(false)}
                  className={`relative py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                    !showDeposit50
                      ? "bg-[#0F1713] text-[#F6F5F0]"
                      : "text-[#525A55] hover:text-[#0F1713]"
                  }`}
                >
                  Ver precio total (100%)
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeposit50(true)}
                  className={`relative py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                    showDeposit50
                      ? "bg-[#10B981] text-[#04110B]"
                      : "text-[#525A55] hover:text-[#0F1713]"
                  }`}
                >
                  Ver abono inicial (50%)
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#0F1713]/12 pt-4">
              <span className="font-mono text-[11px] text-[#525A55]">
                Referencia de mercado en Colombia:
              </span>
              <span className="font-mono text-[11.5px] font-semibold tabular-nums text-[#0F1713]">
                Agencia tradicional: $1.2M – $3.5M COP
              </span>
            </div>
          </div>
        </div>

        {/* Full-Width Swiss 1px Exposed Pricing Grid (Zero gap, zero rounded cards) */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {WEBIFY_PACKAGES.map((pkg) => {
            const isFeatured = Boolean(pkg.featured);
            const displayAmount = showDeposit50
              ? pkg.deposit50
              : pkg.totalPrice;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-6 sm:p-8 ${
                  isFeatured
                    ? "bg-[#0F1713] text-[#F6F5F0]"
                    : "bg-[#F6F5F0] text-[#0F1713]"
                }`}
              >
                {/* Top highlight bar for featured Catalog column */}
                {isFeatured && (
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#10B981]" />
                )}

                <div>
                  {/* Index & Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                        isFeatured ? "text-[#10B981]" : "text-[#525A55]"
                      }`}
                    >
                      [{pkg.index} / {pkg.shortName.toUpperCase()}]
                    </span>
                    {pkg.badge ? (
                      <span className="bg-[#10B981] px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-[#04110B]">
                        {pkg.badge}
                      </span>
                    ) : (
                      <span
                        className={`font-mono text-[10px] ${
                          isFeatured ? "text-white/60" : "text-[#525A55]"
                        }`}
                      >
                        {pkg.deliveryDays}
                      </span>
                    )}
                  </div>

                  {/* Plan Title (No trailing period) */}
                  <h3
                    className={`mt-4 font-display text-[26px] font-semibold tracking-[-0.03em] ${
                      isFeatured ? "text-white" : "text-[#0F1713]"
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  {/* Odometer Price Display */}
                  <div className="mt-5 border-y border-current/12 py-5">
                    <div className="flex items-baseline gap-1.5">
                      <OdometerCurrency
                        amount={displayAmount}
                        isDark={isFeatured}
                      />
                      <span
                        className={`font-mono text-[11px] uppercase ${
                          isFeatured ? "text-white/65" : "text-[#525A55]"
                        }`}
                      >
                        COP
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between font-mono text-[11px]">
                      <span
                        className={
                          isFeatured ? "text-[#10B981]" : "text-[#059669]"
                        }
                      >
                        {showDeposit50
                          ? `Abono 50% · Total: $${pkg.totalPrice.toLocaleString("es-CO")}`
                          : `Pago único · Inicias con $${pkg.deposit50.toLocaleString("es-CO")}`}
                      </span>
                    </div>

                    <p
                      className={`mt-1.5 font-mono text-[10.5px] ${
                        isFeatured ? "text-white/50" : "text-[#525A55]"
                      }`}
                    >
                      {pkg.agencyRange}
                    </p>
                  </div>

                  {/* Ideal For Description */}
                  <p
                    className={`mt-4 text-[13.5px] leading-relaxed ${
                      isFeatured ? "text-white/80" : "text-[#525A55]"
                    }`}
                  >
                    {pkg.idealFor}
                  </p>

                  {/* Feature List */}
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-[13px] leading-snug"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isFeatured ? "text-[#10B981]" : "text-[#059669]"
                          }`}
                        />
                        <span
                          className={
                            isFeatured ? "text-white/90" : "text-[#0F1713]"
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button -> Opens Vaul Quote Drawer with this plan preselected */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteDrawer(pkg.id)}
                    className={`w-full py-3.5 px-4 font-mono text-[11.5px] font-semibold uppercase tracking-[0.1em] transition-transform active:scale-[0.98] flex items-center justify-between ${
                      isFeatured
                        ? "bg-[#10B981] text-[#04110B] hover:bg-[#34D399]"
                        : "btn-clip-emerald bg-[#0F1713] text-[#F6F5F0]"
                    }`}
                  >
                    <span>Separar {pkg.name}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Drawer Banner inside the Swiss Grid */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#0F1713]/12 bg-[#EFECE4] px-5 py-5 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            <p className="font-mono text-[12px] text-[#0F1713]">
              ¿Necesitas sumar +100 productos extra, dominio{" "}
              <span className="font-semibold">.com / .co</span> o kit de
              historias para lanzamiento?
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteDrawer("catalog")}
            className="inline-flex items-center gap-2 border border-[#0F1713] bg-[#F6F5F0] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0F1713] transition-colors hover:bg-[#0F1713] hover:text-[#F6F5F0]"
          >
            <span>Abrir cotizador interactivo ⚡</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/**
 * Vaul-Style Slide-Up Bottom Drawer (Emil Kowalski physics & gesture handoff)
 */
interface QuoteVaulDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export function QuoteVaulDrawer({
  isOpen,
  onClose,
  initialPlanId = "catalog",
}: QuoteVaulDrawerProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const dragY = useMotionValue(0);
  const backdropOpacity = useTransform(dragY, [0, 260], [1, 0.2]);

  const activePackage =
    WEBIFY_PACKAGES.find((p) => p.id === selectedPlanId) ?? WEBIFY_PACKAGES[2];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const activeAddonsList = QUOTE_ADDONS.filter((a) =>
    selectedAddons.includes(a.id),
  );
  const addonsSum = activeAddonsList.reduce((acc, a) => acc + a.price, 0);
  const grandTotal = activePackage.totalPrice + addonsSum;
  const deposit50 = Math.round(grandTotal / 2);

  const whatsappCheckoutUrl = buildWhatsAppLink({
    type: "custom",
    message: `Hola Webify 👋 Configuré mi proyecto en el cotizador:\n• Arquitectura: *${activePackage.name}*\n• Complementos: ${
      activeAddonsList.length > 0
        ? activeAddonsList.map((a) => a.title).join(", ")
        : "Ninguno"
    }\n• Valor total: *$${grandTotal.toLocaleString("es-CO")} COP*\n• Abono inicial 50%: *$${deposit50.toLocaleString("es-CO")} COP*\n\nQuiero separar uno de los 5 cupos de este mes.`,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vaul-quote-title"
        >
          {/* Backdrop linked to drag gesture */}
          <motion.div
            style={{ opacity: backdropOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F1713]/70 backdrop-blur-sm"
          />

          {/* Vaul Sheet Surface */}
          <motion.div
            style={{ y: dragY }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.04, bottom: 0.65 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 110 || info.velocity.y > 480) {
                onClose();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 36,
              mass: 0.85,
            }}
            className="relative z-10 max-h-[90dvh] w-full max-w-[1040px] overflow-y-auto border-x border-t border-[#0F1713]/20 bg-[#F6F5F0] text-[#0F1713] shadow-[0_-28px_80px_rgba(0,0,0,0.45)]"
          >
            {/* Drag Handle Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#0F1713]/12 bg-[#F6F5F0]/95 px-5 py-3.5 backdrop-blur-md sm:px-8">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F1713]">
                  [COTIZADOR EN TIEMPO REAL · REGLA 50/50]
                </span>
              </div>
              <div className="mx-auto hidden h-1.5 w-12 rounded-full bg-[#0F1713]/20 sm:block" />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 border border-[#0F1713]/15 bg-white px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[#0F1713] hover:bg-[#EFECE4]"
              >
                <span>Cerrar</span>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Drawer Body: Swiss 12-Col Grid */}
            <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
              {/* Left 7 Cols: Plan + Add-ons Selector */}
              <div className="p-5 sm:p-8 lg:col-span-7">
                <h3
                  id="vaul-quote-title"
                  className="font-display text-[24px] font-semibold tracking-[-0.03em] text-[#0F1713]"
                >
                  Configura tu proyecto y bloquea tu cupo de este mes
                </h3>
                <p className="mt-1 text-[14px] text-[#525A55]">
                  Selecciona el paquete base y marca los complementos que
                  necesites. El abono del 50% se calcula al instante.
                </p>

                {/* Step 1: Base Architecture */}
                <div className="mt-6">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#525A55]">
                    01. ELIGE TU ARQUITECTURA BASE
                  </span>
                  <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {WEBIFY_PACKAGES.map((pkg) => {
                      const active = pkg.id === selectedPlanId;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setSelectedPlanId(pkg.id)}
                          className={`flex flex-col justify-between border p-3 text-left transition-all ${
                            active
                              ? "border-[#0F1713] bg-[#0F1713] text-white"
                              : "border-[#0F1713]/15 bg-white text-[#0F1713] hover:bg-[#EFECE4]"
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] uppercase ${
                              active ? "text-[#10B981]" : "text-[#525A55]"
                            }`}
                          >
                            {pkg.name}
                          </span>
                          <span className="mt-2 font-mono text-[14px] font-bold tabular-nums">
                            ${(pkg.totalPrice / 1000).toFixed(0)}k
                          </span>
                          <span
                            className={`mt-0.5 font-mono text-[10px] tabular-nums ${
                              active ? "text-white/70" : "text-[#059669]"
                            }`}
                          >
                            Abono ${(pkg.deposit50 / 1000).toFixed(0)}k
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: 3 Optional Add-ons */}
                <div className="mt-6">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#525A55]">
                    02. COMPLEMENTOS OPCIONALES (PAGO ÚNICO)
                  </span>
                  <div className="mt-2.5 space-y-2.5">
                    {QUOTE_ADDONS.map((addon) => {
                      const checked = selectedAddons.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddon(addon.id)}
                          className={`flex w-full items-start justify-between gap-3 border p-3.5 text-left transition-colors ${
                            checked
                              ? "border-[#059669] bg-[#10B981]/10"
                              : "border-[#0F1713]/15 bg-white hover:bg-[#EFECE4]/50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border ${
                                checked
                                  ? "border-[#059669] bg-[#059669] text-white"
                                  : "border-[#0F1713]/30 bg-white"
                              }`}
                            >
                              {checked && <Check className="h-3 w-3" />}
                            </span>
                            <div>
                              <span className="block font-display text-[14.5px] font-semibold text-[#0F1713]">
                                {addon.title}
                              </span>
                              <span className="mt-0.5 block text-[12.5px] leading-snug text-[#525A55]">
                                {addon.description}
                              </span>
                            </div>
                          </div>
                          <span className="shrink-0 font-mono text-[13px] font-semibold tabular-nums text-[#0F1713]">
                            +${addon.price.toLocaleString("es-CO")}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Live Summary Ticket & WhatsApp Dispatch */}
              <div className="flex flex-col justify-between bg-[#0F1713] p-5 text-[#F6F5F0] sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between border-b border-white/12 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#10B981]">
                      RESUMEN DE TU ORDEN WEBIFY
                    </span>
                    <span className="font-mono text-[10px] text-white/60">
                      ENTREGA: {activePackage.deliveryDays.toUpperCase()}
                    </span>
                  </div>

                  {/* Breakdown */}
                  <div className="mt-4 space-y-2.5 border-b border-white/12 pb-4 font-mono text-[12px]">
                    <div className="flex items-center justify-between">
                      <span className="text-white">{activePackage.name}</span>
                      <span className="font-semibold tabular-nums text-white">
                        ${activePackage.totalPrice.toLocaleString("es-CO")}
                      </span>
                    </div>

                    {activeAddonsList.map((addon) => (
                      <div
                        key={addon.id}
                        className="flex items-center justify-between text-white/80"
                      >
                        <span>+ {addon.title}</span>
                        <span className="tabular-nums text-[#10B981]">
                          +${addon.price.toLocaleString("es-CO")}
                        </span>
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-2 text-[13px] text-white/70">
                      <span>Valor total del proyecto (100%)</span>
                      <span className="font-semibold tabular-nums text-white">
                        ${grandTotal.toLocaleString("es-CO")} COP
                      </span>
                    </div>
                  </div>

                  {/* 50% Deposit Odometer Highlight */}
                  <div className="mt-5 border border-[#10B981]/35 bg-[#15201B] p-4">
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                      ABONO INICIAL PARA ARRANCAR HOY (50%)
                    </span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <OdometerCurrency amount={deposit50} isDark />
                      <span className="font-mono text-[12px] text-[#10B981]">
                        COP
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-[11px] leading-relaxed text-white/70">
                      El 50% restante ($
                      {(grandTotal - deposit50).toLocaleString("es-CO")} COP) lo
                      pagas únicamente contra entrega y aprobación.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={whatsappCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between bg-[#10B981] px-5 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#04110B] transition-colors hover:bg-[#34D399]"
                  >
                    <span>Enviar cotización por WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[10.5px] text-white/60">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                    <span>
                      Recibimos Nequi, Bre-B, Bancolombia y Tarjetas (Wompi)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
