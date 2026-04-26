import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

const steps = [
  {
    n: 1, t: "Identify the problem",
    d: "State the problem in measurable terms tied to a KPI: 'Operation 14 (collar attach) is the bottleneck — efficiency 58% vs line average 78%, DHU 4.2 vs target 1.5.' Avoid vague problems like 'quality is bad'.",
    out: "Problem statement, baseline data, target condition.",
  },
  {
    n: 2, t: "Form the team",
    d: "4–7 people: line supervisor, 1–2 operators from the affected operation, IE/work-study, mechanic, quality auditor. Assign a clear team leader and Kaizen sponsor (factory or production manager).",
    out: "Team charter, roles, daily 30-minute meeting time.",
  },
  {
    n: 3, t: "Gather data — internal & external",
    d: "Time study (cycle time × 10 cycles), operator interview, defect Pareto, video the operation, walk the material flow, talk to downstream operator (internal customer) and quality (external proxy for buyer).",
    out: "Time study sheet, defect Pareto, video, current-state map.",
  },
  {
    n: 4, t: "Review the current process",
    d: "Walk the gemba together. Map the current state: machine, attachment, method, motion, bundle size, WIP between stations. Mark waste with red tags. Use 5 Whys on the top defect.",
    out: "Current-state map with annotated waste.",
  },
  {
    n: 5, t: "Brainstorm 7 alternatives",
    d: "Generate at least 7 ideas before evaluating any. Mix improvements across method, machine, attachment/folder, layout, sequence, training and visual control. Quantity beats quality at this stage.",
    out: "Ideas list, sketches.",
  },
  {
    n: 6, t: "Select the best 3",
    d: "Score each idea against impact (SMV / DHU / safety) vs ease (cost, time, risk). Pick top 3 for simulation. Reject ideas that violate safety, ergonomic or quality standards.",
    out: "Selection matrix, top 3 shortlist.",
  },
  {
    n: 7, t: "Simulate & evaluate",
    d: "Trial each shortlisted idea on one machine for 30–60 minutes. Re-time, re-check defects, ask the operator. Refine. Pick the winner — never roll out untested ideas to the whole line.",
    out: "Trial results, operator feedback, final design.",
  },
  {
    n: 8, t: "Present to management",
    d: "Use the A3 report. Show before vs after data, cost (usually near-zero), and ask for approval to roll out. Keep the presentation under 15 minutes.",
    out: "Approved A3 report.",
  },
  {
    n: 9, t: "Implement, measure, standardize",
    d: "Roll out to the full operation/line. Update the SOP, retrain, update visual standards. Measure for at least 5 working days post-implementation. Hand over to the line as the new standard.",
    out: "Updated SOP, before/after KPI sheet, sustaining audit schedule.",
  },
];

export default function Process() {
  return (
    <ChapterShell
      number="05"
      title="The 9-Step Kaizen Implementation Process"
      subtitle="A repeatable workflow your teams can run on any sewing-line problem in 5 working days."
    >
      <p>
        Every Kaizen — whether a 30-minute quick win or a 5-day blitz event — should follow these
        nine steps. Skipping steps is the single most common cause of Kaizen failure. Step 7
        (simulate before roll-out) and Step 9 (standardize) are the most often skipped.
      </p>

      <div className="my-8 space-y-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-md border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-4 py-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-accent font-mono text-sm font-semibold text-accent-foreground">
                {s.n}
              </div>
              <h3 className="m-0 text-base font-semibold text-primary">{s.t}</h3>
            </div>
            <div className="px-4 py-3">
              <p className="m-0 text-sm text-foreground/85">{s.d}</p>
              <div className="mt-2 text-xs">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Output → </span>
                <span className="text-muted-foreground">{s.out}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FloorExample title="Worked example — 9 steps in 5 days">
        <strong>Problem:</strong> Side-seam operation on a polo line — efficiency 62%, DHU 3.1.
        <br />
        <strong>Day 1:</strong> Steps 1–3 (problem, team, data). Found 7s of unnecessary garment
        repositioning per piece.
        <br />
        <strong>Day 2:</strong> Steps 4–6. Brainstormed 9 ideas, selected 3: edge guide, foot pedal
        re-positioning, bundle holder.
        <br />
        <strong>Day 3:</strong> Step 7 — trialled all three. Edge guide + holder won.
        <br />
        <strong>Day 4:</strong> Step 8 — A3 to management, approved.
        <br />
        <strong>Day 5:</strong> Step 9 — rolled out, SOP updated, operator retrained.
        <br />
        <strong>Result:</strong> Efficiency 62 → 79%, DHU 3.1 → 1.2. Cost: $4 of guide material.
      </FloorExample>

      <h2>Common pitfalls in each step</h2>
      <ul>
        <li><strong>Step 1:</strong> problem stated as a solution (“we need a new machine”) instead of a problem.</li>
        <li><strong>Step 2:</strong> no operator on the team — guarantees rejection at roll-out.</li>
        <li><strong>Step 3:</strong> single time study — must take at least 10 cycles to be credible.</li>
        <li><strong>Step 5:</strong> evaluating ideas as they come — kills creativity. Brainstorm first, judge later.</li>
        <li><strong>Step 9:</strong> celebrating before measuring sustained results.</li>
      </ul>
    </ChapterShell>
  );
}
