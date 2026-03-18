import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { siteConfig } from "../../config/site";

export const metadata = {
  title: "Política de Privacidad | Tera",
  description:
    "Política de privacidad de Tera. Cómo recopilamos, usamos y protegemos tu información cuando visitas teralatam.co.",
  alternates: {
    canonical: `${siteConfig.url}/privacidad`
  }
};

export default function PrivacidadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-navy">
      <Navbar />
      <div className="container py-16 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-white/70 transition hover:text-white"
        >
          ← Volver al inicio
        </Link>

        <article className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Política de Privacidad
          </h1>
          <p className="text-sm text-white/60">
            Última actualización: {new Date().toLocaleDateString("es-HN")}
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white">
                1. Información que recopilamos
              </h2>
              <p>
                Cuando visitás {siteConfig.url}, recopilamos información de forma
                automática mediante Google Analytics, incluyendo:
              </p>
              <ul className="list-disc pl-6">
                <li>Dirección IP (anonimizada)</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Origen del tráfico (ej. Google, búsqueda directa)</li>
              </ul>
              <p>
                Si nos contactás por WhatsApp o email, también recopilamos el
                contenido de tu mensaje y tu información de contacto para
                responder y gestionar tu consulta.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                2. Uso de la información
              </h2>
              <p>Usamos la información recopilada para:</p>
              <ul className="list-disc pl-6">
                <li>Entender cómo los visitantes usan nuestro sitio</li>
                <li>Mejorar el contenido y la experiencia</li>
                <li>Responder a consultas y ofrecer nuestros servicios</li>
                <li>Enviar cotizaciones o información solicitada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                3. Cookies y tecnologías similares
              </h2>
              <p>
                Utilizamos Google Analytics, que emplea cookies para analizar el
                tráfico del sitio. No vendemos ni compartimos esta información
                con terceros con fines comerciales. Podés desactivar las cookies
                en la configuración de tu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                4. Compartir información
              </h2>
              <p>
                No vendemos ni alquilamos tu información personal. Solo
                compartimos datos con proveedores que nos ayudan a operar (ej.
                Google Analytics, Netlify para hosting) bajo sus propias políticas
                de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                5. Tus derechos
              </h2>
              <p>
                Podés solicitar acceso, corrección o eliminación de tus datos
                contactándonos a{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">
                6. Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta política ocasionalmente. La fecha de
                última actualización se indica al inicio de la página.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">7. Contacto</h2>
              <p>
                Para preguntas sobre esta política:{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
