import "./globals.css";
import Script from "next/script";
import { siteConfig } from "../config/site";

const GA_MEASUREMENT_ID = "G-0YVW95Z8SV";

export const metadata = {
  title: "Tera | Páginas web modernas para negocios y profesionales en Honduras y LATAM",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/favicon_io/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  description:
    "Creamos páginas web profesionales para pequeñas y medianas empresas en Honduras y Latinoamérica. Desde $299. Incluye SEO, Google My Business y WhatsApp.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Tera | Páginas web modernas para negocios y profesionales en Honduras y LATAM",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Tera - Agencia de páginas web modernas para negocios en LATAM"
      }
    ],
    locale: siteConfig.locale.replace("_", "-"),
    type: "website"
  },
  alternates: {
    canonical: siteConfig.url
  },
  twitter: {
    card: "summary_large_image",
    title: "Tera | Páginas web modernas para negocios y profesionales en Honduras y LATAM",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tegucigalpa",
      addressRegion: "Francisco Morazán",
      addressCountry: "HN"
    },
    areaServed: ["Honduras", "Guatemala", "El Salvador", "Costa Rica", "Latinoamérica"],
    email: siteConfig.contactEmail
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Necesito saber de tecnología?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nosotros nos encargamos de toda la parte técnica. Solo necesitamos entender tu negocio, tus servicios y qué tipo de clientes querés atraer."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué necesito para empezar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Idealmente tu logo, dominio web, fotos, y textos. Si no tenés todo, no pasa nada: te ayudamos a organizar la información y a escribir el contenido."
        }
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El plan Esencial se entrega normalmente en 5–7 días hábiles. El Profesional en 10–18 días, y el Completo en 20–30 días, dependiendo de cuánta información tengamos desde el inicio."
        }
      },
      {
        "@type": "Question",
        name: "¿Puedo cancelar el plan mensual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, cuando quieras. No hay contratos largos ni letras pequeñas. Solo nos avisás y programamos la baja del servicio."
        }
      },
      {
        "@type": "Question",
        name: "¿Trabajan fuera de Honduras?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Trabajamos con clientes en toda Latinoamérica. Coordinamos todo por videollamada, WhatsApp y correo."
        }
      },
      {
        "@type": "Question",
        name: "¿A qué tipo de negocios les sirven?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A todos. Trabajamos con empresas de cualquier rubro: restaurantes, clínicas, servicios profesionales, comercios, constructoras y más. Tenemos la experiencia para adaptarnos a cada industria y crear soluciones que funcionen para tu negocio en particular."
        }
      },
      {
        "@type": "Question",
        name: "¿Aceptan pagos en lempiras?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, podemos buscar la forma que sea más cómoda para vos. Escríbenos y vemos la mejor opción según tu país."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no me gusta el diseño?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluimos al menos 1 ronda de revisiones para ajustar colores, secciones y contenidos hasta que te sintás cómodo con el resultado."
        }
      },
      {
        "@type": "Question",
        name: "¿Necesito hosting propio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Todos nuestros clientes reciben hosting gratis. Lo único que se cotiza aparte es el dominio web según la extensión (.com, .hn, etc.)."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.name
    },
    author: {
      "@type": "Person",
      name: siteConfig.testimonial.author
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: siteConfig.testimonial.quote
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-navy font-sans text-white">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </body>
    </html>
  );
}

