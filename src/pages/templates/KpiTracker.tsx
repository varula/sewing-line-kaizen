import { useEffect, useState } from "react";
import { ChapterShell } from "@/components/ChapterShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RotateCcw, TrendingUp, TrendingDown } from "lucide-react";

type State = {
  smv: string;            // standard minute value (min)
  manpower: string;       // operators on the line
  workMin: string;        // available working minutes / day
  output: string;         // garments produced / day
  defects: string;        // defects found / day
  costMin: string;        // cost per minute of labour (USD)
};

const empty: State = { smv: "", manpower: "", workMin: "", output: "", defects: "", costMin: "" };
const STORAGE_KEY = "kaizen-kpi-tracker";

function compute(s: State) {
  const smv = parseFloat(s.smv) || 0;
  const mp = parseFloat(s.manpower) || 0;
  const wm = parseFloat(s.workMin) || 0;
  const op = parseFloat(s.output) || 0;
  const df = parseFloat(s.defects) || 0;
  const cm = parseFloat(s.costMin) || 0;

  const earnedMin = op * smv;
  const availableMin = mp * wm;
  const efficiency = availableMin > 0 ? (earnedMin / availableMin) * 100 : 0;
  const dhu = op > 0 ? (df / op) * 100 : 0;
  const outputPerHour = wm > 0 ? op / (wm / 60) : 0;
  const labourCost = availableMin * cm;
  const costPerPiece = op > 0 ? labourCost / op : 0;

  return { efficiency, dhu, outputPerHour, labourCost, costPerPiece, availableMin, earnedMin };
}

const fmt = (n: number, d = 1) => isFinite(n) ? n.toFixed(d) : "—";
const delta = (a: number, b: number) => (a === 0 ? 0 : ((b - a) / a) * 100);

export default function KpiTracker() {
  const [before, setBefore] = useState<State>(empty);
  const [after, setAfter] = useState<State>(empty);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setBefore(p.before ?? empty);
        setAfter(p.after ?? empty);
      } catch { /* noop */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ before, after }));
  }, [before, after]);

  const b = compute(before);
  const a = compute(after);

  const reset = () => { setBefore(empty); setAfter(empty); };

  const fields: { key: keyof State; label: string; hint?: string }[] = [
    { key: "smv", label: "SMV (min/piece)", hint: "Standard Minute Value" },
    { key: "manpower", label: "Manpower (operators)" },
    { key: "workMin", label: "Working minutes / day", hint: "e.g. 480 for 8h" },
    { key: "output", label: "Output (pieces / day)" },
    { key: "defects", label: "Defects / day" },
    { key: "costMin", label: "Labour cost / minute (USD)", hint: "Optional, for savings" },
  ];

  const Section = ({ title, state, set, accent }: { title: string; state: State; set: (s: State) => void; accent: string }) => (
    <div className="rounded-md border border-border bg-card p-4 shadow-[var(--shadow-card)]">
      <div className={`mb-3 inline-block rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${accent}`}>
        {title}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key}>
            <Label className="text-xs">{f.label}</Label>
            <Input
              type="number"
              inputMode="decimal"
              value={state[f.key]}
              onChange={(e) => set({ ...state, [f.key]: e.target.value })}
              placeholder="0"
              className="mt-1 h-9"
            />
            {f.hint && <div className="mt-0.5 text-[10px] text-muted-foreground">{f.hint}</div>}
          </div>
        ))}
      </div>
    </div>
  );

  const Metric = ({ label, before, after, unit = "", invert = false, decimals = 1 }: {
    label: string; before: number; after: number; unit?: string; invert?: boolean; decimals?: number;
  }) => {
    const d = delta(before, after);
    const positive = invert ? d < 0 : d > 0;
    const Icon = d === 0 ? null : positive ? TrendingUp : TrendingDown;
    const colour = d === 0 ? "text-muted-foreground" : positive ? "text-green-600" : "text-red-600";
    return (
      <div className="rounded-md border border-border bg-card p-4 shadow-[var(--shadow-card)]">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-2 grid grid-cols-3 items-end gap-2">
          <div>
            <div className="text-[10px] text-muted-foreground">Before</div>
            <div className="font-mono text-lg font-semibold text-primary">{fmt(before, decimals)}{unit}</div>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">After</div>
            <div className="font-mono text-lg font-semibold text-accent">{fmt(after, decimals)}{unit}</div>
          </div>
          <div className={`text-right ${colour}`}>
            {Icon && <Icon className="ml-auto h-4 w-4" />}
            <div className="font-mono text-sm font-semibold">{d > 0 ? "+" : ""}{fmt(d, 1)}%</div>
          </div>
        </div>
      </div>
    );
  };

  const savedMin = b.availableMin && a.efficiency > 0 ? (a.earnedMin - b.earnedMin) : 0;
  const cmAfter = parseFloat(after.costMin) || parseFloat(before.costMin) || 0;
  const dailySaving = savedMin * cmAfter;

  return (
    <ChapterShell
      title="Before / After KPI Tracker"
      subtitle="Enter your line data before and after the Kaizen. Efficiency, DHU, output and savings are calculated live and saved in your browser."
    >
      <div className="mb-4 flex justify-end no-print">
        <Button variant="outline" size="sm" onClick={reset} className="gap-2">
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="Before Kaizen" state={before} set={setBefore} accent="bg-secondary text-primary" />
        <Section title="After Kaizen" state={after} set={setAfter} accent="bg-accent text-accent-foreground" />
      </div>

      <h2 className="mt-10">Results</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Metric label="Efficiency" before={b.efficiency} after={a.efficiency} unit="%" />
        <Metric label="DHU (Defects/100)" before={b.dhu} after={a.dhu} unit="%" invert />
        <Metric label="Output / hour" before={b.outputPerHour} after={a.outputPerHour} />
        <Metric label="Labour cost / piece" before={b.costPerPiece} after={a.costPerPiece} unit=" USD" invert decimals={3} />
        <Metric label="Earned minutes / day" before={b.earnedMin} after={a.earnedMin} decimals={0} />
        <div className="rounded-md border-2 border-accent bg-accent/5 p-4">
          <div className="text-[10px] uppercase tracking-widest text-accent">Projected savings</div>
          <div className="mt-2 font-mono text-2xl font-bold text-primary">
            {fmt(dailySaving, 2)} <span className="text-sm font-normal text-muted-foreground">USD / day</span>
          </div>
          <div className="mt-1 font-mono text-sm text-muted-foreground">
            ≈ {fmt(dailySaving * 26, 0)} USD / month
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-md border border-border bg-secondary/30 p-4 text-xs text-muted-foreground">
        <strong className="text-primary">Formulas:</strong>{" "}
        Efficiency = (Output × SMV) ÷ (Manpower × Working min) × 100 ·{" "}
        DHU = Defects ÷ Output × 100 ·{" "}
        Output/hr = Output ÷ (Working min ÷ 60) ·{" "}
        Cost/piece = (Manpower × Working min × Cost/min) ÷ Output.
      </div>
    </ChapterShell>
  );
}
