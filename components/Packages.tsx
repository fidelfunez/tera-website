"use client";

import { motion } from "framer-motion";
import { packages, monthlyManagement } from "../config/packages";

export function Packages() {
  return (
    <section
      id="paquetes"
      className="bg-[#060b16] pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Paquetes pensados para negocios reales.
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Precios claros, sin letra pequeña. Elegí el plan que mejor se
            ajusta a tu negocio y al momento en el que estás.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {packages.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-2xl border border-white/10 bg-navy/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-electric-blue/60 hover:shadow-[0_20px_60px_rgba(37,99,168,0.45)] md:p-7 ${
                plan.id === "professional"
                  ? "border-electric-blue/70 bg-gradient-to-b from-electric-blue/15 via-navy/90 to-navy/90"
                  : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {plan.badge && (
                <div className="absolute left-1/2 -top-3 -translate-x-1/2 rounded-full bg-tera-green px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-tera-green/40">
                  {plan.badge}
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold">{plan.title}</h3>
                {plan.subtitle && (
                  <p className="mt-0.5 text-xs font-medium text-white/70">
                    {plan.subtitle}
                  </p>
                )}
                <p className="mt-1 text-xs text-white/60">{plan.description}</p>
              </div>

              <div className="mb-5 flex items-baseline gap-1">
                {plan.priceDisplay ? (
                  <span className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {plan.priceDisplay}
                  </span>
                ) : (
                  <>
                    <span className="text-3xl font-semibold tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="text-xs text-white/60">
                      {plan.billingPeriod
                        ? ` ${plan.currency} /${plan.billingPeriod}`
                        : `${plan.currency} (único pago)`}
                    </span>
                  </>
                )}
              </div>

              {plan.deliveryTime && (
                <p className="mb-4 text-xs text-tera-green">
                  Entrega estimada: {plan.deliveryTime}
                </p>
              )}

              {plan.examples ? (
                <>
                  <p className="mb-2 text-sm font-medium text-white/85">
                    Ejemplos de proyectos:
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-white/80">
                    {plan.examples.map((example) => (
                      <li key={example} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric-blue" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : plan.features ? (
                <ul className="mb-6 space-y-2 text-sm text-white/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric-blue" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-auto pt-2 text-xs text-white/40">
                * Precios en USD. Consultanos por planes y opciones de pago en tu moneda local.
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gestión Mensual - add-on opcional */}
        <motion.div
          className="mt-12 rounded-2xl border border-white/10 bg-navy/60 p-6 transition hover:-translate-y-1 hover:border-electric-blue/60 hover:shadow-[0_20px_60px_rgba(37,99,168,0.45)] md:mt-16 md:flex md:items-center md:justify-between md:gap-8 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="md:flex-1">
            <h3 className="text-lg font-semibold text-white">
              ¿Necesitás mantenimiento?
            </h3>
            <p className="mt-2 text-sm text-white/80">
            Nos encargamos que tu página tenga mantenimiento proactivo (segura, actualizada y funcionando bien)
            por tan solo ${monthlyManagement.price}/{monthlyManagement.billingPeriod}, independientemente del paquete que elijas. Incluye:
            </p>
            <ul className="mt-4 space-y-2 text-xs text-white/70">
              {monthlyManagement.features?.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-tera-green" />
                  <span>
                    {feature.split(/(Hosting gratis)/).map((part, i) =>
                      part === "Hosting gratis" ? (
                        <span key={i} className="text-tera-green">
                          Hosting gratis
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contacto"
            className="mt-6 inline-block rounded-lg bg-electric-blue px-5 py-2.5 text-sm font-medium text-white transition hover:bg-electric-blue/90 md:mt-0 md:flex-shrink-0"
          >
            Consultar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
