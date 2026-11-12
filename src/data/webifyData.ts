export interface HeroProduct {
  id: string;
  name: string;
  category: string;
  variants: { label: string; price: number }[];
  stock: string;
}

export const HERO_SIMULATOR_PRODUCTS: HeroProduct[] = [
  {
    id: "khamrah",
    name: "Khamrah Lattafa EDP",
    category: "Perfumería Árabe",
    variants: [
      { label: "Decant 5ml", price: 28000 },
      { label: "Decant 10ml", price: 45000 },
      { label: "Frasco 100ml", price: 185000 },
    ],
    stock: "Envío hoy",
  },
  {
    id: "yara",
    name: "Yara Lattafa EDP",
    category: "Gourmand",
    variants: [
      { label: "Decant 10ml", price: 42000 },
      { label: "Frasco 100ml", price: 165000 },
    ],
    stock: "4 disponibles",
  },
  {
    id: "asad",
    name: "Asad Bourbon",
    category: "Especiado",
    variants: [
      { label: "Decant 10ml", price: 40000 },
      { label: "Frasco 100ml", price: 155000 },
    ],
    stock: "En stock",
  },
];

export interface ContrastPoint {
  id: string;
  painTitle: string;
  painDescription: string;
  solutionTitle: string;
  solutionDescription: string;
}

export const CONTRAST_MATRIX_POINTS: ContrastPoint[] = [
  {
    id: "pricing-dm",
    painTitle: 'Responder "¿precio?" 50 veces al día',
    painDescription:
      "Pierdes horas reenviando las mismas fotos sueltas, audios y PDFs pesados que nadie abre en el celular.",
    solutionTitle: "Catálogo con precios y stock claros 24/7",
    solutionDescription:
      "Tu cliente filtra por categoría, elige talla, mililitros o adiciones y consulta disponibilidad sin esperar respuesta en el chat.",
  },
  {
    id: "cold-leads",
    painTitle: "Clientes que se enfrían esperando respuesta",
    painDescription:
      "Si tardas 25 minutos en contestar un mensaje directo a las 9:30 PM, el comprador cierra el chat y busca otra cuenta.",
    solutionTitle:
      "Pedidos que llegan ya liquidados al WhatsApp listos para cobrar por Nequi/Bre-B",
    solutionDescription:
      "Recibes el resumen con productos, cantidades, ciudad de envío y total exacto en pesos para confirmar el pago en segundos.",
  },
  {
    id: "informal-brand",
    painTitle: "Fotos perdidas en el chat e imagen informal frente a la competencia",
    painDescription:
      "Vender solo por historias destacadas genera dudas cuando un cliente nuevo de otra ciudad debe transferirte por adelantado.",
    solutionTitle:
      "Posicionamiento en Google y marca que transmite confianza inmediata",
    solutionDescription:
      "Dominio propio (.com o .co), certificado SSL y velocidad de carga inferior a un segundo desde el perfil de Instagram.",
  },
  {
    id: "commissions",
    painTitle: "Comisiones altas en apps o cotizaciones millonarias de agencias",
    painDescription:
      "Las plataformas de domicilios retienen hasta el 28% de cada pedido y las agencias tradicionales tardan meses en entregar.",
    solutionTitle: "0% comisiones por venta y entrega en días hábiles",
    solutionDescription:
      "El 100% del dinero entra directo a tu Nequi, llave Bre-B, Bancolombia o pasarela Wompi y Bold sin intermediarios.",
  },
];

export type DemoNicheId =
  | "perfumeria"
  | "belleza"
  | "restaurante"
  | "moda"
  | "servicios";

export interface NicheDemoConfig {
  id: DemoNicheId;
  tabLabel: string;
  title: string;
  subdomain: string;
  brandName: string;
  brandTagline: string;
  recommendedPackage: string;
  features: string[];
  defaultTicket: string;
}

