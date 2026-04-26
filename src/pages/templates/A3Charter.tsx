import { ChapterShell } from "@/components/ChapterShell";

const Box = ({ title, lines = 4, children }: { title: string; lines?: number; children?: React.ReactNode }) => (
  <div className="rounded border border-primary/40 bg-card">
    <div className="border-b border-primary/40 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
      {title}
    </div>
    <div className="p-3">
      {children ?? (
        <div className="space-y-1.5">
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className="h-4 border-b border-dashed border-border/70" />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function A3Charter() {
  return (
    <ChapterShell
      title="A3 Report & Kaizen Event Charter"
      subtitle="One-page problem-solving and event-charter template. Print on A3 (or A4 landscape) and post in the war room."
    >
      <div className="print-page rounded-md border-2 border-primary bg-card p-5">
        <div className="mb-4 grid grid-cols-3 gap-3 border-b-2 border-primary pb-3">
          <div className="col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">A3 Report · Form K-02</div>
            <h2 className="m-0 text-2xl font-bold text-primary">Kaizen Event Charter / A3 Report</h2>
            <div className="mt-1 text-xs text-muted-foreground">Title: ______________________________________________</div>
          </div>
          <div className="text-xs text-muted-foreground">
            <div>Event no.: __________</div>
            <div>Line / Cell: __________</div>
            <div>Date: __________ to __________</div>
            <div>Sponsor: __________</div>
            <div>Team Leader: __________</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Box title="1. Background — why this matters">
            <div className="space-y-1.5">
              <div className="h-4 border-b border-dashed border-border/70" />
              <div className="h-4 border-b border-dashed border-border/70" />
              <div className="h-4 border-b border-dashed border-border/70" />
            </div>
          </Box>
          <Box title="2. Current condition — facts & data">
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>SMV (current): __________</div>
              <div>Efficiency %: __________</div>
              <div>DHU: __________</div>
              <div>Output / hour: __________</div>
              <div>WIP between operations: __________</div>
              <div className="mt-2 h-12 rounded border border-dashed border-border/70 text-center text-[10px] leading-[3rem]">
                — Sketch / photo of current state —
              </div>
            </div>
          </Box>

          <Box title="3. Goal / Target condition">
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>Target SMV: __________</div>
              <div>Target Efficiency %: __________</div>
              <div>Target DHU: __________</div>
              <div>Target Output / hour: __________</div>
              <div>Deadline: __________</div>
            </div>
          </Box>
          <Box title="4. Root cause analysis (5 Whys / Fishbone)" lines={6} />

          <Box title="5. Countermeasures — what we will try" lines={6} />
          <Box title="6. Implementation plan (Who / What / When)">
            <table className="w-full text-[11px]">
              <thead className="text-primary">
                <tr><th className="border-b border-border py-1 text-left">Action</th><th className="border-b border-border py-1 text-left">Who</th><th className="border-b border-border py-1 text-left">When</th></tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}><td className="border-b border-dashed border-border py-2">&nbsp;</td><td className="border-b border-dashed border-border py-2">&nbsp;</td><td className="border-b border-dashed border-border py-2">&nbsp;</td></tr>
                ))}
              </tbody>
            </table>
          </Box>

          <Box title="7. Results — Before vs After">
            <table className="w-full text-[11px]">
              <thead className="text-primary">
                <tr><th className="border-b border-border py-1 text-left">KPI</th><th className="border-b border-border py-1 text-right">Before</th><th className="border-b border-border py-1 text-right">After</th><th className="border-b border-border py-1 text-right">Δ %</th></tr>
              </thead>
              <tbody>
                {["SMV", "Efficiency %", "DHU", "Output / hr", "WIP", "Cost saved"].map((k) => (
                  <tr key={k}><td className="border-b border-dashed border-border py-1.5 font-medium">{k}</td><td className="border-b border-dashed border-border py-1.5 text-right">&nbsp;</td><td className="border-b border-dashed border-border py-1.5 text-right">&nbsp;</td><td className="border-b border-dashed border-border py-1.5 text-right">&nbsp;</td></tr>
                ))}
              </tbody>
            </table>
          </Box>
          <Box title="8. Standardize & Sustain — follow-up plan" lines={6} />
        </div>

        <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
          <div>Team Leader: ______________________</div>
          <div>Sponsor: ______________________</div>
          <div>Date approved: ______________________</div>
        </div>
      </div>

      <p className="no-print mt-6 text-sm text-muted-foreground">
        The A3 is not just a report — it is a thinking tool. The constraint of one page forces clarity.
        If a section is empty, the team has not done that step yet.
      </p>
    </ChapterShell>
  );
}
