import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/chapters/Introduction";
import History from "./pages/chapters/History";
import EastVsWest from "./pages/chapters/EastVsWest";
import Philosophies from "./pages/chapters/Philosophies";
import Process from "./pages/chapters/Process";
import Tools from "./pages/chapters/Tools";
import Event from "./pages/chapters/Event";
import Sustain from "./pages/chapters/Sustain";
import Leadership from "./pages/chapters/Leadership";
import SuggestionForm from "./pages/templates/SuggestionForm";
import A3Charter from "./pages/templates/A3Charter";
import FiveSAudit from "./pages/templates/FiveSAudit";
import KpiTracker from "./pages/templates/KpiTracker";
import DosDonts from "./pages/reference/DosDonts";
import Glossary from "./pages/reference/Glossary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-background">
            <AppSidebar />
            <div className="flex flex-1 flex-col">
              <header className="no-print sticky top-0 z-30 flex h-12 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur">
                <SidebarTrigger />
                <div className="text-xs text-muted-foreground">
                  Kaizen Implementation Playbook · Garment & Sewing Line Edition
                </div>
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/introduction" element={<Introduction />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/east-vs-west" element={<EastVsWest />} />
                  <Route path="/philosophies" element={<Philosophies />} />
                  <Route path="/process" element={<Process />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/sustain" element={<Sustain />} />
                  <Route path="/leadership" element={<Leadership />} />
                  <Route path="/suggestion-form" element={<SuggestionForm />} />
                  <Route path="/a3-charter" element={<A3Charter />} />
                  <Route path="/5s-audit" element={<FiveSAudit />} />
                  <Route path="/kpi-tracker" element={<KpiTracker />} />
                  <Route path="/dos-donts" element={<DosDonts />} />
                  <Route path="/glossary" element={<Glossary />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
