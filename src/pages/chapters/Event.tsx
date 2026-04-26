import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

const days = [
  { d: "Monday", title: "Define & observe",
    items: ["Kick-off with sponsor (08:30)", "Confirm problem statement & target", "Time study × 10 cycles on the focus operation", "Defect Pareto from last 7 days", "Video the operation", "End of day: current-state map"] },
  { d: "Tuesday", title: "Analyze",
    items: ["Walk the gemba as a team", "5 Whys on top defect", "Fishbone on focus operation", "Identify and red-tag wastes", "End of day: prioritized waste list"] },
  { d: "Wednesday", title: "Design & trial",
    items: ["Brainstorm ≥ 7 alternatives", "Score impact vs ease", "Select top 3", "Trial each on one machine for 30–60 min", "End of day: chosen solution + draft SOP"] },
  { d: "Thursday", title: "Implement",
    items: ["Roll out to full operation / line", "Train every affected operator", "Update visual standards", "Re-time, re-check defects", "End of day: before/after KPI snapshot"] },
  { d: "Friday", title: "Standardize & present",
    items: ["Lock the new standard (SOP, layout, kit)", "Schedule sustaining audits (7, 14, 30 days)", "Complete the A3 report", "Present to management (max 15 min)", "Celebrate the team"] },
];

const roles = [
  ["Sponsor", "Factory or production manager. Removes blockers, attends Mon kick-off and Fri readout."],
  ["Team Leader", "Senior IE or production engineer. Owns the workflow and timing across the week."],
  ["Operator(s)", "1–2 operators from the focus operation. Non-negotiable for legitimacy and ideas."],
  ["Mechanic", "On-call all week. Implements attachment / machine modifications same-day."],
  ["Quality auditor", "Provides defect data, validates that improvements don't degrade quality."],
  ["Supervisor", "Owns the line after roll-out. Trained on the new standard during the week."],
];

export default function Event() {
  return (
    <ChapterShell
      number="07"
      title="Running a Kaizen Event (1-Week Blitz)"
      subtitle="The proven 5-day format: focused team, single operation, measurable result by Friday afternoon."
    >
      <h2>Why one week?</h2>
      <p>
        A Kaizen event compresses the 9-step process into 5 working days. The deadline forces decisions,
        prevents scope creep, and demonstrates that change can happen <em>this week</em> — not in three
        months. Anything longer becomes a project; anything shorter usually skips simulation.
      </p>

      <h2>Pre-event preparation (1 week before)</h2>
      <ul>
        <li>Sponsor selects the focus area and signs the event charter (see Templates).</li>
        <li>Baseline data collected: efficiency, DHU, WIP, output/hour for the last 14 days.</li>
        <li>Team members released from regular duties for the full week.</li>
        <li>“War room” reserved next to the line — not in the office building.</li>
        <li>Mechanics, sample room and stores notified to expect priority requests.</li>
      </ul>

      <h2>Daily agenda</h2>
      <div className="my-6 space-y-4">
        {days.map((day) => (
          <div key={day.d} className="rounded-md border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="flex items-baseline justify-between border-b border-border bg-secondary/40 px-4 py-2">
              <div className="font-mono text-xs uppercase tracking-widest text-accent">{day.d}</div>
              <div className="text-sm font-semibold text-primary">{day.title}</div>
            </div>
            <ul className="m-0 list-disc px-8 py-3 text-sm text-foreground/85">
              {day.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2>Team & roles</h2>
      <div className="my-6 overflow-hidden rounded-md border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary text-primary">
            <tr><th className="px-4 py-2 text-left">Role</th><th className="px-4 py-2 text-left">Responsibility</th></tr>
          </thead>
          <tbody>
            {roles.map(([r, d]) => (
              <tr key={r} className="border-t border-border">
                <td className="px-4 py-2 font-medium text-primary">{r}</td>
                <td className="px-4 py-2 text-muted-foreground">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FloorExample title="What good looks like by Friday 16:00">
        Updated SOP signed and posted at the operation • before/after KPI sheet on the line board •
        A3 report displayed in the war room • all operators trained • sustaining audit dates scheduled
        in the supervisor's diary • photos of the change saved to the Kaizen log.
      </FloorExample>

      <h2>Sustaining after the event</h2>
      <ul>
        <li><strong>Day 7:</strong> sustaining audit by team leader — is the new standard being followed?</li>
        <li><strong>Day 14:</strong> KPI re-check — improvement holding?</li>
        <li><strong>Day 30:</strong> sponsor sign-off — improvement locked in, team disbanded.</li>
      </ul>
    </ChapterShell>
  );
}
