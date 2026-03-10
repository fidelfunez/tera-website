import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
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
      addressCountry: "HN"
    },
    areaServed: ["Honduras", "Guatemala", "El Salvador", "Costa Rica", "Latinoamérica"],
    email: siteConfig.contactEmail
  };

  return (
    <html lang="es" className={fontSans.variable}>
      <body className="min-h-screen bg-navy text-white">
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}

