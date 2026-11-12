export const WEBIFY_WHATSAPP_NUMBER = "573000000000";

export type WhatsAppIntent =
  | { type: "top_bar_cupo" }
  | { type: "navbar_general" }
  | { type: "hero_specialist" }
  | { type: "hero_simulator"; itemsSummary: string; totalCOP: string }
  | {
      type: "demo_niche";
      demoId: string;
      demoTitle: string;
      subdomain: string;
      brandName: string;
      simulatedTicket: string;
    }
  | {
      type: "package";
      packageName: string;
      launchPrice: string;
      regularPrice: string;
      deliveryTime: string;
      carePlanName?: string;
    }
  | {
      type: "care_plan";
      planName: string;
      monthlyPrice: string;
    }
  | {
      type: "calculator_custom";
      businessType: string;
      recommendedPackage: string;
      estimatedPrice: string;
      upfront50: string;
      deliveryDays: string;
      paymentMethod: string;
      carePlan: string;
    }
  | { type: "footer_cupo" }
  | { type: "custom"; message: string };

/**
 * Motor dinámico centralizado de WhatsApp (buildWhatsAppLink)
 * Conecta todos los botones de llamada a la acción con https://wa.me/573000000000?text=...
 * inyectando un mensaje pre-formateado distinto según el paquete, demo o plan seleccionado.
 */
export function buildWhatsAppLink(intent: WhatsAppIntent): string {
  let text = "";

  switch (intent.type) {
    case "top_bar_cupo":
      text =
        "Hola equipo Webify 👋 Vi el anuncio de lanzamiento en Colombia y quiero separar uno de los 5 cupos disponibles de este mes con hasta 25% OFF. ¿Me confirman disponibilidad para mi negocio?";
      break;

    case "navbar_general":
      text =
        "Hola Webify 👋 Entré a su página web y quiero cotizar un sistema digital para mi negocio en Colombia. ¿Me pueden asesorar sobre cuál paquete me conviene más?";
      break;

    case "hero_specialist":
      text =
        "Hola especialista de Webify 👋 Quiero dejar de perder ventas por DM en Instagram y convertir mi negocio en una página web que venda 24/7 con pagos por Nequi, Bre-B o Bancolombia. ¿Hablamos?";
      break;

    case "hero_simulator":
      text = `Hola Webify 👋 Acabo de probar el simulador en vivo del Hero (${intent.itemsSummary} | Total: ${intent.totalCOP}) y quiero un catálogo interactivo que envíe pedidos así de estructurados al WhatsApp de mi negocio.`;
      break;

    case "demo_niche":
      text = `Hola Webify 👋 Estuve probando la demo de *${intent.demoTitle}* (${intent.subdomain} - ${intent.brandName}) y quiero una web así para mi negocio.\n\nMe encantó cómo genera el ticket en WhatsApp:\n"${intent.simulatedTicket}"\n\n¿Qué paquete me recomiendan y cómo iniciamos con el 50%?`;
      break;

    case "package":
      text = `Hola Webify 👋 Quiero separar cupo para el paquete *${intent.packageName}* con precio de lanzamiento de *${intent.launchPrice}* (Precio regular: ${intent.regularPrice} | Entrega: ${intent.deliveryTime}).${
        intent.carePlanName
          ? `\n\nTambién me interesa sumar el plan de soporte mensual *${intent.carePlanName}*.`
          : ""
      }\n\n¿Me indican los pasos para iniciar con el primer 50%?`;
      break;

    case "care_plan":
      text = `Hola Webify 👋 Me interesa el plan de mantenimiento y administración mensual *${intent.planName}* (${intent.monthlyPrice} / mes) para delegar la actualización de precios, productos y soporte técnico de mi web.`;
      break;

    case "calculator_custom":
      text = `Hola Webify 👋 Hice mi cotización en su calculadora interactiva:\n• Giro de negocio: ${intent.businessType}\n• Paquete recomendado: *${intent.recommendedPackage}* (${intent.estimatedPrice})\n• Inicio con el 50%: *${intent.upfront50}*\n• Recaudo preferido: ${intent.paymentMethod}\n• Entrega estimada: ${intent.deliveryDays}\n• Soporte mensual: ${intent.carePlan}\n\nQuiero agendar o separar mi cupo de lanzamiento.`;
      break;

    case "footer_cupo":
      text =
        "Hola Webify 👋 Llegué al final de su página y quiero reclamar uno de los 5 cupos de lanzamiento del mes (modalidad 50% al iniciar / 50% contra entrega). ¿Están disponibles?";
      break;

    case "custom":
      text = intent.message;
      break;
  }

  return `https://wa.me/${WEBIFY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Formateador de Pesos Colombianos (COP) con punto de miles sin decimales
 */
export function formatCOP(value: number): string {
  return "$" + value.toLocaleString("es-CO", { maximumFractionDigits: 0 });
}
