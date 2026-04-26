import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

export default function Leadership() {
  return (
    <ChapterShell
      number="09"
      title="Kaizen Leadership & Culture"
      subtitle="Tools and methods are easy to copy. Culture is what makes them stick."
    >
      <h2>The role of the Kaizen leader</h2>
      <p>
        A Kaizen leader is not the person with the best ideas — it is the person who creates the
        conditions for everyone else to contribute. Their job is to <strong>protect, encourage and
        amplify</strong> the small daily improvements coming from the floor.
      </p>

      <h2>Eight behaviours of an effective Kaizen leader</h2>
      <ul>
        <li><strong>Walks the gemba daily</strong> — at least 30 minutes on the floor, observing, not just inspecting.</li>
        <li><strong>Asks questions instead of giving answers</strong> — “What do you think we should try?”</li>
        <li><strong>Responds to every suggestion within 7 days</strong> — even if the answer is no.</li>
        <li><strong>Celebrates small wins publicly</strong> — by name, on a board, in front of peers.</li>
        <li><strong>Owns failures personally</strong> — never blames the operator for a system problem.</li>
        <li><strong>Protects time for Kaizen events</strong> — even when the order book is full.</li>
        <li><strong>Trains the next leader</strong> — Kaizen leadership must propagate.</li>
        <li><strong>Measures the right things</strong> — number of ideas implemented, not just savings.</li>
      </ul>

      <h2>Gemba walks — how to do them well</h2>
      <p>
        A gemba walk is structured floor observation, not a tour. Each walk has a single purpose
        (safety, flow, quality, 5S, or Kaizen sustainment) and uses a checklist. Talk to operators,
        not just supervisors. End every walk with at least one written follow-up action assigned
        to a named person with a date.
      </p>

      <FloorExample title="A 20-minute gemba walk template">
        <strong>5 min:</strong> Observe the line head — output board, andon status, supervisor presence.
        <br />
        <strong>5 min:</strong> Walk the line — note any operator waiting, any large WIP build-up, any
        broken machine, any defect being reworked at the station.
        <br />
        <strong>5 min:</strong> Pick one workstation — ask the operator one question: “What gets in your
        way most often?”
        <br />
        <strong>5 min:</strong> Close at the line head — share one observation, agree one action.
      </FloorExample>

      <h2>Suggestion systems that actually work</h2>
      <ul>
        <li><strong>Low friction</strong> — a one-page form (see template), or a verbal suggestion captured by the supervisor.</li>
        <li><strong>Fast response</strong> — 7-day maximum to a decision, posted on a public board.</li>
        <li><strong>High implementation rate</strong> — target 60%+ of suggestions implemented within 30 days. If it's lower, the system is rejecting ideas, not improving them.</li>
        <li><strong>Recognition every month</strong> — top contributors named at the all-hands meeting.</li>
        <li><strong>No punishment for bad ideas</strong> — ever.</li>
      </ul>

      <h2>The leader vs the manager</h2>
      <div className="my-6 overflow-hidden rounded-md border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary text-primary">
            <tr>
              <th className="px-4 py-2 text-left">Traditional manager</th>
              <th className="px-4 py-2 text-left">Kaizen leader</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Tells people what to do", "Asks people what they would do"],
              ["Sees the floor as a cost centre", "Sees the floor as the source of value"],
              ["Punishes problem reporters", "Thanks problem reporters"],
              ["Wants quick fixes", "Wants root causes"],
              ["Measures output only", "Measures ideas, learning, and output"],
              ["Decisions in the office", "Decisions at the gemba"],
            ].map(([m, l]) => (
              <tr key={m} className="border-t border-border">
                <td className="px-4 py-2 text-muted-foreground">{m}</td>
                <td className="px-4 py-2 text-primary">{l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Building the culture — the first 12 months</h2>
      <ol>
        <li><strong>Months 1–3:</strong> Train all supervisors and IEs in the 9-step process. Run 1 pilot event per line. Launch the suggestion system.</li>
        <li><strong>Months 4–6:</strong> Two events per line per month. Daily output boards on every line. Weekly 5S audits.</li>
        <li><strong>Months 7–9:</strong> Operator-led Kaizens (without engineer leadership) begin. Monthly recognition events.</li>
        <li><strong>Months 10–12:</strong> Kaizen scorecard in management review. Sustaining audits institutional. Next year's targets set bottom-up.</li>
      </ol>

      <p className="mt-8 rounded-md border-l-4 border-accent bg-accent/5 p-4 text-base font-semibold italic text-primary">
        “As a Kaizen leader, you must be willing to continuously encourage workers to develop new
        ways to improve efficiency.”
      </p>
    </ChapterShell>
  );
}
