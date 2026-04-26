import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

const wastes = [
  { code: "T", name: "Transport", garment: "Bundles trolleyed across the floor between distant operations; trims fetched from a remote store." },
  { code: "I", name: "Inventory", garment: "Buffer stacks of 200+ bundles between operations; fabric waiting weeks before cutting." },
  { code: "M", name: "Motion", garment: "Operator reaching behind for thread cones; scissors hung 60 cm away; pedal foot-stretch on every cycle." },
  { code: "W", name: "Waiting", garment: "Operator idle waiting for bundle from upstream; mechanic queue for a single broken machine." },
  { code: "O", name: "Over-production", garment: "Sewing tomorrow's style today because an operator is free; producing full bundles ahead of next operation." },
  { code: "P", name: "Over-processing", garment: "Double-checking every seam an inspector already checked; redundant trimming; ironing already-flat panels." },
  { code: "D", name: "Defects", garment: "Skipped stitches, broken needle holes, shading; rework bundles parked beside the line for hours." },
];

const tools = [
  {
    title: "5S — workplace organization",
    body: "Sort (remove what is not needed), Set in order (a place for everything), Shine (clean is inspect), Standardize (visual standards), Sustain (audit cadence). For sewing: thread holders by colour family, bobbin trays at point-of-use, attachment hooks labelled, end-of-shift cleaning checklist. See the 5S audit template under Templates & Tools.",
  },
  {
    title: "PDCA — Plan, Do, Check, Act",
    body: "The heartbeat of every Kaizen. Plan the experiment (hypothesis + measure), Do it on one machine, Check the result against baseline, Act — adopt, adapt or abandon. Always loop; never stop at 'Do'.",
  },
  {
    title: "5 Whys — root cause analysis",
    body: "Ask 'why?' five times to drill from symptom to root. Example: skipped stitches → needle is bent → operator hit the foot at fabric edge → no edge guide → guide not in standard kit → purchasing didn't standardize attachments. Fix the root, not the needle.",
  },
  {
    title: "Fishbone (Ishikawa) — defect causes",
    body: "Map causes of a high-DHU operation across the 6 M's: Man, Machine, Material, Method, Measurement, Mother Nature (environment). Excellent for cross-functional Kaizens involving quality and mechanics.",
  },
  {
    title: "Line balancing — eliminate the bottleneck",
    body: "Compare operator cycle time vs takt. Pitch diagram exposes the slowest operation. Solutions: split work, combine operations, add helper, change attachment, re-train, re-allocate. Aim for ≤10% imbalance across the line.",
  },
  {
    title: "SMED — Single-Minute Exchange of Dies",
    body: "Originally for press dies, applied to garment style changeover. Separate internal (machine-stopped) work from external (done while still running). Target: changeover time under 10 minutes for thread, attachment and folder swaps.",
  },
  {
    title: "Poka-Yoke — mistake-proofing",
    body: "Physical or visual devices that prevent defects. Examples: edge guides that make a wrong seam allowance impossible; coloured threads to confirm the right thread is in the machine; templates that only fit one way.",
  },
  {
    title: "Visual management",
    body: "Hourly output board at line head, andon lights for machine breakdown, defect-of-the-day board, line balance pitch diagram updated daily. If the floor is silent on its own status, you cannot manage it.",
  },
];

export default function Tools() {
  return (
    <ChapterShell
      number="06"
      title="Kaizen Tools for the Sewing Line"
      subtitle="The minimum toolkit every Industrial Engineer and supervisor should master."
    >
      <h2>The 7 Wastes (Muda) — TIM-WOOD on the sewing floor</h2>
      <p>
        Eliminating waste is the primary lever of Kaizen. Memorize TIM-WOOD and walk your floor
        looking for each one. Every waste removed is capacity created at zero cost.
      </p>

      <div className="my-6 grid gap-3 md:grid-cols-2">
        {wastes.map((w) => (
          <div key={w.code} className="flex gap-3 rounded-md border border-border bg-card p-4 shadow-[var(--shadow-card)]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-accent/10 font-mono text-xl font-semibold text-accent">
              {w.code}
            </div>
            <div>
              <div className="text-sm font-semibold text-primary">{w.name}</div>
              <p className="m-0 text-xs text-muted-foreground">{w.garment}</p>
            </div>
          </div>
        ))}
      </div>

      <FloorExample>
        On a typical sewing line, <strong>Motion</strong> and <strong>Waiting</strong> account for
        40–60% of all waste. Bundle-related <strong>Inventory</strong> hides the other problems —
        which is why moving towards smaller bundle sizes (or single-piece flow in modular cells)
        exposes the real bottlenecks.
      </FloorExample>

      <h2>Core toolkit</h2>
      <div className="my-6 space-y-4">
        {tools.map((t) => (
          <div key={t.title} className="rounded-md border-l-4 border-primary bg-card p-4 shadow-[var(--shadow-card)]">
            <h3 className="m-0 text-base font-semibold text-primary">{t.title}</h3>
            <p className="mt-1.5 text-sm text-foreground/85">{t.body}</p>
          </div>
        ))}
      </div>

      <h2>How to choose the right tool</h2>
      <ul>
        <li><strong>Disorganized workplace</strong> → start with 5S.</li>
        <li><strong>Recurring defects</strong> → 5 Whys, then Fishbone, then Poka-Yoke.</li>
        <li><strong>Low line efficiency</strong> → time study + line balancing.</li>
        <li><strong>Long style changeover</strong> → SMED.</li>
        <li><strong>Operator can't see status</strong> → visual management & andon.</li>
        <li><strong>Cross-cutting problem</strong> → run a full PDCA Kaizen event (Chapter 7).</li>
      </ul>
    </ChapterShell>
  );
}
