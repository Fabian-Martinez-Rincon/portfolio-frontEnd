import { projects } from "@/lib/projects";
import { testimonials } from "@/lib/testimonials";
import { HeroVisual } from "./_components/hero-visual";
import { ProjectPreview } from "./_components/project-preview";
import { Reveal } from "./_components/reveal";
import { StarRating } from "./_components/star-rating";
import { TechIcon } from "./_components/tech-icon";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M4 10h12m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CONTACT_EMAIL = "fabianmartinezrincon.123@gmail.com";

const stats = [
  { value: String(projects.length), label: "proyectos propios, de punta a punta" },
  { value: `${new Set(projects.flatMap((p) => p.stack)).size}+`, label: "tecnologías distintas en uso" },
  { value: "100%", label: "full-stack: front, back e infra" },
];

const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Entiendo el problema real detrás del pedido antes de escribir una línea de código.",
  },
  {
    step: "02",
    title: "Desarrollo",
    description: "Iteraciones cortas y demos frecuentes, con código pensado para mantenerse en el tiempo.",
  },
  {
    step: "03",
    title: "Entrega y soporte",
    description: "Deploy a producción y acompañamiento después del lanzamiento, no solo hasta el hand-off.",
  },
];

const services = [
  {
    title: "Aplicaciones web a medida",
    description: "Nada de plantillas genéricas: plataformas construidas desde cero para tu operación, pensadas para ser rápidas hoy y fáciles de mantener dentro de un año.",
    icon: (
      <path d="M8 4 3 12l5 8M16 4l5 8-5 8M13 3l-2 18" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Paneles y dashboards",
    description: "Tus datos, ordenados para que se entiendan de un vistazo — métricas y progreso adaptados a cómo trabaja realmente tu equipo, no al revés.",
    icon: (
      <path d="M4 20V10m7 10V4m7 16v-7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Integraciones con APIs",
    description: "Pagos con Mercado Pago, login social, redes sociales y cualquier servicio de terceros, conectados a tu app sin fricción.",
    icon: (
      <path
        d="M9 15 15 9m-4-3 1.4-1.4a4 4 0 1 1 5.7 5.7L16 12m-8 0-1.4 1.4a4 4 0 1 0 5.7 5.7L13.7 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Automatizaciones",
    description: "Ese trabajo repetitivo que nadie quiere hacer, resuelto una sola vez con un script o un bot que corre solo, para siempre.",
    icon: (
      <path
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const badgeGradients = [
  "from-blue-500 to-violet-500",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500",
  "from-fuchsia-500 to-pink-500",
];

export default function Home() {
  return (
    <div id="top">
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-(--brand) opacity-[0.12] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-32 right-0 h-64 w-64 rounded-full bg-(--accent) opacity-[0.10] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 lg:px-6 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--bg-elevated) px-3 py-1 text-xs font-medium text-(--ink-dim)">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--success) opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-(--success)" />
                  </span>
                  Disponible para nuevos proyectos
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-5 max-w-xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Construyo <span className="text-gradient">aplicaciones web a medida</span> para tu negocio
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-lg text-(--ink-dim)">
                  Full-stack: desde la idea hasta una app en producción. Estos son proyectos reales que armé de
                  punta a punta — así trabajo.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#proyectos"
                    className="group inline-flex items-center gap-1.5 rounded-(--radius) bg-(--brand) px-5 py-2.5 text-sm font-semibold text-(--brand-foreground) shadow-(--shadow) transition hover:-translate-y-0.5 hover:bg-(--brand-strong) hover:shadow-(--shadow-lg)"
                  >
                    Ver proyectos
                    <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex items-center rounded-(--radius) border border-(--line) px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-(--line-strong) hover:bg-(--bg-elevated)"
                  >
                    Contactarme
                  </a>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <dl className="mt-16 grid max-w-lg grid-cols-3 divide-x divide-(--line) border-t border-(--line) pt-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="px-5 first:pl-0">
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</dd>
                      <p className="mt-1 text-xs text-(--ink-faint)">{stat.label}</p>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={220} className="hidden lg:block">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="proyectos" className="border-t border-(--line) bg-(--bg-sunken) py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Proyectos</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">Aplicaciones que diseñé y construí de principio a fin.</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) shadow-(--shadow) transition duration-300 hover:-translate-y-1 hover:border-(--line-strong) hover:shadow-(--shadow-lg)">
                  <ProjectPreview id={project.id} gradient={badgeGradients[i % badgeGradients.length]} />

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-tight text-foreground">{project.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-(--brand)">{project.tagline}</p>

                    <p className="mt-4 text-sm text-(--ink-dim)">{project.description}</p>

                    {project.metric ? (
                      <div className="mt-4 inline-flex w-fit items-baseline gap-1.5 rounded-lg bg-(--brand)/10 px-3 py-1.5">
                        <span className="text-lg font-extrabold leading-none text-(--brand)">{project.metric.value}</span>
                        <span className="text-xs font-medium text-(--ink-dim)">{project.metric.label}</span>
                      </div>
                    ) : null}

                    <ul className="mt-4 space-y-1.5">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-(--ink-dim)">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand)" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-(--line) pt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-full border border-(--line) px-2.5 py-0.5 text-xs font-medium text-(--ink-faint)"
                        >
                          <TechIcon name={tech} className="h-3 w-3 shrink-0" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ PLACEHOLDER: testimonios inventados para previsualizar el diseño. Ver lib/testimonials.ts */}
      <section id="testimonios" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Lo que dicen</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">Clientes que confiaron el proyecto de punta a punta.</p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {testimonials
              .filter((t) => t.featured)
              .map((testimonial) => (
                <Reveal key={testimonial.name}>
                  <figure className="relative overflow-hidden rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) p-8 shadow-(--shadow) sm:p-10">
                    <div
                      className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-(--brand) opacity-[0.08] blur-3xl"
                      aria-hidden="true"
                    />
                    <svg viewBox="0 0 24 24" className="relative h-8 w-8 text-(--brand)/40" fill="currentColor" aria-hidden="true">
                      <path d="M7 7c-2.2 0-4 1.8-4 4v6h6v-6H6.2C6.6 9.5 8 8 10 7.6V5C8.2 5.2 7 5.9 7 7Zm10 0c-2.2 0-4 1.8-4 4v6h6v-6h-2.8c.4-1.5 1.8-3 3.8-3.4V5c-1.8.2-3 .9-3 2Z" />
                    </svg>
                    <StarRating rating={testimonial.rating} className="relative mt-4" />
                    <blockquote className="relative mt-4 max-w-2xl text-lg font-medium text-foreground sm:text-xl">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center gap-3">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-black text-white from-blue-500 to-violet-500"
                        aria-hidden="true"
                      >
                        {testimonial.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-(--ink-faint)">{testimonial.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {testimonials
                .filter((t) => !t.featured)
                .map((testimonial, i) => (
                  <Reveal key={testimonial.name} delay={i * 90}>
                    <figure className="flex h-full flex-col rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) p-6 shadow-(--shadow)">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="mt-3 flex-1 text-sm text-(--ink-dim)">{testimonial.quote}</blockquote>
                      <figcaption className="mt-5 flex items-center gap-3 border-t border-(--line) pt-4">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-black text-white ${badgeGradients[(i + 1) % badgeGradients.length]}`}
                          aria-hidden="true"
                        >
                          {testimonial.name.charAt(0)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-(--ink-faint)">{testimonial.role}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="como-trabajo" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Cómo trabajo</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">Un proceso simple, pensado para llegar a producción.</p>
          </Reveal>

          <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="pointer-events-none absolute inset-x-6 top-6 hidden h-px bg-(--line) sm:block" aria-hidden="true" />
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <div className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-(--brand) to-(--accent) text-base font-extrabold text-white shadow-(--shadow)">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-(--ink-dim)">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t border-(--line) bg-(--bg-sunken) py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Servicios</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">En qué te puedo ayudar.</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <div className="group flex gap-4 rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) p-5 shadow-(--shadow) transition duration-300 hover:-translate-y-1 hover:border-(--line-strong) hover:shadow-(--shadow-lg)">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-(--brand)/10 text-(--brand) transition duration-300 group-hover:bg-(--brand) group-hover:text-(--brand-foreground)">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{service.title}</h3>
                    <p className="mt-1.5 text-sm text-(--ink-dim)">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) px-6 py-14 text-center shadow-(--shadow) sm:px-12">
              <div
                className="pointer-events-none absolute -top-16 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-(--brand) opacity-[0.10] blur-3xl"
                aria-hidden="true"
              />
              <span
                className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-(--brand) to-(--accent) text-white shadow-(--shadow)"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h2 className="relative mt-5 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="relative mx-auto mt-2 max-w-md text-(--ink-dim)">
                Contame qué necesitás y vemos cómo lo armamos.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group relative mt-6 inline-flex items-center gap-1.5 rounded-(--radius) bg-(--brand) px-6 py-3 text-sm font-semibold text-(--brand-foreground) shadow-(--shadow) transition hover:-translate-y-0.5 hover:bg-(--brand-strong) hover:shadow-(--shadow-lg)"
              >
                Escribime a {CONTACT_EMAIL}
                <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
