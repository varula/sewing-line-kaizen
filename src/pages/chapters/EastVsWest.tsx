import { ChapterShell } from "@/components/ChapterShell";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows: [string, string, string][] = [
  ["Effect", "Long-term, lasting, undramatic", "Short-term, dramatic"],
  ["Pace", "Small steps, continuous", "Big steps, intermittent"],
  ["Timeframe", "Continuous and incremental", "Sudden and volatile"],
  ["Change driver", "Conventional know-how & state of the art", "Technological breakthrough"],
  ["Investment", "Little, but great effort to maintain", "Large, with little effort to maintain"],
  ["People orientation", "Collective spirit, teamwork, system", "Individual ideas and efforts"],
  ["Motto", "Preservation and improvement", "Scrap and rebuild"],
  ["Source of value", "Process — better process gives better results", "Result — outcomes alone matter"],
  ["Decision rights", "Operator and supervisor empowered", "Management and engineering only"],
  ["Risk profile", "Low, reversible", "High, disruptive"],
];

export default function EastVsWest() {
  return (
    <ChapterShell
      number="03"
      title="East vs West: Kaizen vs Innovation"
      subtitle="Two valid philosophies of improvement — and why a sewing floor needs the eastern model first."
    >
      <p>
        Western management traditions favour <strong>innovation</strong> — large, capital-intensive
        breakthroughs led by specialists. Kaizen favours <strong>continuous improvement</strong> driven
        by everyone. Both produce value, but only one is sustainable on a high-mix, low-margin sewing
        floor without significant capital.
      </p>

      <div className="my-8 overflow-hidden rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="font-semibold text-primary">Dimension</TableHead>
              <TableHead className="font-semibold text-primary">Kaizen (Eastern)</TableHead>
              <TableHead className="font-semibold text-primary">Innovation (Western)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(([d, k, w]) => (
              <TableRow key={d}>
                <TableCell className="font-medium">{d}</TableCell>
                <TableCell>{k}</TableCell>
                <TableCell className="text-muted-foreground">{w}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2>Common Western philosophies to be aware of</h2>
      <ul>
        <li><strong>Innovation-only:</strong> improvement is delegated to a designated department.</li>
        <li><strong>Performance management:</strong> managers visit the floor only to push numbers.</li>
        <li><strong>Bottom-line bias:</strong> changes are funded only when they save money this quarter.</li>
        <li><strong>Tradition:</strong> “If it isn't broken, don't fix it.”</li>
        <li><strong>Profit sharing:</strong> rewards flow only to employees producing measurable revenue.</li>
      </ul>

      <h2>The integrated path</h2>
      <p>
        World-class garment manufacturers do <strong>both</strong>: Kaizen runs every day on the line,
        while a small innovation team prepares the next-generation cell, machine, or layout. Kaizen
        prepares the organization to absorb innovation without disruption.
      </p>
    </ChapterShell>
  );
}