export const NICHE_DEMOS: NicheDemoConfig[] = [
  {
    id: "perfumeria",
    tabLabel: "Perfumería & Decants",
    title: "Perfumería & Decants",
    subdomain: "perfumeria.webify.co",
    brandName: "Aura Parfums",
    brandTagline: "Perfumería árabe y de diseñador con envíos nacionales",
    recommendedPackage: "Webify Catalog ($1.190.000 COP)",
    features: [
      "Filtro por familia olfativa (Árabes, Diseñador, Dulces, Cítricos)",
      "Selector dinámico de presentación (Decant 5ml, 10ml o Frasco 100ml) con precio actualizado al instante",
      "Carrito a WhatsApp con suma automática del pedido en pesos colombianos",
    ],
    defaultTicket:
      "Hola Aura Parfums, pedido web: • 1x Khamrah Lattafa (Decant 10ml) $45.000 • 1x Yara EDP (100ml) $165.000 | Total: $210.000",
  },
  {
    id: "belleza",
    tabLabel: "Barberías & Salones",
    title: "Barberías & Salones de Belleza",
    subdomain: "belleza.webify.co",
    brandName: "Velvet & Blade Studio",
    brandTagline: "Agenda de citas para corte, barba, colorimetría y tratamientos",
    recommendedPackage: "Webify Pro ($890.000 COP)",
    features: [
      "Agendamiento en 3 toques desde el enlace de Instagram sin instalar aplicaciones",
      "Catálogo de servicios con tiempos y precios transparentes (Corte, Barba, Balayage, Hidratación)",
      "Elección de profesional y bloque horario con confirmación directa en WhatsApp",
    ],
    defaultTicket:
      "Hola Velvet Studio, nueva reserva: • Servicio: Diseño de Color + Hidratación • Especialista: Valeria • Sábado 10:00 AM",
  },
  {
    id: "restaurante",
    tabLabel: "Restaurantes & Gastro",
    title: "Restaurantes & Gastro",
    subdomain: "restaurante.webify.co",
    brandName: "Brasa & Barrio",
    brandTagline: "Menú digital interactivo con cálculo de domicilio por zona",
    recommendedPackage: "Webify Catalog ($1.190.000 COP)",
    features: [
      "Menú digital interactivo diseñado para pedir desde el celular en segundos",
      "Selector de adiciones, término de carne y notas para cocina",
      "Cálculo automático de domicilio según el barrio sin pagar comisiones a aplicaciones",
    ],
    defaultTicket:
      "Hola Brasa & Barrio, Pedido #108: • 2x Burger Artesanal (+Tocineta) $56.000 • Domicilio Zona Norte $5.000 | Total Nequi: $61.000",
  },
  {
    id: "moda",
    tabLabel: "Moda & Calzado",
    title: "Moda & Calzado",
    subdomain: "moda.webify.co",
    brandName: "Kulture Wear",
    brandTagline: "Catálogo de ropa y calzado con stock por talla y envíos nacionales",
    recommendedPackage: "Webify Catalog ($1.190.000 COP)",
    features: [
      "Selector de tallas (S, M, L, XL) y colores en tiempo real",
      "Etiquetas de últimas unidades disponibles por referencia",
      "Tabla de medidas desplegable en centímetros para reducir cambios",
    ],
    defaultTicket:
      "Hola Kulture Wear, quiero separar: • 1x Hoodie Heavy Boxy Fit (Talla L - Negro) $125.000 • Envío a Medellín",
  },
  {
    id: "servicios",
    tabLabel: "Profesionales & Consultorios",
    title: "Profesionales & Consultorios",
    subdomain: "servicios.webify.co",
    brandName: "Vega & Asociados",
    brandTagline: "Consultorio especializado con agenda prioritaria y casos de éxito",
    recommendedPackage: "Webify Pro ($890.000 COP)",
    features: [
      "Arquitectura de alta autoridad con trayectoria, especialidades y ubicación",
      "Sección de casos de éxito y preguntas frecuentes previas a la consulta",
      "Filtro de agendamiento de consulta presencial o virtual hacia WhatsApp",
    ],
    defaultTicket:
      "Hola Dr. Vega, vi su web y solicito agendar una consulta prioritaria esta semana",
  },
];

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  highlighted?: boolean;
  colombiaMedianLabel: string;
  colombiaMedianPrice: number;
  regularPrice: number;
  launchPrice: number;
  deliveryTime: string;
  features: string[];
  paymentNote: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "webify-go",
    name: "Webify Go",
    subtitle: "Landing Page de Conversión",
    colombiaMedianLabel: "Mediana Colombia",
    colombiaMedianPrice: 729500,
    regularPrice: 580000,
    launchPrice: 450000,
    deliveryTime: "4 a 5 días hábiles",
    features: [
      "1 página de alta velocidad",
      "Presentación de servicios o top productos",
      "Botón y formulario directo a WhatsApp",
      "Ubicación en Google Maps",
      "Optimización móvil para tráfico de Instagram",
      "Certificado de seguridad SSL",
    ],
    paymentNote: "Inicias con $225.000 (50%) y pagas $225.000 contra entrega.",
  },
  {
    id: "webify-pro",
    name: "Webify Pro",
    subtitle: "Web Informativa / Corporativa",
    colombiaMedianLabel: "Mediana Colombia",
    colombiaMedianPrice: 1490000,
    regularPrice: 1150000,
    launchPrice: 890000,
    deliveryTime: "6 a 8 días hábiles",
    features: [
      "Hasta 4 secciones completas",
      "Sistema de cotización o agendamiento",
      "Galería de casos de éxito o portafolio",
      "SEO local básico para Google Colombia",
      "Redacción comercial de textos incluida",
      "2 rondas de ajustes antes de publicar",
    ],
    paymentNote: "Inicias con $445.000 (50%) y pagas $445.000 contra entrega.",
  },
  {
    id: "webify-catalog",
    name: "Webify Catalog",
    subtitle: "Catálogo Interactivo + Carrito WhatsApp",
    badge: "MÁS ELEGIDO POR COMERCIOS",
    highlighted: true,
    colombiaMedianLabel: "Referencia Mercado",
    colombiaMedianPrice: 2200000,
    regularPrice: 1490000,
    launchPrice: 1190000,
    deliveryTime: "7 a 10 días hábiles",
    features: [
      "Catálogo de hasta 40 productos iniciales",
      "Buscador en vivo y filtros por categoría",
      "Selector de variantes (mililitros, tallas, adiciones)",
      "Carrito que arma el pedido completo en WhatsApp",
      "Cálculo de domicilio o envío por ciudad",
      "0% comisiones sobre tus ventas",
    ],
    paymentNote: "Inicias con $595.000 (50%) y pagas $595.000 contra entrega.",
  },
  {
    id: "webify-commerce",
    name: "Webify Commerce",
    subtitle: "Tienda Virtual Full Pasarela",
    colombiaMedianLabel: "Mediana Colombia",
    colombiaMedianPrice: 3500000,
    regularPrice: 2650000,
    launchPrice: 2150000,
    deliveryTime: "12 a 15 días hábiles",
    features: [
      "Pasarela integrada (Wompi, Bold o MercadoPago)",
      "Cobro con PSE, Nequi, Bre-B y tarjetas",
      "Panel de inventario y control de pedidos",
      "Cálculo de envíos por ciudad en Colombia",
      "Opción de compra por pasarela o por WhatsApp",
      "Capacitación de uso para tu equipo",
    ],
    paymentNote: "Inicias con $1.075.000 (50%) y pagas $1.075.000 contra entrega.",
  },
];

