import { Link } from "react-router-dom";
import { ArrowRight, Factory, Target, Wrench, Users, Gauge } from "lucide-react";
import { chapters, groupOrder } from "@/lib/chapters";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Chapters", value: "9" },
  { label: "Working templates", value: "4" },
  { label: "Audit points", value: "25" },
  { label: "Wastes covered", value: "7" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border px-6 py-16 md:px-12 md:py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="relative z-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/90">
            <Factory className="h-3.5 w-3.5" /> Garment Manufacturing · Sewing Line Edition
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            The Kaizen Implementation Playbook
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            A practical, ground-floor guide to running continuous improvement on the sewing line — from
            identifying the first bottleneck to sustaining a Kaizen culture across your factory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/introduction">Start with Chapter 1 <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <Link to="/kpi-tracker">Open KPI Tracker</Link>
            </Button>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-border px-6 py-6 text-center last:border-r-0">
              <div className="font-mono text-3xl font-semibold text-accent">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 py-12 md:px-12">
        <h2 className="mb-2 text-2xl font-semibold text-primary">What this playbook delivers</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          Built for Industrial Engineers, line supervisors, and factory managers who need a
          working system — not just theory.
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: Target, title: "Diagnose", text: "Identify the right problem using waste analysis, 5 Whys and Fishbone." },
            { icon: Wrench, title: "Apply tools", text: "5S, PDCA, line balancing, SMED — adapted for sewing operations." },
            { icon: Users, title: "Run events", text: "1-week Kaizen blitz with cross-functional teams and clear deliverables." },
            { icon: Gauge, title: "Measure", text: "Track SMV, efficiency, DHU and savings with a live before/after tracker." },
          ].map((p) => (
            <div key={p.title} className="rounded-md border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-primary">{p.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table of contents */}
      <section className="border-t border-border bg-secondary/30 px-6 py-12 md:px-12">
        <h2 className="mb-8 text-2xl font-semibold text-primary">Table of contents</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {groupOrder.map((g) => (
            <div key={g}>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-accent">{g}</div>
              <ul className="space-y-2">
                {chapters.filter((c) => c.group === g).map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/${c.slug}`}
                      className="group flex items-start gap-3 rounded border border-transparent bg-card p-3 shadow-[var(--shadow-card)] transition hover:border-accent/40"
                    >
                      <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <div className="text-sm font-medium text-primary group-hover:text-accent">{c.title}</div>
                        <div className="text-xs text-muted-foreground">{c.blurb}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-card px-6 py-6 text-center text-xs text-muted-foreground md:px-12">
        Kaizen Implementation Playbook · Built for sewing line excellence · Continuous improvement, every shift.
      </footer>
    </div>
  );
};

export default Index;
