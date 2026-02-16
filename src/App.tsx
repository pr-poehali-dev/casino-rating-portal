
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgeConfirmationModal from "./components/AgeConfirmationModal";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const AdminSetup = lazy(() => import("./pages/AdminSetup"));
const Vavada = lazy(() => import("./pages/Vavada"));
const PlayFortuna = lazy(() => import("./pages/PlayFortuna"));
const Booi = lazy(() => import("./pages/Booi"));
const Jozz = lazy(() => import("./pages/Jozz"));
const Winity = lazy(() => import("./pages/Winity"));
const Martin = lazy(() => import("./pages/Martin"));
const Irwin = lazy(() => import("./pages/Irwin"));
const Privacy = lazy(() => import("./pages/Privacy"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogBonusPowitalny = lazy(() => import("./pages/BlogBonusPowitalny"));
const BlogWagering = lazy(() => import("./pages/BlogWagering"));
const BlogNoDeposit = lazy(() => import("./pages/BlogNoDeposit"));
const BlogRTP = lazy(() => import("./pages/BlogRTP"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = 'FHY1vAJNhfzw9HgtS4XdiRp46Np1Tv1p8iTHmHT4hHc';
    document.head.appendChild(meta);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AgeConfirmationModal />
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-primary">Ładowanie...</div></div>}>
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
            <Route path="/martin" element={<Martin />} />
            <Route path="/irwin" element={<Irwin />} />
            <Route path="/polityka-prywatnosci" element={<Privacy />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/jak-dziala-bonus-powitalny" element={<BlogBonusPowitalny />} />
            <Route path="/blog/czym-jest-wagering" element={<BlogWagering />} />
            <Route path="/blog/czy-bonus-bez-depozytu-sie-oplaca" element={<BlogNoDeposit />} />
            <Route path="/blog/sloty-z-wysokim-rtp" element={<BlogRTP />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;