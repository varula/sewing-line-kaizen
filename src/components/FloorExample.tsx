import { ReactNode } from "react";

export function FloorExample({ children, title = "Sewing Floor Example" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="floor-callout">
      <div className="floor-callout-title">{title}</div>
      <div className="text-sm text-foreground/85">{children}</div>
    </aside>
  );
}
