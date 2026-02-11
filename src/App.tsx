
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import AdminSetup from "./pages/AdminSetup";
import Vavada from "./pages/Vavada";
import PlayFortuna from "./pages/PlayFortuna";
import Booi from "./pages/Booi";
import Jozz from "./pages/Jozz";
import Winity from "./pages/Winity";
import NotFound from "./pages/NotFound";
import AgeConfirmationModal from "./components/AgeConfirmationModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AgeConfirmationModal />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/setup" element={<AdminSetup />} />
        <Route path="/vavada" element={<Vavada />} />
        <Route path="/play-fortuna" element={<PlayFortuna />} />
        <Route path="/booi" element={<Booi />} />
        <Route path="/jozz" element={<Jozz />} />
        <Route path="/winity" element={<Winity />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;