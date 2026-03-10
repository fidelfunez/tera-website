import Link from "next/link";
import { WHATSAPP_URL } from "@/config/whatsapp";
import { siteConfig } from "@/config/site";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-[#060b16] via-navy to-navy pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:gap-0 md:items-stretch">
          <div className="flex flex-1 flex-col justify-center rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.75)] md:rounded-r-none md:border-r-0 md:p-10 md:text-left">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              ¿Listo para que tu negocio aparezca en Google?
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              La mayoría de nuestros clientes empiezan a ver más consultas y
              visitas en las primeras 4 semanas después de lanzar su sitio.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-tera-green px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-tera-green/50 transition hover:brightness-110"
              >
                Hablemos por WhatsApp
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/60">
              o escribinos a{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-medium text-white transition hover:text-electric-blue hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
          <div className="hidden md:block md:w-[45%] md:min-w-[320px] md:flex-shrink-0">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.75)] md:rounded-l-none md:border-l-0">
              <iframe
                src={siteConfig.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tera - Tegucigalpa, Honduras"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

