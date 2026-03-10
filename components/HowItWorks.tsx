"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "1",
    title: "Nos contactás",
    description:
      "Escribinos por WhatsApp o email. Nos contás sobre tu negocio, tus servicios y qué querés lograr. Si tenés logo y fotos, excelente; si no, te ayudamos a organizar todo."
  },
  {
    icon: Palette,
    num: "2",
    title: "Diseñamos",
    description:
      "Armamos el diseño según tu negocio y te lo mostramos antes de publicar. Una ronda de revisiones incluida para ajustar textos, colores y secciones hasta que te sientas cómodo."
  },
  {
    icon: Rocket,
    num: "3",
    title: "Lanzamos",
    description:
      "Publicamos tu sitio, lo conectamos con Google My Business y WhatsApp y te explicamos cómo aprovecharlos. Quedás con todo listo para que los clientes te encuentren."
  }
];

export function HowItWorks() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section
      id="como-funciona"
      className="bg-[#060b16] pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            ¿Cómo trabajamos en Tera?
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Un proceso claro, sin tecnicismos. Vos hablás, nosotros lo traducimos
            a una página que funcione.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div ref={timelineRef} className="relative mt-12 md:mt-16">
          {/* Connecting line - visible on md+ */}
          <div
            className="absolute left-8 right-8 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent md:block"
            aria-hidden
          />

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-1 flex-col items-center rounded-2xl border border-transparent p-4 transition hover:-translate-y-1 hover:border-electric-blue/40 hover:bg-navy/40 md:max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                {/* Node: number in circle */}
                <motion.div
                  className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-electric-blue bg-[#060b16] text-lg font-bold text-electric-blue shadow-[0_0_20px_rgba(37,99,168,0.3)]"
                  animate={
                    isInView
                      ? { scale: [1, 1.2, 1] }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.6,
                    ease: "easeInOut"
                  }}
                >
                  {step.num}
                </motion.div>

                {/* Content below node */}
                <div className="mt-6 flex flex-col items-center text-center">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric-blue/20 text-electric-blue">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
