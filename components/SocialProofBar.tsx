"use client";

import { motion } from "framer-motion";

const businesses = [
  "Estudios",
  "Blogs",
  "Startups",
  "Hoteles",
  "Bancos",
  "Inmobiliarias",
  "Clínicas",
  "Concesionarias",
  "Restaurantes",
  "Ferreterías",
  "Salones de belleza",
  "Consultores",
  "Tiendas en línea",
  "Bufetes Jurídicos",
];

export function SocialProofBar() {
  return (
    <section className="border-y border-white/5 bg-[#060b16] py-4">
      <div className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60 md:text-[11px]">
          Empresas en Honduras, Guatemala, El Salvador y Costa Rica confían en
          Tera
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex min-w-full gap-6 text-xs text-white/60"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 24,
              ease: "linear"
            }}
          >
            {[...businesses, ...businesses].map((item, index) => (
              <span key={`${item}-${index}`} className="whitespace-nowrap">
                {item}
                {index !== businesses.length * 2 - 1 && (
                  <span className="mx-3 text-white/20">·</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

