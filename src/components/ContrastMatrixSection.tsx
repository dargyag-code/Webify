"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, CheckCheck, Clock, ArrowUpRight } from "lucide-react";

const LOST_NOTIFICATIONS = [
  {
    id: "dm-1",
    handle: "@camila.rodriguez",
    time: "10:18 p. m.",
    text: "Hola buenas noches, ¿qué precio tiene el Khamrah de 100ml y cuánto vale el envío a Cedritos?",
    zDepth: "translateZ(-18px)",
  },
  {
    id: "dm-2",
    handle: "@andres_m94",
    time: "10:21 p. m.",
    text: "¿Me regalas catálogo con precios porfa? ¿Tienen pago contraentrega o por Nequi?",
    zDepth: "translateZ(12px)",
  },
  {
    id: "dm-3",
    handle: "@valeria.gomez_",
    time: "10:34 p. m.",
    text: "Holaa, ¿sigue disponible el decant de 10ml? Lo necesito para un regalo mañana",
    zDepth: "translateZ(28px)",
  },
];

export function ContrastMatrixSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Left side (lost DMs): parallax & progressive blur as scroll advances
  const leftY1 = useTransform(scrollYProgress, [0.1, 0.7], [24, -22]);
  const leftY2 = useTransform(scrollYProgress, [0.1, 0.7], [40, -36]);
  const leftBlur = useTransform(
    scrollYProgress,
    [0.15, 0.55, 0.85],
    ["blur(0px)", "blur(0.5px)", "blur(2.5px)"],
  );
  const leftOpacity = useTransform(scrollYProgress, [0.15, 0.65, 0.9], [1, 0.92, 0.68]);

  // Right side (Order #204): emerges with 3D relief & sharpness
  const rightRotateX = useTransform(scrollYProgress, [0.1, 0.48], [11, 0]);
  const rightRotateY = useTransform(scrollYProgress, [0.1, 0.48], [-8, 0]);
  const rightScale = useTransform(scrollYProgress, [0.1, 0.48], [0.94, 1]);
  const rightY = useTransform(scrollYProgress, [0.1, 0.48], [38, 0]);

  return (
    <section
      ref={sectionRef}
      id="contraste"
      className="relative border-b border-[#0F1713]/12 bg-[#F6F5F0]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-[#0F1713]/12">
        {/* Top Swiss index bar */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3.5 sm:col-span-4 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#525A55]">
              [01 / LA HORA CRÍTICA DEL COMERCIO]
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 sm:col-span-8 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525A55]">
              BOGOTÁ · MEDELLÍN · CALI · 10:18 P. M.
            </span>
            <span className="font-mono text-[11px] font-medium text-[#991B1B]">
              FUGA NOCTURNA DE VENTAS VS. LIQUIDACIÓN AUTOMÁTICA
            </span>
          </div>
        </div>

        {/* Section Editorial Headline */}
        <div className="grid grid-cols-1 border-b border-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-[#0F1713]/12">
          <div className="px-5 py-10 sm:px-8 lg:col-span-7 lg:py-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#0F1713]">
              Son las 10:18 de la noche: tu pauta sigue corriendo, pero{" "}
              <span className="font-serif italic font-normal text-[#059669]">
                nadie está respondiendo precios
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-end px-5 pb-10 sm:px-8 lg:col-span-5 lg:py-14">
            <p className="text-[16px] leading-[1.6] text-[#525A55]">
              El 68% de los compradores en Instagram y TikTok en Colombia
              cotizan después de las 8:00 p. m. Si para saber cuánto vale un
              producto o apartar un turno tienen que esperar a que amanezca, le
              compran al comercio que sí tiene precios y stock publicados en un
              enlace.
            </p>
          </div>
        </div>

        {/* Immersive 3D Scroll Comparison Grid (No floating cards wrapper, pure 1px Swiss architecture) */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          {/* LEFT COLUMN (6 cols): Lost Instagram notifications at 10:18 PM + 9:14 AM "Visto" */}
          <div className="relative overflow-hidden bg-[#EFECE4]/60 px-5 py-10 sm:px-8 lg:col-span-6 lg:py-14">
            <div className="mb-8 flex items-center justify-between border-b border-[#0F1713]/12 pb-4">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#991B1B]">
                  ESCENARIO A · LINK EN BIO SIN CATÁLOGO WEB
                </span>
                <h3 className="mt-1 font-display text-[21px] font-semibold tracking-[-0.02em] text-[#0F1713]">
                  Bandeja de Instagram colapsada a las 10:18 de la noche
                </h3>
              </div>
              <span className="border border-[#991B1B]/25 bg-[#991B1B]/10 px-2.5 py-1 font-mono text-[11px] font-semibold tabular-nums text-[#991B1B]">
                $0 COP CERRADOS
              </span>
            </div>

            {/* 3D Depth Stack of Unanswered Night Messages */}
            <motion.div
              style={{ filter: leftBlur, opacity: leftOpacity }}
              className="space-y-3.5"
            >
              {LOST_NOTIFICATIONS.map((item, idx) => (
                <motion.div
                  key={item.id}
                  style={{
                    y: idx % 2 === 0 ? leftY1 : leftY2,
                  }}
                  className="border border-[#0F1713]/15 bg-[#F6F5F0] p-4 shadow-[0_12px_28px_-14px_rgba(15,23,19,0.12)]"
                >
                  <div className="flex items-center justify-between border-b border-[#0F1713]/10 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#991B1B]" />
                      <span className="font-mono text-[11px] font-semibold text-[#0F1713]">
                        {item.handle}
                      </span>
                      <span className="font-mono text-[10px] text-[#525A55]">
                        · Mensaje directo
                      </span>
                    </div>
                    <span className="font-mono text-[11px] tabular-nums text-[#991B1B]">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#0F1713]">
                    “{item.text}”
                  </p>
                </motion.div>
              ))}

              {/* Next morning divider */}
              <div className="flex items-center gap-3 py-2">
                <div className="h-px flex-1 bg-[#0F1713]/15" />
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#525A55]">
                  <Clock className="h-3 w-3 text-[#991B1B]" />
                  10 HORAS Y 56 MINUTOS DESPUÉS (DÍA SIGUIENTE)
                </span>
                <div className="h-px flex-1 bg-[#0F1713]/15" />
              </div>

              {/* Store's late reply at 9:14 a.m. + exact Visto indicator */}
              <div className="border border-[#991B1B]/30 bg-white p-4">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono font-semibold uppercase tracking-[0.1em] text-[#0F1713]">
                    TU RESPUESTA RECIÉN AL ABRIR EL LOCAL
                  </span>
                  <span className="font-mono tabular-nums text-[#525A55]">
                    9:14 a. m.
                  </span>
                </div>
                <p className="mt-2 border-l-2 border-[#0F1713]/20 pl-3 text-[13.5px] text-[#525A55]">
                  “¡Hola Camila! Qué pena la hora, hasta ahora abrimos. Sí nos
                  queda Khamrah de 100ml en $180.000 y el envío a Cedritos vale
                  $8.000. ¿Te paso los datos de Nequi?”
                </p>
                <div className="mt-3 flex items-start gap-2 border-t border-[#991B1B]/15 pt-2.5 text-[12px] font-medium text-[#991B1B]">
                  <CheckCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#991B1B]" />
                  <span>
                    Visto ✓✓ · Sin respuesta (Te dejaron en visto porque anoche
                    compraron donde sí estaban los precios publicados)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (6 cols): Order #204 for $188.000 COP emerging in 3D relief */}
          <div className="relative flex flex-col justify-between bg-[#0F1713] px-5 py-10 text-[#F6F5F0] sm:px-8 lg:col-span-6 lg:py-14">
            <div className="mb-8 flex items-center justify-between border-b border-white/12 pb-4">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                  ESCENARIO B · ARQUITECTURA WEBIFY EN TU BIO
                </span>
                <h3 className="mt-1 font-display text-[21px] font-semibold tracking-[-0.02em] text-white">
                  Orden #204 liquidada sola en 40 segundos
                </h3>
              </div>
              <span className="border border-[#10B981]/40 bg-[#10B981]/15 px-2.5 py-1 font-mono text-[11px] font-semibold tabular-nums text-[#10B981]">
                +$188.000 COP
              </span>
            </div>

            {/* 3D Relief Order Artifact */}
            <div style={{ perspective: "1200px" }} className="relative z-10">
              <motion.div
                style={{
                  rotateX: rightRotateX,
                  rotateY: rightRotateY,
                  scale: rightScale,
                  y: rightY,
                }}
                className="relative border border-white/15 bg-[#15201B] p-5 sm:p-6 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.75)]"
              >
              {/* Top receipt header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/12 pb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#10B981]">
                    ● ORDEN WEBIFY #204 · 10:19 P. M.
                  </span>
                  <p className="mt-0.5 font-display text-[18px] font-semibold text-white">
                    aura-parfums.co/khamrah
                  </p>
                </div>
                <div className="text-right">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">
                    TIEMPO DE COMPRA
                  </span>
                  <span className="font-mono text-[13px] font-semibold tabular-nums text-[#10B981]">
                    00m : 40s (Sin chatear)
                  </span>
                </div>
              </div>

              {/* Line items */}
              <div className="divide-y divide-white/10 py-3 font-mono text-[12px]">
                <div className="flex items-center justify-between py-2.5">
                  <div>
                    <span className="text-white">
                      1x Khamrah Lattafa EDP — Frasco 100 ml
                    </span>
                    <span className="block text-[10.5px] text-white/55">
                      Selección directa en catálogo · Stock descontado
                    </span>
                  </div>
                  <span className="font-semibold tabular-nums text-white">
                    $180.000
                  </span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <div>
                    <span className="text-white">
                      Envío Bogotá Norte (Cedritos · Calle 140)
                    </span>
                    <span className="block text-[10.5px] text-white/55">
                      Tarifa calculada automáticamente por barrio
                    </span>
                  </div>
                  <span className="font-semibold tabular-nums text-white">
                    $8.000
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 text-[14px]">
                  <span className="font-semibold uppercase tracking-[0.08em] text-[#10B981]">
                    TOTAL LIQUIDADO
                  </span>
                  <span className="font-display text-[24px] font-bold tabular-nums text-[#10B981]">
                    $188.000 COP
                  </span>
                </div>
              </div>

              {/* Elevated Z-layer: WhatsApp dispatch summary */}
              <div
                style={{ transform: "translateZ(26px)" }}
                className="mt-3 border border-[#10B981]/35 bg-[#0F1713] p-4 shadow-[0_20px_38px_-14px_rgba(0,0,0,0.65)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                    MENSAJE RECIBIDO EN TU WHATSAPP · 10:19 P. M.
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-white/70">
                    <Check className="h-3.5 w-3.5 text-[#10B981]" />
                    Nequi verificado
                  </span>
                </div>
                <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-white/90">
                  “Hola Aura Parfums, envío la *Orden #204* por *$188.000 COP*
                  (1x Khamrah 100ml + Envío Cedritos). Adjunto comprobante Nequi
                  a nombre de Camila Rodríguez.”
                </p>
              </div>
              </motion.div>
            </div>

            {/* Bottom Engineering Proof Row */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-white/12 border-t border-white/12 pt-5">
              <div className="pr-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                  COMISIÓN POR VENTA
                </span>
                <span className="mt-1 block font-mono text-[15px] font-semibold tabular-nums text-white">
                  $0 COP (0%)
                </span>
              </div>
              <div className="px-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                  MEDIOS DE RECAUDO
                </span>
                <span className="mt-1 block font-mono text-[13px] font-semibold text-[#10B981]">
                  Nequi · Bre-B · Wompi
                </span>
              </div>
              <div className="pl-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                  HORARIO DE VENTA
                </span>
                <span className="mt-1 flex items-center gap-1 font-mono text-[13px] font-semibold text-white">
                  24/7 Automático
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#10B981]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
