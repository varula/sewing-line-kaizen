import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

export default function Sustain() {
  return (
    <ChapterShell
      number="08"
      title="Standardizing & Sustaining Kaizen"
      subtitle="The hardest part is not making the change — it is keeping it after the team disbands."
    >
      <h2>Why improvements regress</h2>
      <p>
        Within 30 days of a Kaizen event, 40–70% of unsupported improvements quietly revert.
        The causes are predictable:
      </p>
      <ul>
        <li>The SOP was never updated — operators have no reference.</li>
        <li>New operators were trained on the old method by a peer.</li>
        <li>The visual standard at the workstation was removed for a style change and never restored.</li>
        <li>An attachment broke; the mechanic restored the old setup because there was no spec.</li>
        <li>No one is auditing — so no one notices when the standard slips.</li>
      </ul>

      <h2>The standardization checklist</h2>
      <p>
        Before declaring a Kaizen complete, every item below must be done:
      </p>
      <ul>
        <li><strong>Updated SOP</strong> — text, photo and video — signed by IE, Quality and Production.</li>
        <li><strong>Visual standard at the workstation</strong> — A4 photo standard above the machine.</li>
        <li><strong>Operator retraining record</strong> — every affected operator signed off.</li>
        <li><strong>Updated layout drawing</strong> — if anything physical moved.</li>
        <li><strong>Attachment / kit specification</strong> — drawing or photo, copy held in mechanics' store.</li>
        <li><strong>Updated SMV</strong> — work-study book reflects the new method.</li>
        <li><strong>Quality check standard updated</strong> — auditors know the new accept/reject criteria.</li>
        <li><strong>Sustaining audit schedule</strong> — calendar invites placed for day 7, 14, 30, 60.</li>
      </ul>

      <h2>Visual management — making the standard self-policing</h2>
      <p>
        A good standard is visible from 3 metres away. The operator and supervisor should see at a
        glance: what is being made, what the target is, what the actual is, what the standard method
        is, and where any abnormality lies.
      </p>
      <ul>
        <li><strong>Hourly output board</strong> at the line head — target vs actual, by hour.</li>
        <li><strong>Method standard</strong> at every workstation — photo + key points.</li>
        <li><strong>Defect-of-the-day</strong> — physical defective garment displayed with cause.</li>
        <li><strong>Andon</strong> — coloured light or buzzer for breakdown / quality call.</li>
        <li><strong>5S audit score</strong> posted weekly at the line.</li>
      </ul>

      <h2>Audit cadence</h2>
      <ul>
        <li><strong>Daily (supervisor):</strong> spot-check 2 standards on the line.</li>
        <li><strong>Weekly (IE):</strong> 5S audit + method audit on 1 operation.</li>
        <li><strong>Monthly (production manager):</strong> review of all Kaizens older than 30 days — still in place?</li>
        <li><strong>Quarterly (factory manager):</strong> Kaizen scorecard — events run, ideas implemented, savings sustained.</li>
      </ul>

      <FloorExample>
        A simple test: pick any Kaizen from 60+ days ago. Walk to the workstation. Can the current
        operator describe the change and why it was made? Is the visual standard still on the wall?
        Is the SMV in the work-study book the post-Kaizen value? If yes to all three, your
        sustaining system works. If no, fix the system before running more events.
      </FloorExample>

      <h2>Procedures & policies — make Kaizen the way work is done</h2>
      <ul>
        <li>Written suggestion-system procedure — how ideas are submitted, reviewed, decided, rewarded.</li>
        <li>Maximum decision time — every idea answered within 7 days.</li>
        <li>Reward structure — non-monetary recognition for any implemented idea, monetary for high-impact ideas.</li>
        <li>Kaizen calendar — minimum number of events per line, per quarter.</li>
        <li>Standard A3 template used factory-wide — same format, same review.</li>
      </ul>
    </ChapterShell>
  );
}
