import { ChapterShell } from "@/components/ChapterShell";
import { FloorExample } from "@/components/FloorExample";

export default function History() {
  return (
    <ChapterShell
      number="02"
      title="History & Evolution of Kaizen"
      subtitle="From post-war Japan to today's apparel mega-factories."
    >
      <h2>Origins: post-war Japan</h2>
      <p>
        After World War II, Japanese industry faced devastated infrastructure, capital scarcity and
        demanding quality expectations from export markets. American statisticians{" "}
        <strong>W. Edwards Deming</strong> and <strong>Joseph M. Juran</strong> introduced statistical
        quality control to Japanese executives in the late 1940s and 1950s. Combined with Japan's
        cultural emphasis on collective discipline, this seeded what became the{" "}
        <strong>Toyota Production System (TPS)</strong>.
      </p>

      <h2>Toyota and the codification of Kaizen</h2>
      <p>
        Engineers <strong>Taiichi Ohno</strong> and <strong>Shigeo Shingo</strong> at Toyota
        formalized concepts that today live inside Kaizen: Just-In-Time, Jidoka (autonomation),
        SMED (single-minute exchange of dies), and the relentless elimination of <em>Muda</em>
        (waste), <em>Mura</em> (unevenness) and <em>Muri</em> (overburden).
      </p>
      <p>
        <strong>Masaaki Imai's</strong> 1986 book <em>“Kaizen: The Key to Japan's Competitive Success”</em>
        introduced the term to Western management.
      </p>

      <h2>Kaizen reaches the West</h2>
      <p>
        Through the 1990s, Kaizen merged with Western Lean Manufacturing, Six Sigma and TQM. The
        often-cited example of a U.S. wood-window company in Iowa demonstrated that small,
        cellular, low-cost improvements outperformed expensive automation when product mix
        changed frequently — exactly the situation faced by garment factories.
      </p>

      <h2>Kaizen in the apparel industry</h2>
      <ul>
        <li>1990s — Japanese and Korean garment manufacturers in South-East Asia adopt 5S and TPM.</li>
        <li>2000s — Bangladeshi, Vietnamese and Indian factories formalize Kaizen following buyer audits (Walmart, H&M, Inditex).</li>
        <li>2010s — Lean cells, modular production and bundle-less single-piece flow spread across knits and woven lines.</li>
        <li>Today — Kaizen is a baseline expectation in Tier-1 supply chains, often combined with digital line-balancing software and IoT machine monitoring.</li>
      </ul>

      <FloorExample>
        A typical Tier-1 shirt factory in Dhaka or Ho Chi Minh City now runs <strong>100–300 documented
        Kaizens per month</strong> across its sewing floors, contributing 6–12% efficiency gain
        annually with effectively zero capital expenditure.
      </FloorExample>

      <h2>Why the history matters</h2>
      <p>
        Kaizen succeeded in Japan because management trusted the operator. It failed in many Western
        attempts because leaders treated it as a cost-cutting program. The historical lesson:{" "}
        <strong>Kaizen is a culture before it is a method.</strong>
      </p>
    </ChapterShell>
  );
}
