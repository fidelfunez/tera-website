import { siteConfig } from "../config/site";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-6 text-xs text-white/60">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-0.5">
              <img
                src="/tera-logo-transparent.webp"
                alt={siteConfig.name}
                className="h-full w-full scale-105 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-white/90">
                {siteConfig.name}
              </span>
              <span className="text-[11px]">{siteConfig.tagline}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#paquetes" className="text-white transition hover:opacity-90">
            Paquetes
          </a>
          <a href="#como-funciona" className="text-white transition hover:opacity-90">
            Cómo funciona
          </a>
          <a href="#faq" className="text-white transition hover:opacity-90">
            FAQ
          </a>
          <a href="#contacto" className="text-white transition hover:opacity-90">
            Contacto
          </a>
          <a href="/privacidad" className="text-white transition hover:opacity-90">
            Privacidad
          </a>
        </div>
        <div className="text-[11px] text-center md:text-right">
          <p>Hecho con 🤍 en Honduras 🇭🇳 para toda Latinoamérica</p>
          <p className="mt-1">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

