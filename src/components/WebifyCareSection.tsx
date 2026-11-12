"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const CARE_PLANS = [
  {
    id: "solo-hosting",
    name: "Solo Hosting ($49.000/mes)",
    shortTitle: "Solo Hosting",
    priceFormatted: "$49.000/mes",
    whenApplies: "Opcional a partir del año 2 (Año 1 incluido gratis)",
    includes:
      "Servidor de alta velocidad en la nube, renovación de certificado SSL, copias de seguridad semanales y monitoreo de caída 24/7.",
    forWho: "Negocios que actualizan sus propios precios desde el panel.",
  },
  {
    id: "hosting-cambios",
    name: "Hosting + Cambios ($89.000/mes)",
    shortTitle: "Hosting + Cambios",
    priceFormatted: "$89.000/mes",
    whenApplies: "100% opcional mes a mes · Sin cláusula de permanencia",
    includes:
      "Todo lo de Solo Hosting + hasta 4 actualizaciones al mes hechas por nuestro equipo (subir nuevos productos, cambiar banners, actualizar precios o promociones).",
    forWho: "Comercios que prefieren enviarnos fotos por WhatsApp y que nosotros subamos todo.",
    highlighted: true,
  },
  {
    id: "soporte-seo",
    name: "Soporte y SEO Total ($160.000/mes)",
    shortTitle: "Soporte y SEO Total",
    priceFormatted: "$160.000/mes",
    whenApplies: "100% opcional para marcas en crecimiento activo",
    includes:
      "Cambios ilimitados de catálogo + optimización mensual en Google (SEO local), reporte de clics a WhatsApp y soporte técnico prioritario en menos de 2 horas.",
    forWho: "Marcas con rotación semanal de colecciones o campañas de pauta activa.",
  },
];

export function WebifyCareSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section
      id="mantenimiento"
      className="relative border-b border-[#0F1713]/12 bg-[#F6F5F0]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-[#0F1713]/12">
        {/* Compact Collapsible Trigger Row */}
        <div className="grid grid-cols-1 border-b border-[#0F1713]/12 bg-[#EFECE4]/60 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12">
          <div className="flex flex-col justify-center px-5 py-6 sm:px-8 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-[#0F1713] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                100% OPCIONAL · CERO OBLIGACIÓN
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525A55]">
                [05 / DELEGACIÓN TÉCNICA MENSUAL]
              </span>
            </div>
            <h2 className="mt-2.5 font-display text-[clamp(1.45rem,2.5vw,2.1rem)] font-semibold tracking-[-0.03em] text-[#0F1713]">
              ¿No quieres subir fotos ni tocar nada técnico después del lanzamiento?{" "}
              <span className="font-serif italic font-normal text-[#059669]">
                Conoce Webify Care
              </span>
            </h2>
            <p className="mt-1.5 text-[14px] text-[#525A55]">
              Recuerda: tu página es tuya con un pago único y puedes
              administrarla tú mismo gratis. Solo si prefieres delegarnos los
              cambios mensuales, despliega esta tabla.
            </p>
          </div>

          <div className="flex items-center justify-start px-5 pb-6 sm:px-8 lg:col-span-4 lg:justify-end lg:py-6">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="inline-flex w-full items-center justify-between gap-3 border border-[#0F1713] bg-[#F6F5F0] px-5 py-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#0F1713] transition-colors hover:bg-[#0F1713] hover:text-[#F6F5F0] sm:w-auto"
            >
              <span>
                {isExpanded
                  ? "Ocultar tabla opcional"
                  : "Ver tabla de planes opcionales"}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Collapsible Horizontal Swiss Table */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="overflow-hidden"
            >
              <div className="divide-y divide-[#0F1713]/12">
                {/* Table Column Headers (Desktop) */}
                <div className="hidden grid-cols-12 divide-x divide-[#0F1713]/12 bg-[#0F1713] font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/75 lg:grid">
                  <div className="col-span-3 px-6 py-3">Plan honesto</div>
                  <div className="col-span-5 px-6 py-3">Qué incluye exactamente</div>
                  <div className="col-span-2 px-6 py-3">Condición</div>
                  <div className="col-span-2 px-6 py-3 text-right">Acción</div>
                </div>

                {/* Horizontal Rows */}
                {CARE_PLANS.map((plan) => {
                  const waLink = buildWhatsAppLink({
                    type: "care_plan",
                    planName: plan.shortTitle,
                    monthlyPrice: plan.priceFormatted,
                  });

                  return (
                    <div
                      key={plan.id}
                      className={`grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12 ${
                        plan.highlighted ? "bg-[#10B981]/8" : "bg-[#F6F5F0]"
                      }`}
                    >
                      {/* Col 1: Exact Name & Price */}
                      <div className="flex flex-col justify-center p-5 sm:px-6 lg:col-span-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-[#0F1713]">
                            {plan.name}
                          </h3>
                        </div>
                        <span className="mt-1 font-mono text-[11px] text-[#059669]">
                          {plan.forWho}
                        </span>
                      </div>

                      {/* Col 2: Includes */}
                      <div className="flex items-center px-5 pb-3 sm:px-6 lg:col-span-5 lg:py-5">
                        <p className="text-[13.5px] leading-relaxed text-[#525A55]">
                          {plan.includes}
                        </p>
                      </div>

                      {/* Col 3: Condition */}
                      <div className="flex items-center px-5 pb-4 sm:px-6 lg:col-span-2 lg:py-5">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#0F1713]">
                          <Check className="h-3.5 w-3.5 shrink-0 text-[#059669]" />
                          {plan.whenApplies}
                        </span>
                      </div>

                      {/* Col 4: Action */}
                      <div className="flex items-center justify-start px-5 pb-5 sm:px-6 lg:col-span-2 lg:justify-end lg:py-5">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 border border-[#0F1713]/20 bg-white px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0F1713] transition-colors hover:bg-[#0F1713] hover:text-white"
                        >
                          <span>Consultar</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