export interface CarePlan {
  id: string;
  name: string;
  monthlyPrice: number;
  badge?: string;
  highlighted?: boolean;
  features: string[];
}

export const WEBIFY_CARE_PLANS: CarePlan[] = [
  {
    id: "custodia",
    name: "Plan Custodia",
    monthlyPrice: 49000,
    features: [
      "Hosting de alta velocidad",
      "Monitoreo 24/7 y certificado SSL activo",
      "Copias de seguridad semanales",
      "1 ajuste menor de texto o imagen al mes",
    ],
  },
  {
    id: "impulso",
    name: "Plan Impulso",
    monthlyPrice: 89000,
    badge: "Ideal para comercios",
    highlighted: true,
    features: [
      "Todo lo incluido en el Plan Custodia",
      "Hasta 4 actualizaciones al mes por WhatsApp",
      "Cambios de precios y subida de hasta 10 productos nuevos",
      "Actualización de banners promocionales",
    ],
  },
  {
    id: "socio-digital",
    name: "Plan Socio Digital",
    monthlyPrice: 160000,
    features: [
      "Todo lo incluido en el Plan Impulso",
      "Soporte prioritario por WhatsApp",
      "Optimización SEO local mensual en Google",
      "1 sección promocional por temporada comercial (Amor y Amistad, Día de la Madre, Black Friday)",
    ],
  },
];

export interface TechStackItem {
  name: string;
  metric: string;
  description: string;
}

export const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    name: "Next.js",
    metric: "< 0.8s carga",
    description:
      "Tu página abre al instante desde el navegador interno de Instagram y WhatsApp con datos móviles en Colombia.",
  },
  {
    name: "Tailwind CSS",
    metric: "Mobile-First",
    description:
      "Interfaz ligera sin plantillas pesadas, con botones táctiles de mínimo 48px y lectura clara en pantallas pequeñas.",
  },
  {
    name: "Supabase",
    metric: "Tiempo real",
    description:
      "Base de datos segura para sincronizar catálogo, precios en pesos, tallas y disponibilidad sin caídas.",
  },
  {
    name: "Cloudflare",
    metric: "99.99% activo",
    description:
      "Red global con protección SSL bancaria y alta velocidad en Bogotá, Medellín, Cali, Barranquilla y todo el país.",
  },
];

