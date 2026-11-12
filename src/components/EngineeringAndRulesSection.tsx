"use client";

import React from "react";
import { ShieldCheck, KeyRound, CalendarCheck2, Camera } from "lucide-react";

const PROCESS_STEPS = [
  {
    num: "01",
    days: "DÍA 01",
    title: "Diagnóstico comercial y bloqueo de cupo con el 50%",
    detail:
      "Revisamos tu catálogo actual en WhatsApp o Instagram, definimos la arquitectura exacta para tu nicho y separamos tu turno de producción con el abono inicial del 50%.",
  },
  {
    num: "02",
    days: "DÍAS 02 — 04",
    title: "Curaduría visual, redacción de textos y carga de inventario",
    detail:
      "No tienes que sentarte a redactar ni recortar fotos. Nuestro equipo optimiza tus fotografías, estructura las variantes (tallas, mililitros, adiciones) y redacta cada sección para vender.",
  },
  {
    num: "03",
    days: "DÍAS 05 — 06",
    title: "Integración de cobros con WhatsApp, Nequi, Bre-B o Wompi",
    detail:
      "Conectamos las órdenes para que lleguen liquidadas a tu celular con envío calculado por ciudad o barrio, o directo a tu pasarela bancaria sin comisiones ocultas.",
  },
  {
    num: "04",
    days: "DÍA 07 · ENTREGA",
    title: "Aprobación en vivo, pago del 50% restante y entrega de llaves",
    detail:
      "Pruebas tu sitio desde tu propio celular. Solo cuando estás 100% conforme cancelas el 50% final, conectamos tu dominio propio y te entregamos los accesos totales.",
  },
];

const GUARANTEES = [
  {
    code: "GARANTÍA 01",
    title: "Pago 50/50 sin riesgo",
    description:
      "Inicias con la mitad y solo pagas el 50% restante cuando ves tu página terminada y funcionando desde tu celular.",
    icon: ShieldCheck,
  },
  {
    code: "GARANTÍA 02",
    title: "Dominio y código 100% tuyos",
    description:
      "Nada de alquileres donde pierdes tu web si dejas de pagar. Te entregamos las llaves del dominio y el código fuente a tu nombre.",
    icon: KeyRound,
  },
  {
    code: "GARANTÍA 03",
    title: "30 días de garantía técnica",
    description:
      "Durante el primer mes de lanzamiento acompañamos tu operación y ajustamos cualquier detalle técnico o de precios sin costo.",
    icon: CalendarCheck2,
  },
  {
    code: "GARANTÍA 04",
    title: "Redacción y fotos incluidas",
    description:
      "Nos envías tus productos o lista de precios por WhatsApp y nosotros nos encargamos de organizar, redactar y subir todo por ti.",
    icon: Camera,
  },
];

export function EngineeringAndRulesSection() {
  return (
    <section
      id="proceso"
      className="relative border-b border-[#0F1713]/12 bg-[#F6F5F0]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-[#0F1713]/12">
        {/* Swiss Top Coordinate Bar */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3.5 sm:col-span-4 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#059669]">
              ● [04 / PROCESO 01 — 04 & GARANTÍAS]
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 sm:col-span-8 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525A55]">
              DE INSTAGRAM CAÓTICO A PRESENCIA DE AGENCIA EN MENOS DE 10 DÍAS
            </span>
            <span className="hidden font-mono text-[11px] font-semibold text-[#0F1713] md:inline">
              ENTREGA LLAVE EN MANO
            </span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="grid grid-cols-1 border-b border-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12">
          <div className="px-5 py-10 sm:px-8 lg:col-span-7 lg:py-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#0F1713]">
              Tú sigues atendiendo tu negocio; nosotros{" "}
              <span className="font-serif italic font-normal text-[#059669]">
                entregamos todo montado en días
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-end px-5 pb-10 sm:px-8 lg:col-span-5 lg:py-14">
            <p className="text-[16px] leading-[1.6] text-[#525A55]">
              Eliminamos las reuniones eternas de las agencias tradicionales y
              la frustración de aprender a diseñar por tu cuenta. En 4 etapas
              claras pasamos de tu lista de precios en WhatsApp a tu sitio en
              producción.
            </p>
          </div>
        </div>

        {/* 01 — 04 Editorial Process Rows (Clean Swiss 1px hairlines, zero gray cards) */}
        <div className="divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-1 transition-colors hover:bg-[#EFECE4]/50 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12"
            >
              {/* Large Monospace Number Cell (3 cols) */}
              <div className="flex items-baseline justify-between px-5 pt-7 pb-2 sm:px-8 lg:col-span-3 lg:flex-col lg:justify-between lg:py-9">
                <span className="font-mono text-[clamp(2.75rem,4.5vw,4.25rem)] font-light leading-none tracking-[-0.05em] tabular-nums text-[#0F1713]">
                  {step.num}
                </span>
                <span className="border border-[#0F1713]/15 bg-[#EFECE4] px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                  {step.days}
                </span>
              </div>

              {/* Step Title (4 cols) */}
              <div className="flex items-center px-5 py-3 sm:px-8 lg:col-span-4 lg:py-9">
                <h3 className="font-display text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0F1713]">
                  {step.title}
                </h3>
              </div>

              {/* Step Description (5 cols) */}
              <div className="flex items-center px-5 pt-1 pb-7 sm:px-8 lg:col-span-5 lg:py-9">
                <p className="text-[14.5px] leading-[1.65] text-[#525A55]">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unified 4 Commercial Guarantees (Pago 50/50, Dominio 100% tuyo, 30 días, Redacción y fotos) */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 bg-[#EFECE4]/45 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {GUARANTEES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#059669]">
                      [{item.code}]
                    </span>
                    <Icon className="h-4 w-4 text-[#0F1713]" />
                  </div>
                  <h3 className="mt-4 font-display text-[19px] font-semibold tracking-[-0.02em] text-[#0F1713]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#525A55]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
