import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

export default function Introduction() {
  return (
    <ChapterShell
      number="01"
      title="Introduction to Kaizen"
      subtitle="What Kaizen is, where it comes from, and why it is the most cost-effective improvement system available to a garment factory."
    >
      <h2>What is Kaizen?</h2>
      <p>
        <strong>Kaizen</strong> is a Japanese word combining <em>Kai</em> (change) and <em>Zen</em> (good) —
        literally <strong>“change for the better.”</strong> In manufacturing, it describes a system of{" "}
        <strong>continuous, incremental improvement</strong> driven by every employee, every shift,
        every day.
      </p>
      <p>
        It is not a one-time project, a software tool, or a consultant's framework. Kaizen is the
        organizational <strong>habit</strong> of identifying small problems, removing waste, and locking in
        a slightly better standard before moving on to the next problem.
      </p>

      <h2>The three pillars of Kaizen</h2>
      <ol>
        <li><strong>Perceptiveness</strong> — every Kaizen begins with an <em>identified problem</em>. No problem, no Kaizen.</li>
        <li><strong>Idea development</strong> — a small, cross-functional team (operators included) generates ideas to solve it.</li>
        <li><strong>Decision, implementation & effect</strong> — the team picks the best idea, implements it physically, and measures the result.</li>
      </ol>

      <h2>Why Kaizen fits the sewing floor</h2>
      <p>
        A sewing line is a chain of 20–60 dependent operations. A 5-second imbalance at one machine
        cascades into hours of lost output across a shift. Capital-heavy “big-bang” automation rarely
        addresses this — but small, daily improvements compound dramatically.
      </p>
      <ul>
        <li>Operators see waste before engineers do — Kaizen captures their insight.</li>
        <li>Style changes are constant — improvements must be cheap and reversible.</li>
        <li>Margins are thin — every second saved on SMV converts directly to profit.</li>
      </ul>

      <FloorExample>
        On a basic T-shirt line of 28 operators producing 1,800 pieces/day, removing just{" "}
        <strong>3 seconds of unnecessary handling</strong> per piece releases roughly{" "}
        <strong>90 minutes of capacity per day</strong> — equivalent to ~45 extra pieces with zero added cost.
      </FloorExample>

      <h2>Kaizen vs. a traditional improvement project</h2>
      <ul>
        <li><strong>Scope:</strong> small and local vs. large and cross-departmental</li>
        <li><strong>Cost:</strong> near-zero vs. capital expenditure</li>
        <li><strong>Speed:</strong> implemented within days vs. months</li>
        <li><strong>Owner:</strong> the operator and supervisor vs. an engineering team</li>
        <li><strong>Risk:</strong> low and reversible vs. high and disruptive</li>
      </ul>

      <h2>How to use this playbook</h2>
      <p>
        Read Foundations (Chapters 1–4) once with your management team to align on philosophy. Use the
        Implementation chapters (5–9) as the operating manual for every Kaizen event. Print the
        Templates and bring them to the floor. Revisit the Reference section whenever in doubt.
      </p>
    </ChapterShell>
  );
}
