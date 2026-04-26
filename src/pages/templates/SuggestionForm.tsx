import { ChapterShell } from "@/components/ChapterShell";

const Field = ({ label, lines = 1, w = "w-full" }: { label: string; lines?: number; w?: string }) => (
  <div className={`${w} mb-3`}>
    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-primary">{label}</label>
    <div className="rounded border border-dashed border-border bg-secondary/30">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-7 border-b border-border/60 last:border-b-0" />
      ))}
    </div>
  </div>
);

export default function SuggestionForm() {
  return (
    <ChapterShell
      title="Kaizen Suggestion Form"
      subtitle="Operator-friendly form for capturing improvement ideas at the workstation. Print one A4 sheet per idea."
    >
      <div className="print-page rounded-md border-2 border-primary bg-card p-6">
        <div className="mb-4 flex items-center justify-between border-b-2 border-primary pb-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Form K-01</div>
            <h2 className="m-0 text-xl font-bold text-primary">Kaizen Suggestion / Idea Form</h2>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <div>Date: ____________</div>
            <div>Suggestion No.: ____________</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Operator name" />
          <Field label="ID / Card no." />
          <Field label="Line / Cell" />
          <Field label="Operation / Workstation" />
          <Field label="Supervisor" />
          <Field label="Date observed" />
        </div>

        <Field label="1. What problem or waste did you notice? (What's the issue?)" lines={3} />
        <Field label="2. What is your suggestion to improve it?" lines={4} />
        <Field label="3. What benefit do you expect? (faster / safer / fewer defects / less effort)" lines={2} />

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div>
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-primary">Type of waste</div>
            <div className="space-y-1 text-xs">
              {["Transport", "Inventory", "Motion", "Waiting", "Over-production", "Over-processing", "Defects", "Safety"].map((w) => (
                <label key={w} className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 border border-primary" /> {w}
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-primary">Estimated impact</div>
            <div className="space-y-1 text-xs">
              {["Low (< 1s/pc)", "Medium (1–5s/pc)", "High (> 5s/pc)", "Quality / DHU", "Safety / ergonomics"].map((w) => (
                <label key={w} className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 border border-primary" /> {w}
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-primary">Cost to implement</div>
            <div className="space-y-1 text-xs">
              {["Zero (method change)", "Low (< $20)", "Medium ($20–$200)", "High (> $200, needs CAPEX)"].map((w) => (
                <label key={w} className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 border border-primary" /> {w}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t-2 border-primary pt-3">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-primary">For Office Use</div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Reviewed by" />
            <Field label="Decision (Accept / Modify / Reject) + reason" lines={2} />
            <Field label="Assigned to" />
            <Field label="Target implementation date" />
            <Field label="Result after implementation (Before vs After)" lines={2} />
            <Field label="Reward / recognition given" />
          </div>
        </div>

        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
          <div>Operator signature: ____________________</div>
          <div>Sponsor signature: ____________________</div>
        </div>
      </div>

      <p className="no-print mt-6 text-sm text-muted-foreground">
        Tip: keep a stack of pre-printed forms at the line head. Supervisor collects them daily and
        commits to a decision within 7 days posted on the suggestion board.
      </p>
    </ChapterShell>
  );
}
