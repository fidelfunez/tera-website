"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/config/whatsapp";

const BUSINESS_TYPES = [
  "Hotel",
  "Airbnb",
  "Inmobiliaria",
  "Tienda Online",
  "Startup",
  "Restaurante",
  "Clínica",
  "Spa",
  "Consultoría",
  "Academia"
];

function TypewriterText({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => (timeout ? clearTimeout(timeout) : undefined);
  }, [wordIndex, charIndex, isDeleting, words]);

  const displayText = words[wordIndex]?.slice(0, charIndex) ?? "";

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-[#060b16] pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-electric-blue/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-tera-green/10 blur-3xl" />
      </div>

      <div className="container relative flex flex-col items-start gap-12 md:flex-row md:items-center">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            Páginas web modernas para negocios reales
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Tu negocio merece una página web que sí venda.
          </h1>

          {/* Ventanita: solo visible en móvil, entre h1 y p */}
          <div className="mx-auto w-full max-w-sm md:hidden">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                <span className="h-2 w-2 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-white/60">www.tu-negocio.com</span>
              </div>
              <div className="rounded-xl bg-navy/70 p-4">
                <div className="mb-4 h-6 w-24 rounded-full bg-white/10" />
                <div className="mb-6 space-y-2">
                  <div className="h-3 w-3/4 rounded-full bg-white/10" />
                  <div className="h-3 w-2/3 rounded-full bg-white/5" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl bg-gradient-to-br from-electric-blue/40 to-tera-green/30" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-5/6 rounded-full bg-white/5" />
                    <div className="h-3 w-2/3 rounded-full bg-white/5" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-9 w-32 rounded-full bg-tera-green/80" />
                  <div className="h-9 w-9 rounded-full bg-tera-green/60" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-balance text-sm text-white/70 md:text-base">
            Diseñamos páginas web modernas para negocios como el tuyo — rápidas,
            fáciles de usar y pensadas para atraer clientes, no complicaciones.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Link
              href="#paquetes"
              className="inline-flex items-center justify-center rounded-full bg-tera-green px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-tera-green/40 transition hover:brightness-110"
            >
              Ver paquetes
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              WhatsApp directo
            </Link>
          </div>

          <p className="text-xs text-white/50">
            Respondemos rápido, sin rodeos. La mayoría de las páginas del paquete 'Esencial' se entregan en menos de una semana.
          </p>
        </div>

        <div className="relative hidden w-full max-w-md md:block md:max-w-lg">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-white/60">
                www.tu-negocio.com
              </span>
            </div>
            <div className="rounded-xl bg-navy/70 p-4">
              <div className="mb-4 h-6 w-24 rounded-full bg-white/10" />
              <div className="mb-6 space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-white/10" />
                <div className="h-3 w-2/3 rounded-full bg-white/5" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 rounded-xl bg-gradient-to-br from-electric-blue/40 to-tera-green/30" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/5" />
                  <div className="h-3 w-2/3 rounded-full bg-white/5" />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="h-9 w-32 rounded-full bg-tera-green/80" />
                <div className="h-9 w-9 rounded-full bg-tera-green/60" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-6 hidden w-44 rounded-2xl border border-white/10 bg-navy/90 p-3 text-xs text-white/80 shadow-lg shadow-black/40 md:block">
            <p className="min-h-[1.25em] font-semibold">
              <TypewriterText words={BUSINESS_TYPES} />
            </p>
            <p className="text-[11px] text-tera-green">+35% más clientes</p>
            <p className="mt-1 text-[11px] text-white/60">
              Después de 4 semanas con su nuevo sitio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

