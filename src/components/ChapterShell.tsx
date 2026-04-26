import { ReactNode } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  number?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ChapterShell({ number, title, subtitle, children }: Props) {
  return (
    <article className="px-6 py-8 md:px-12 md:py-12">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
        <div>
          {number && (
            <div className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">
              Chapter {number}
            </div>
          )}
          <h1 className="text-3xl font-semibold text-primary md:text-4xl">{title}</h1>
          {subtitle && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.print()}
          className="no-print gap-2"
        >
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </header>
      <div className="chapter-prose">{children}</div>
    </article>
  );
}
