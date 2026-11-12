"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "faq-01",
    index: "01",
    question:
      "¿Tengo que pagar mensualidades obligatorias como en Shopify o plataformas de alquiler?",
    answer:
      "No. El desarrollo de tu página en Webify es un pago único (50% para iniciar y 50% al entregar). Además, incluimos el primer año de hosting de alta velocidad bonificado. A partir del segundo año, solo renuevas tu dominio y servidor anual (o puedes elegir cualquiera de los planes 100% opcionales de Webify Care si quieres que operemos tus cambios).",
  },
  {
    id: "faq-02",
    index: "02",
    question:
      "¿Cómo funciona exactamente el pago 50/50 y qué garantías tengo?",
    answer:
      "Arrancamos la producción con el 50% del paquete elegido (desde $225.000 COP en Webify Go). Montamos todo tu sitio con tus fotos, precios y flujos reales de cobro. Solo cuando lo pruebas desde tu celular y apruebas la entrega, pagas el 50% restante.",
  },
  {
    id: "faq-03",
    index: "03",
    question:
      "¿Puedo cobrar por Nequi, Bre-B, Bancolombia o contraentrega sin pagar comisión por venta?",
    answer:
      "Sí. A diferencia de las pasarelas que te descuentan entre 3.5% y 6% por cada venta, nuestra arquitectura permite que el cliente arme su pedido en la web y te envíe la orden liquidada a WhatsApp para pagar por Nequi, Bre-B o transferencia directa con 0% de comisión. Y si eliges Webify Commerce, también puedes tener Wompi, PSE y Addi en paralelo.",
  },
  {
    id: "faq-04",
    index: "04",
    question:
      "No tengo textos redactados ni fotos de estudio profesional, ¿puedo empezar así?",
    answer:
      "Claro que sí. Nos envías las fotos actuales de tu galería o Instagram y tu lista de precios en WhatsApp o Excel. Nuestro equipo se encarga de recortar, optimizar la iluminación, organizar las categorías y redactar todos los textos comerciales por ti.",
  },
  {
    id: "faq-05",
    index: "05",
    question:
      "¿Yo mismo puedo cambiar precios o marcar productos como agotados desde el celular?",
    answer:
      "Sí. En los paquetes Webify Catalog y Webify Commerce te entregamos un panel limpio que abres desde tu celular para cambiar un precio, subir un producto nuevo o apagar una referencia agotada en menos de 10 segundos.",
  },
];

export function ProductionAndFaqSection() {
  const [openId, setOpenId] = useState<string>("faq-01");

  return (
    <section
      id="faq"
      className="relative border-b border-[#0F1713]/12 bg-[#F6F5F0]"
    >
      <div className="mx-auto max-w-[1440px] border-x border-[#0F1713]/12">
        {/* Swiss Top Coordinate Bar */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 border-b border-[#0F1713]/12 sm:grid-cols-12 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3.5 sm:col-span-4 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#059669]">
              ● [06 / PREGUNTAS DIRECTAS]
            </span>
          </div>
          <div className="flex items-center justify-between px-5 py-3.5 sm:col-span-8 sm:px-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#525A55]">
              RESPUESTAS CLARAS ANTES DE SEPARAR TU CUPO
            </span>
            <span className="hidden font-mono text-[11px] text-[#0F1713] md:inline">
              SIN LETRA PEQUEÑA
            </span>
          </div>
        </div>

        {/* Asymmetric 12-Col Layout */}
        <div className="grid grid-cols-1 divide-y divide-[#0F1713]/12 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          {/* Left 5 Cols: Editorial Title */}
          <div className="flex flex-col justify-between p-5 sm:p-8 lg:col-span-5 lg:p-12">
            <div>
              <h2 className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#0F1713]">
                Todo lo que preguntas antes de invertir en la{" "}
                <span className="font-serif italic font-normal text-[#059669]">
                  presencia digital de tu negocio
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-[#525A55]">
                Hablamos en pesos colombianos, con tiempos reales en días
                hábiles y sin tecnicismos de programación.
              </p>
            </div>

            <div className="mt-8 border-t border-[#0F1713]/12 pt-5">
              <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525A55]">
                ATENCIÓN DIRECTA EN COLOMBIA
              </span>
              <p className="mt-1 font-mono text-[12.5px] font-semibold text-[#0F1713]">
                Bogotá · Medellín · Cali · Barranquilla · Bucaramanga
              </p>
            </div>
          </div>

          {/* Right 7 Cols: 1px Swiss Accordion */}
          <div className="divide-y divide-[#0F1713]/12 lg:col-span-7">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="bg-[#F6F5F0]">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-[#EFECE4]/60 sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 font-mono text-[11px] font-semibold text-[#059669]">
                        [{item.index}]
                      </span>
                      <h3 className="font-display text-[18px] font-semibold leading-snug tracking-[-0.02em] text-[#0F1713] sm:text-[20px]">
                        {item.question}
                      </h3>
                    </div>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-[#0F1713]/20 bg-white text-[#0F1713]">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.24,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#0F1713]/10 bg-[#EFECE4]/40 px-5 py-5 pl-14 text-[14.5px] leading-[1.68] text-[#525A55] sm:px-8 sm:pl-16">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
