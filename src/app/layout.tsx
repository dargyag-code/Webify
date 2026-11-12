import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webify Colombia — Catálogos con Pedido a WhatsApp y Tiendas Virtuales",
  description:
    "Tu catálogo de Instagram convertido en una página web que recibe pedidos armados en WhatsApp y cobra por Nequi, Bre-B o Wompi. Entrega en 5 días hábiles en toda Colombia.",
  keywords: [
    "páginas web Colombia",
    "catálogo virtual con carrito WhatsApp",
    "diseño web negocios Colombia",
    "tiendas virtuales Wompi Bold Nequi",
    "Webify Colombia",
  ],
  openGraph: {
    title: "Webify Colombia — Tu catálogo de Instagram que cobra por WhatsApp",
    description:
      "El cliente elige talla, mililitros o adiciones en tu web y te envía el pedido ya sumado a WhatsApp. Entregas desde 5 días hábiles, pago 50% al iniciar y 50% al entregar.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <head>
        <meta name="theme-color" content="#626cd4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Mali:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f5f1e4] text-[#2c2e2a] font-sans antialiased selection:bg-[#626cd4]/20 selection:text-[#2c2e2a]">
        {children}
      </body>
    </html>
  );
}
