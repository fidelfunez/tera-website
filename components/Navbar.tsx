import Link from "next/link";
import { siteConfig } from "../config/site";
import { WHATSAPP_URL } from "../config/whatsapp";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-navy/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <div className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1">
            <img
              src="/tera-logo-transparent.webp"
              alt={siteConfig.name}
              className="h-full w-full scale-125 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight md:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-white/60 md:inline">
              {siteConfig.tagline}
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white transition hover:opacity-90"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-tera-green px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-tera-green/40 transition hover:brightness-110 md:px-5 md:py-2.5 md:text-sm"
          >
            WhatsApp
          </Link>
        </div>
      </nav>
    </header>
  );
}