export interface CommercialRule {
  rule: string;
  condition: string;
  detail: string;
}

export const COMMERCIAL_RULES: CommercialRule[] = [
  {
    rule: "Forma de pago",
    condition: "50% para iniciar y 50% antes de publicar",
    detail:
      "Inicias tu proyecto con la primera mitad por Nequi, Bre-B, Bancolombia o tarjeta, y pagas el 50% restante cuando revises tu página funcionando desde tu celular.",
  },
  {
    rule: "Propiedad del Dominio",
    condition: "100% a nombre del cliente desde el día uno",
    detail:
      "Registramos tu dominio (.com o .co) directamente a tu nombre. Sin secuestro de marca, sin cláusulas de permanencia ni cobros sorpresa de renovación.",
  },
  {
    rule: "Garantía",
    condition: "30 días de garantía técnica sobre cualquier error de desarrollo",
    detail:
      "Acompañamos la salida en vivo de tu página durante 30 días calendario cubriendo cualquier ajuste técnico o de configuración sin costo.",
  },
  {
    rule: "Apoyo con material",
    condition: "Redacción comercial y optimización de fotos actuales sin costo extra",
    detail:
      "Si no tienes textos comerciales listos, nuestro equipo los redacta y optimiza las fotos que ya tienes en tu Instagram para no frenar la entrega.",
  },
];

export interface ProductionStep {
  stepNumber: string;
  dayRange: string;
  title: string;
  description: string;
}

export const PRODUCTION_STEPS: ProductionStep[] = [
  {
    stepNumber: "01",
    dayRange: "Día 1",
    title: "Eliges tu paquete y separas con el 50%",
    description:
      "Definimos por WhatsApp el alcance de tu página, reservamos uno de los 5 cupos del mes y aseguramos tu dominio.",
  },
  {
    stepNumber: "02",
    dayRange: "Días 1 a 2",
    title: "Envías logo, fotos y lista de precios",
    description:
      "Nos compartes tu lista de precios o tu perfil de Instagram. Estructuramos tus categorías y redactamos los textos comerciales.",
  },
  {
    stepNumber: "03",
    dayRange: "Días 3 a 7",
    title: "Construimos tu sistema en días",
    description:
      "Programamos tu página en Next.js, conectamos el carrito a WhatsApp o la pasarela Wompi/Bold y probamos todo en móvil.",
  },
  {
    stepNumber: "04",
    dayRange: "Entrega",
    title: "Revisas en tu celular, pagas el 50% restante y publicamos",
    description:
      "Haces un pedido de prueba desde tu teléfono, aplicamos tus ajustes finales, recibimos el segundo 50% y salimos en vivo.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "mensualidades",
    question: "¿Estoy obligado a pagar una mensualidad para mantener mi página web?",
    answer:
      "No. El pago de tu paquete (Go, Pro, Catalog o Commerce) es único. Los planes mensuales de Webify Care son opcionales por si prefieres que nuestro equipo actualice tus precios, suba productos y administre el hosting por ti.",
  },
  {
    id: "dominio-propiedad",
    question: "¿El dominio (.com o .co) y la página quedan a mi nombre?",
    answer:
      "Sí. Desde el día uno el dominio queda registrado a tu nombre y te entregamos las credenciales completas para que tengas control total sobre tu marca.",
  },
  {
    id: "sin-fotos-pro",
    question: "No tengo fotos profesionales ni textos redactados, ¿puedo empezar así?",
    answer:
      "Sí. Tomamos las fotos que ya usas en tu Instagram o tomadas con celular, las optimizamos para web y redactamos todos los textos comerciales de tu página sin costo adicional.",
  },
  {
    id: "escalar-ecommerce",
    question: "Si empiezo con un catálogo a WhatsApp, ¿puedo pasar después a tienda con pasarela de pagos?",
    answer:
      "Sí. Al estar construida en Next.js de forma modular, puedes iniciar con Webify Catalog cobrando por Nequi o Bre-B en WhatsApp, y más adelante activar la pasarela automática (Wompi, Bold o MercadoPago) pagando únicamente la diferencia.",
  },
  {
    id: "comisiones-ventas",
    question: "¿Webify cobra comisión por las ventas que reciba mi página?",
    answer:
      "0% comisión. En los catálogos con carrito a WhatsApp, el dinero va completo a tu Nequi, llave Bre-B o cuenta Bancolombia. En tiendas con pasarela solo aplican las tarifas bancarias de Wompi o Bold.",
  },
];
