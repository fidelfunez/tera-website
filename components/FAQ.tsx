'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/faq";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-[#060b16] via-navy to-[#0f2744] pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-tera-green/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-tera-green/10 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Si todavía tenés dudas, probablemente estén aquí. Y si no, siempre
            nos podés escribir directo.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                className="border-b border-white/10 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span className="text-sm font-medium text-white/90 md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-white/60 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2 text-sm text-white/70">
                    {item.answer}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

