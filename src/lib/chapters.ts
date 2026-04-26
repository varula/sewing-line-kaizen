import {
  BookOpen, History, GitCompare, Lightbulb, ListChecks, Wrench,
  CalendarDays, ShieldCheck, Users, FileText, ClipboardList,
  CheckSquare, BarChart3, ThumbsUp, BookMarked, LucideIcon,
} from "lucide-react";

export type ChapterMeta = {
  slug: string;
  title: string;
  short: string;
  group: "Foundations" | "Implementation" | "Templates & Tools" | "Reference";
  icon: LucideIcon;
  blurb: string;
};

export const chapters: ChapterMeta[] = [
  { slug: "introduction", title: "1. Introduction to Kaizen", short: "Introduction", group: "Foundations", icon: BookOpen, blurb: "What Kaizen is and why it matters on the sewing floor." },
  { slug: "history", title: "2. History & Evolution", short: "History", group: "Foundations", icon: History, blurb: "From Toyota to global apparel manufacturing." },
  { slug: "east-vs-west", title: "3. East vs West", short: "East vs West", group: "Foundations", icon: GitCompare, blurb: "Kaizen vs Western innovation philosophies." },
  { slug: "philosophies", title: "4. Core Kaizen Philosophies", short: "Philosophies", group: "Foundations", icon: Lightbulb, blurb: "Ten guiding principles, framed for garment factories." },

  { slug: "process", title: "5. The 9-Step Implementation Process", short: "9-Step Process", group: "Implementation", icon: ListChecks, blurb: "From problem identification to standardization." },
  { slug: "tools", title: "6. Kaizen Tools for the Sewing Line", short: "Tools", group: "Implementation", icon: Wrench, blurb: "7 Wastes, 5S, PDCA, 5 Whys, Fishbone, line balancing." },
  { slug: "event", title: "7. Running a Kaizen Event", short: "Kaizen Event", group: "Implementation", icon: CalendarDays, blurb: "The 1-week blitz: roles, daily agenda, deliverables." },
  { slug: "sustain", title: "8. Standardizing & Sustaining", short: "Standardize", group: "Implementation", icon: ShieldCheck, blurb: "SOPs, visual management and audit cadence." },
  { slug: "leadership", title: "9. Kaizen Leadership & Culture", short: "Leadership", group: "Implementation", icon: Users, blurb: "Gemba walks, suggestion systems, recognition." },

  { slug: "suggestion-form", title: "Kaizen Suggestion Form", short: "Suggestion Form", group: "Templates & Tools", icon: FileText, blurb: "Operator-friendly idea capture form (printable)." },
  { slug: "a3-charter", title: "A3 Report & Event Charter", short: "A3 / Charter", group: "Templates & Tools", icon: ClipboardList, blurb: "Standard A3 problem-solving template." },
  { slug: "5s-audit", title: "5S Sewing Floor Audit", short: "5S Audit", group: "Templates & Tools", icon: CheckSquare, blurb: "Interactive 25-point scoring checklist." },
  { slug: "kpi-tracker", title: "Before / After KPI Tracker", short: "KPI Tracker", group: "Templates & Tools", icon: BarChart3, blurb: "Live SMV, efficiency, DHU & savings calculator." },

  { slug: "dos-donts", title: "Kaizen Do's & Don'ts", short: "Do's & Don'ts", group: "Reference", icon: ThumbsUp, blurb: "Quick reference for facilitators." },
  { slug: "glossary", title: "Glossary", short: "Glossary", group: "Reference", icon: BookMarked, blurb: "Lean & garment industry terminology." },
];

export const groupOrder = ["Foundations", "Implementation", "Templates & Tools", "Reference"] as const;
