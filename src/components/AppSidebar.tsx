import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Search, Factory } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { chapters, groupOrder } from "@/lib/chapters";

export function AppSidebar() {
  const [q, setQ] = useState("");
  const { pathname } = useLocation();

  const filtered = chapters.filter(
    (c) => c.title.toLowerCase().includes(q.toLowerCase()) ||
           c.blurb.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <NavLink to="/" className="flex items-center gap-2 text-sidebar-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-sidebar-primary text-sidebar-primary-foreground">
            <Factory className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Kaizen Playbook</div>
            <div className="text-[11px] uppercase tracking-wider text-sidebar-foreground/60">Sewing Line Edition</div>
          </div>
        </NavLink>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-2.5 top-2.5 h-3.5 w-3.5 text-sidebar-foreground/50" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search chapters…"
            className="h-8 border-sidebar-border bg-sidebar-accent/40 pl-8 text-xs text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus-visible:ring-sidebar-ring"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-1 py-2">
        {groupOrder.map((group) => {
          const items = filtered.filter((c) => c.group === group);
          if (!items.length) return null;
          return (
            <SidebarGroup key={group}>
              <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-sidebar-foreground/50">
                {group}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((c) => {
                    const to = `/${c.slug}`;
                    const active = pathname === to;
                    return (
                      <SidebarMenuItem key={c.slug}>
                        <SidebarMenuButton asChild isActive={active}>
                          <NavLink to={to} className="flex items-center gap-2">
                            <c.icon className="h-4 w-4 shrink-0" />
                            <span className="truncate text-[13px]">{c.short}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
