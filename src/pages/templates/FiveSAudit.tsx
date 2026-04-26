import { useEffect, useState } from "react";
import { ChapterShell } from "@/components/ChapterShell";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const sections = [
  {
    s: "Sort", color: "ring-red-500/30",
    items: [
      "Only items needed for current style are at the workstation",
      "No personal items, food or unused tools at the machine",
      "Obsolete attachments / folders removed from the line",
      "Defective machines / chairs are tagged and scheduled for repair",
      "WIP between operations is within the agreed buffer limit",
    ],
  },
  {
    s: "Set in order", color: "ring-orange-500/30",
    items: [
      "Every tool and attachment has a labelled, fixed location",
      "Thread cones organized by colour family within easy reach",
      "Bobbin tray is at point-of-use and labelled",
      "Trolleys, bins and trim boxes have floor-marked positions",
      "Standard kit per workstation is documented and visible",
    ],
  },
  {
    s: "Shine", color: "ring-yellow-500/30",
    items: [
      "Machine, table and floor cleaned at start and end of shift",
      "Lint trays emptied, oil leaks identified and tagged",
      "Cleaning checklist signed by the operator daily",
      "Lighting clean and at standard intensity (≥ 750 lux at needle)",
      "No fabric dust accumulation on motor or under bobbin case",
    ],
  },
  {
    s: "Standardize", color: "ring-green-500/30",
    items: [
      "Visual standard (photo + key points) at every workstation",
      "Standard SMV posted at line head and updated within 7 days of change",
      "Hourly output board completed every hour",
      "Defect-of-the-day board updated daily",
      "5S photo standard for every workstation type is centrally maintained",
    ],
  },
  {
    s: "Sustain", color: "ring-blue-500/30",
    items: [
      "Weekly 5S audit conducted on a fixed day by the IE",
      "5S score posted publicly at the line within 24 hours",
      "Action items from previous audit closed before the next audit",
      "Operators trained on 5S during induction and re-trained yearly",
      "5S score is part of the supervisor's monthly performance review",
    ],
  },
];

const STORAGE_KEY = "kaizen-5s-audit";

export default function FiveSAudit() {
  const [scores, setScores] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setScores(JSON.parse(saved)); } catch { /* noop */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  }, [scores]);

  const setScore = (key: string, val: number) =>
    setScores((s) => ({ ...s, [key]: val }));

  const reset = () => setScores({});

  const sectionTotal = (idx: number) =>
    sections[idx].items.reduce((sum, _, i) => sum + (scores[`${idx}-${i}`] ?? 0), 0);

  const grandTotal = sections.reduce((sum, _, i) => sum + sectionTotal(i), 0);
  const maxTotal = sections.length * 5 * 5; // 125
  const pct = Math.round((grandTotal / maxTotal) * 100);
  const grade = pct >= 80 ? { label: "Green — World class", className: "bg-green-600" }
              : pct >= 60 ? { label: "Amber — Acceptable, improve", className: "bg-yellow-500" }
              : { label: "Red — Action required", className: "bg-red-600" };

  return (
    <ChapterShell
      title="5S Sewing Floor Audit"
      subtitle="25-point interactive scoring sheet. Each item scored 0 (none) to 5 (excellent). Results saved automatically in your browser."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-md border border-border bg-card p-4 shadow-[var(--shadow-card)]">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Overall score</div>
          <div className="font-mono text-3xl font-semibold text-primary">
            {grandTotal} <span className="text-base text-muted-foreground">/ {maxTotal}</span>
            <span className="ml-3 text-base text-accent">({pct}%)</span>
          </div>
        </div>
        <div className={`rounded px-3 py-1.5 text-sm font-semibold text-white ${grade.className}`}>
          {grade.label}
        </div>
        <Button variant="outline" size="sm" onClick={reset} className="gap-2 no-print">
          <RotateCcw className="h-4 w-4" /> Reset audit
        </Button>
      </div>

      <div className="space-y-5">
        {sections.map((sec, sIdx) => {
          const total = sectionTotal(sIdx);
          return (
            <div key={sec.s} className={`rounded-md border bg-card shadow-[var(--shadow-card)] ring-2 ${sec.color}`}>
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary font-mono text-sm font-bold text-primary-foreground">
                    {sIdx + 1}
                  </div>
                  <h3 className="m-0 text-lg font-semibold text-primary">{sec.s}</h3>
                </div>
                <div className="font-mono text-sm">
                  <span className="text-primary font-semibold">{total}</span>
                  <span className="text-muted-foreground"> / 25</span>
                </div>
              </div>
              <div className="divide-y divide-border">
                {sec.items.map((item, i) => {
                  const key = `${sIdx}-${i}`;
                  const v = scores[key] ?? 0;
                  return (
                    <div key={key} className="flex flex-wrap items-center gap-3 px-4 py-2.5">
                      <div className="flex-1 min-w-[200px] text-sm text-foreground/85">{item}</div>
                      <div className="flex items-center gap-1">
                        {[0, 1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            onClick={() => setScore(key, n)}
                            className={`h-7 w-7 rounded font-mono text-xs font-semibold transition ${
                              v === n
                                ? "bg-accent text-accent-foreground"
                                : "bg-secondary text-muted-foreground hover:bg-secondary/70"
                            }`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Scoring guide: 0 = not done · 1 = poor · 2 = below standard · 3 = meets standard · 4 = above standard · 5 = excellent.
        Target: ≥ 80% overall, no single section below 60%.
      </p>
    </ChapterShell>
  );
}
