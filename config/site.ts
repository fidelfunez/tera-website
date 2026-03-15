export const siteConfig = {
  name: "Tera",
  tagline: "Tu presencia digital, sin complicaciones.",
  description:
    "Creamos páginas web profesionales para pequeñas y medianas empresas en Honduras y Latinoamérica. Desde $299. Incluye SEO, Google My Business y WhatsApp.",
  url: "https://teralatam.co",
  locale: "es_HN",
  ogImage: "/tera-logo.webp",
  navLinks: [
    { href: "#paquetes", label: "Paquetes" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#por-que-tera", label: "Por qué Tera" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" }
  ],
  contactEmail: "hola@teralatam.co",
  /** Redes sociales - actualizá con las URLs reales */
  social: {
    facebook: "https://www.facebook.com/teralatam.co",
    instagram: "https://www.instagram.com/teralatam/"
  },
  /** Social proof para WhyTera - actualizá el número cuando tengas clientes reales */
  socialProof: "+50 negocios en Honduras y LATAM ya confían en nosotros",
  /** Review/testimonial para WhyTera */
  testimonial: {
    quote:
      "Tera nos armó la página en menos de tres semanas. Ahora mandamos a nuestros clientes a nuestra propia página y siempre me dicen lo bella que está. 100% recomendado.",
    author: "Carolina Cartagena, Fundadora",
    companyName: "Roatán Luxury Homes",
    companyUrl: "https://www.roatan-luxury-homes.com",
    /** URL de la foto del cliente (ej: /testimonial-photo.jpg) - null = placeholder */
    imageUrl: "/carolina-testimonial.webp"
  },
  /** Google Maps embed - Ventu Life Center, Tegucigalpa */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.293933876542!2d-87.23013742468278!3d14.059812486364892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f976a63220f33%3A0xecbbf7ecdbde7ce7!2sVentu%20Life%20Center!5e0!3m2!1sen!2sus!4v1773119557510!5m2!1sen!2sus"
};

export type SiteConfig = typeof siteConfig;

