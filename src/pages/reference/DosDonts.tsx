import { ChapterShell } from "@/components/ChapterShell";
import { Check, X } from "lucide-react";

const dos = [
  "Start with a clearly defined, measurable problem",
  "Include the operator on every Kaizen team",
  "Go to the gemba — make all decisions on the floor",
  "Brainstorm at least 7 alternatives before evaluating any",
  "Trial every change on one machine before line-wide roll-out",
  "Update the SOP, layout and visual standard before closing the event",
  "Measure results for at least 5 working days after implementation",
  "Respond to every operator suggestion within 7 days",
  "Recognise contributors publicly and by name",
  "Audit sustained Kaizens at 7, 14, 30 and 60 days",
  "Document everything with photos — before, during, after",
  "Treat small ideas with the same respect as large ones",
];

const donts = [
  "Don't start with a solution disguised as a problem",
  "Don't run a Kaizen without a representative from the affected operation",
  "Don't approve ideas from the office without observing the work",
  "Don't skip the simulation step — untested roll-outs damage credibility",
  "Don't allow events to drag beyond the agreed timeframe",
  "Don't celebrate before measuring sustained results",
  "Don't punish operators for reporting defects, mistakes or near-misses",
  "Don't let suggestions sit unanswered — silence kills the system",
  "Don't reject ideas based on cost without first considering method changes",
  "Don't run Kaizens for the audit only — they must serve the line",
  "Don't change SMV without re-balancing the line",
  "Don't standardize a method that has not been validated by quality",
];

export default function DosDonts() {
  return (
    <ChapterShell
      title="Kaizen Do's & Don'ts"
      subtitle="Quick reference card for facilitators, supervisors and Kaizen leaders. Print and post in the war room."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-md border-2 border-green-600/40 bg-green-600/5 p-5">
          <div className="mb-3 flex items-center gap-2 text-green-700">
            <Check className="h-5 w-5" />
            <h3 className="m-0 text-lg font-semibold">DO</h3>
          </div>
          <ul className="m-0 space-y-2 pl-0">
            {dos.map((d) => (
              <li key={d} className="flex gap-2 text-sm text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border-2 border-red-600/40 bg-red-600/5 p-5">
          <div className="mb-3 flex items-center gap-2 text-red-700">
            <X className="h-5 w-5" />
            <h3 className="m-0 text-lg font-semibold">DON'T</h3>
          </div>
          <ul className="m-0 space-y-2 pl-0">
            {donts.map((d) => (
              <li key={d} className="flex gap-2 text-sm text-foreground/85">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChapterShell>
  );
}
