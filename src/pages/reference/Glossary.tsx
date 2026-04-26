import { ChapterShell } from "@/components/ChapterShell";

const terms: { term: string; def: string }[] = [
  { term: "5S", def: "Workplace organization method: Sort, Set in order, Shine, Standardize, Sustain." },
  { term: "5 Whys", def: "Root cause technique — ask 'why' five times to drill from symptom to root cause." },
  { term: "A3 Report", def: "One-page (A3 paper) structured problem-solving and reporting template used in Lean and Kaizen." },
  { term: "Andon", def: "Visual signal (light, board or buzzer) that calls attention to a line problem in real time." },
  { term: "Bottleneck", def: "The slowest operation in the line — it determines the maximum line throughput." },
  { term: "DHU", def: "Defects per Hundred Units — quality KPI: defects ÷ output × 100." },
  { term: "Efficiency %", def: "(Output × SMV) ÷ (Manpower × Working minutes) × 100. Core sewing-line productivity KPI." },
  { term: "Fishbone (Ishikawa)", def: "Cause-and-effect diagram organizing potential causes around 6 Ms: Man, Machine, Material, Method, Measurement, Mother nature." },
  { term: "Gemba", def: "Japanese for 'the real place' — the shop floor where work and value are created." },
  { term: "Heijunka", def: "Production levelling — smoothing volume and mix to reduce Mura (unevenness)." },
  { term: "Jidoka", def: "Autonomation — building quality into the process so abnormalities stop the line automatically." },
  { term: "JIT", def: "Just-In-Time — producing only what is needed, when it is needed, in the quantity needed." },
  { term: "Kaizen", def: "Japanese for 'change for the better' — continuous, incremental improvement involving everyone." },
  { term: "Kaizen Event / Blitz", def: "Focused 3–5 day improvement effort by a cross-functional team on one specific problem." },
  { term: "Kanban", def: "Visual signal (card, bin or marker) that triggers replenishment, controlling WIP and flow." },
  { term: "Line balancing", def: "Allocating work to operators so each cycle time is close to the takt time, eliminating bottlenecks and idle time." },
  { term: "Modular production", def: "Small team-based sewing system with cross-trained operators and single-piece flow." },
  { term: "Muda", def: "Waste — any activity that consumes resources but creates no customer value (the 7 Wastes)." },
  { term: "Mura", def: "Unevenness — variation in workload, schedule or quality that creates waste." },
  { term: "Muri", def: "Overburden — pushing people, machines or processes beyond their natural limits." },
  { term: "PDCA", def: "Plan–Do–Check–Act cycle — the operational heartbeat of Kaizen and continuous improvement." },
  { term: "Pitch diagram", def: "Bar chart of cycle time per operation vs takt time; reveals bottlenecks and imbalance." },
  { term: "Poka-Yoke", def: "Mistake-proofing — devices or methods that prevent defects from occurring." },
  { term: "SMED", def: "Single-Minute Exchange of Dies — methodology for reducing changeover time below 10 minutes." },
  { term: "SMV", def: "Standard Minute Value — time required to produce one piece at standard performance." },
  { term: "SOP", def: "Standard Operating Procedure — the documented current best method for an operation." },
  { term: "Takt time", def: "Available production time ÷ customer demand. The pace at which the line must produce to meet demand." },
  { term: "TPM", def: "Total Productive Maintenance — operator-led machine care to maximise availability." },
  { term: "VSM", def: "Value Stream Map — diagram of all material and information flows from raw input to delivered product." },
  { term: "WIP", def: "Work In Process — partially completed garments between operations. High WIP hides problems and slows flow." },
];

export default function Glossary() {
  return (
    <ChapterShell
      title="Glossary"
      subtitle="Lean, Kaizen and garment-industry terminology used throughout this playbook."
    >
      <div className="overflow-hidden rounded-md border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary text-primary">
            <tr>
              <th className="w-48 px-4 py-2 text-left">Term</th>
              <th className="px-4 py-2 text-left">Definition</th>
            </tr>
          </thead>
          <tbody>
            {terms.map((t) => (
              <tr key={t.term} className="border-t border-border align-top">
                <td className="px-4 py-2.5 font-semibold text-primary">{t.term}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{t.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChapterShell>
  );
}
