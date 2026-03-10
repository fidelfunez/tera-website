type PackageType = "starter" | "professional" | "complete" | "monthly";

export interface Package {
  id: PackageType;
  title: string;
  subtitle?: string;
  price?: number;
  priceDisplay?: string;
  currency: string;
  billingPeriod?: string;
  description: string;
  features?: string[];
  examples?: string[];
  deliveryTime?: string;
  badge?: string;
}

export const packages: Package[] = [
  {
    id: "starter",
    title: "Esencial",
    price: 299,
    currency: "USD",
    description:
      "Ideal si necesitás estar en Google y verte profesional lo antes posible.",
    features: [
      "Página web profesional con diseño moderno y versión móvil",
      "Botón de WhatsApp integrado y siempre visible",
      "SEO básico para aparecer en Google",
      "Configuración de Google My Business",
      "Integración con Google Maps (si tiene tienda física)",
    ],
    deliveryTime: "5–7 días hábiles"
  },
  {
    id: "professional",
    title: "Profesional",
    price: 699,
    currency: "USD",
    description:
      "Para negocios que quieren contar mejor su historia y convertir más visitas en clientes.",
    features: [
      "Todo lo del plan Esencial",
      "Hasta 6 páginas (Inicio, Servicios, Nosotros, Contacto, etc.)",
      "Optimización PageSpeed para cargar rápido en móvil",
      "Auditoría con Google Lighthouse",
      "Formularios de contacto personalizados",
    ],
    deliveryTime: "10–18 días hábiles",
    badge: "MÁS POPULAR"
  },
  {
    id: "complete",
    title: "Completo",
    priceDisplay: "Desde $1,099",
    currency: "USD",
    description:
      "Para proyectos personalizados y funcionalidades avanzadas según tu negocio.",
    examples: [
      "Profesional ($699) + Sistema de reservas → $1,099",
      "Profesional ($699) + Pagos en línea → $1,199",
      "Profesional ($699) + Base de datos → $1,499",
      "Profesional ($699) + Tienda en línea → $1,699",
      "Profesional ($699) + Integración CRM → $1,699",
    ],
    deliveryTime: "20–30 días hábiles"
  }
];

export const monthlyManagement: Package = {
  id: "monthly",
  title: "Gestión Mensual",
  price: 30,
  currency: "USD",
  billingPeriod: "mes",
  description:
    "Nos encargamos de que tu sitio se mantenga seguro, actualizado y funcionando bien.",
  features: [
    "Hosting gratis",
    "Monitoreo de seguridad y uptime",
    "Hasta 2 actualizaciones de contenido al mes",
    "Soporte prioritario por email y WhatsApp en menos de 48 horas",
    "Informe mensual básico de rendimiento (visitas, páginas más vistas, etc.)"
  ]
};
