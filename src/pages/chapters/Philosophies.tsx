import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

const principles: [string, string][] = [
  ["Question every standard", "Today's standard is tomorrow's starting line — every SOP can be improved."],
  ["Go to the Gemba", "The 'real place' — improvement decisions are made on the floor, not in the office."],
  ["Speak with data", "Replace opinion with measured SMV, defects/100, WIP count, walking distance."],
  ["Eliminate waste before adding resource", "Never approve more manpower or machines until waste has been removed."],
  ["Solve at the source", "Fix the root cause, not the symptom — use 5 Whys, not workarounds."],
  ["Small improvements, every day", "100 × 1% improvements beat 1 × 100% project."],
  ["Standardize, then improve", "Without a standard, there is nothing to improve."],
  ["Empower the operator", "The person doing the work is the expert in the work."],
  ["Cross-functional teams", "Sewing, mechanics, quality and IE solve together — never in silos."],
  ["Make problems visible", "Hidden problems get worse. Visualize WIP, defects and downtime in real time."],
];

export default function Philosophies() {
  return (
    <ChapterShell
      number="04"
      title="Core Kaizen Philosophies"
      subtitle="Ten guiding principles, framed for the sewing floor."
    >
      <p>
        Kaizen rests on a small set of beliefs about people and improvement. Internalize these before
        deploying tools — the tools without the philosophy quickly become a paperwork exercise.
      </p>

      <div className="my-8 grid gap-4 md:grid-cols-2">
        {principles.map(([t, d], i) => (
          <div key={t} className="rounded-md border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-xs text-accent">P{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-base font-semibold text-primary">{t}</h3>
            </div>
            <p className="m-0 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <h2>Three behaviours that destroy Kaizen</h2>
      <ul>
        <li><strong>“Shoot the messenger”</strong> — punishing operators who report defects kills the suggestion pipeline within a week.</li>
        <li><strong>Management approval bottleneck</strong> — if every idea waits 30 days for sign-off, nothing improves.</li>
        <li><strong>Cherry-picking only big savings</strong> — refusing small ideas signals that ordinary operators don't matter.</li>
      </ul>

      <FloorExample>
        At one knitwear factory, a sewing operator suggested moving the trimming scissors from a hook
        on the right of her machine to a magnetic strip directly above the throat plate. Saving:
        ~1.5 seconds per piece. Rolled out across 22 operators on the line, this returned roughly
        <strong> 45 minutes/day</strong> of capacity — from a single, almost-free, operator-led idea.
      </FloorExample>

      <h2>The Kaizen umbrella</h2>
      <p>
        Most Lean and quality methods sit under the Kaizen umbrella: 5S, TPM, JIT, Kanban, Poka-Yoke,
        SMED, Quality Circles, Suggestion Systems, Standard Work. Kaizen is the cultural soil; these
        are the plants that grow in it.
      </p>
    </ChapterShell>
  );
}
