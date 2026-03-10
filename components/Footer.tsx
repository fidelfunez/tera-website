import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-6 text-xs text-white/60">
      <div className="container flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 p-1.5">
            <img
              src="/tera-logo-transparent.webp"
              alt={siteConfig.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white/90">
              {siteConfig.name}
            </span>
            <span className="text-[11px]">{siteConfig.tagline}</span>
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

