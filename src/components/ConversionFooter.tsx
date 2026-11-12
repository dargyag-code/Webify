"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface ConversionFooterProps {
  onOpenQuoteDrawer?: (preselectedPlanId?: string) => void;
}

export function ConversionFooter({ onOpenQuoteDrawer }: ConversionFooterProps) {
  const whatsappFooterUrl = buildWhatsAppLink({
    type: "footer_cupo",
  });

  return (
    <footer className="relative bg-[#0F1713] pb-28 text-[#F6F5F0]">
      <div className="mx-auto max-w-[1440px] border-x border-white/12">
        {/* Top Swiss Coordinate Row */}
        <div className="grid grid-cols-1 divide-y divide-white/12 border-b border-white/12 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3.5 sm:col-span-4 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#10B981]">
              ● [07 / INICIAR PROYECTO · 5 CUPOS MENSUALES]
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 sm:col-span-8 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
              ABONO INICIAL DESDE $225.000 COP · REGLA 50/50
            </span>
            <span className="hidden font-mono text-[11px] text-[#10B981] md:inline">
              RESPUESTA EN MENOS DE 10 MINUTOS
            </span>
          </div>
        </div>

        {/* Main Editorial Closing Block */}
        <div className="grid grid-cols-1 divide-y divide-white/12 border-b border-white/12 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          <div className="px-5 py-12 sm:px-8 lg:col-span-8 lg:p-14">
            <h2 className="font-display text-[clamp(2.25rem,4.8vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
              Deja de perder ventas a las 10 de la noche por no tener{" "}
              <span className="font-serif italic font-normal text-[#10B981]">
                precios publicados en un link profesional
              </span>
            </h2>
            <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-white/75">
              Aceptamos únicamente 5 proyectos por mes en Colombia para entregar
              cada catálogo, sistema de reservas o tienda online en menos de 10
              días hábiles. Inicia hoy con el 50% y liquida al aprobar.
            </p>
          </div>

          <div className="flex flex-col justify-between bg-[#15201B] p-6 sm:p-8 lg:col-span-4 lg:p-12">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                BLOQUEO DE CUPO DIRECTO
              </span>
              <h3 className="mt-2 font-display text-[22px] font-semibold tracking-[-0.02em] text-white">
                Cotiza en 30 segundos o escríbenos al WhatsApp del estudio
              </h3>
            </div>

            <div className="mt-8 space-y-3">
              {onOpenQuoteDrawer && (
                <button
                  type="button"
                  onClick={() => onOpenQuoteDrawer("catalog")}
                  className="flex w-full items-center justify-between bg-[#10B981] px-5 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#04110B] transition-colors hover:bg-[#34D399]"
                >
                  <span>Abrir cotizador 50/50 ⚡</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              )}

              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between border border-white/20 bg-[#0F1713] px-5 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#10B981] hover:text-[#10B981]"
              >
                <span>Hablar por WhatsApp directo</span>
                <ArrowUpRight className="h-4 w-4 text-[#10B981]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Colophon */}
        <div className="flex flex-col items-start justify-between gap-4 px-5 py-6 font-mono text-[11px] text-white/55 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] font-bold tracking-tight text-white">
              W<span className="text-[#10B981]">.</span> Webify.co
            </span>
            <span>· Estudio de Ingeniería Digital Comercial en Colombia</span>
          </div>
          <div>
            <span>
              Nequi · Bre-B · Bancolombia · Wompi · 0% comisiones ocultas
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
