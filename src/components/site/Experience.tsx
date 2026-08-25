import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    company: "WE3DS Company",
    role: "Senior Software Developer",
    period: "Jul 2024 — Present",
    place: "Tanta, Egypt",
    status: "Current",
    focus: "Enterprise property & brokerage platforms",
    stack: [".NET 8", "Clean Architecture", "SignalR", "Azure DevOps", "Redis"],
    points: [
      "Architected scalable .NET 8 microservices with Clean Architecture and DDD powering enterprise property listing and brokerage workflows.",
      "Led the move to multi-tenant architecture with secure data isolation and hierarchical role-based access control.",
      "Engineered real-time telemetry and integration layers with SignalR across 1,000+ IoT endpoints.",
      "Automated CI/CD with Azure DevOps and TFS, cutting deployment cycles and protecting configuration baselines.",
      "Raised database performance 300% via SQL tuning, indexing and Redis distributed caching.",
    ],
    metrics: [
      { value: "300%", label: "Query throughput" },
      { value: "1,000+", label: "Live endpoints" },
    ],
  },
  {
    company: "Self-Employed",
    role: "Full Stack Developer (Freelance)",
    period: "Nov 2023 — Jul 2024",
    place: "Cairo, Egypt",
    status: "Contract",
    focus: "Listing frontends & API delivery",
    stack: ["Next.js", "React", ".NET Core", "Docker", "Stripe"],
    points: [
      "Delivered end-to-end web apps with Next.js and React for SEO-friendly property listing frontends, backed by .NET Core APIs.",
      "Integrated third-party payment, auth and mapping APIs to extend property platform capabilities.",
      "Containerized legacy services with Docker to streamline environments and cloud migration.",
    ],
    metrics: [
      { value: "12+", label: "Shipped builds" },
      { value: "<1s", label: "Listing load target" },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <span
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          eyebrow="Track record"
          title="Where I've delivered"
          lede="Two chapters, one throughline: property systems that stay fast, isolated and observable while the business grows around them."
          aside={
            <div className="hairline rounded-2xl px-5 py-4 text-right">
              <p className="figure text-3xl">4+</p>
              <p className="eyebrow mt-1">Years in production</p>
            </div>
          }
        />

        <div className="spine relative mt-16 pl-6 sm:pl-10">
          <div className="space-y-6">
            {roles.map((r, i) => (
              <Reveal key={r.company} delay={i * 100}>
                <article className="edge-card lift relative rounded-4xl bg-card p-8 sm:p-10">
                  <span
                    aria-hidden="true"
                    className="absolute -left-6 top-11 hidden h-px w-6 bg-[var(--edge-seam)] sm:-left-10 sm:block sm:w-10"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.7rem] top-[2.6rem] size-2.5 rounded-full bg-accent ring-4 ring-background sm:-left-[2.95rem]"
                  />

                  <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="eyebrow">{r.company}</p>
                        <span className="hairline rounded-full px-2.5 py-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-accent">
                          {r.status}
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl sm:text-[1.75rem]">{r.role}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{r.focus}</p>
                    </div>
                    <p className="figure text-sm text-muted-foreground">
                      {r.period}
                      <span className="mt-1 block text-xs uppercase tracking-[0.18em]">
                        {r.place}
                      </span>
                    </p>
                  </div>

                  <div className="mt-8 grid gap-8 border-t border-[var(--edge-line)] pt-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {r.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-8 lg:flex-col lg:border-l lg:border-[var(--edge-line)] lg:pl-10">
                      {r.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="figure text-3xl">{m.value}</p>
                          <p className="eyebrow mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {r.stack.map((s) => (
                      <span
                        key={s}
                        className="hairline rounded-full px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
