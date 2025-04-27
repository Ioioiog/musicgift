import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

// Placeholder pages - these will be implemented later
const AboutPage = () => <div className="py-20 px-4 text-center">Despre Noi Page</div>;
const PackagesPage = () => <div className="py-20 px-4 text-center">Pachete & Prețuri Page</div>;
const OrderPage = () => <div className="py-20 px-4 text-center">Comandă Page</div>;
const FaqPage = () => <div className="py-20 px-4 text-center">Întrebări Frecvente Page</div>;
const TermsPage = () => <div className="py-20 px-4 text-center">Termeni și Condiții Page</div>;
const PrivacyPage = () => <div className="py-20 px-4 text-center">Politica de Confidențialitate Page</div>;
const CookiesPage = () => <div className="py-20 px-4 text-center">Politica de Cookies Page</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="despre-noi" element={<About />} />
            <Route path="pachete" element={<PackagesPage />} />
            <Route path="comanda" element={<OrderPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="termeni" element={<TermsPage />} />
            <Route path="confidentialitate" element={<PrivacyPage />} />
            <Route path="cookies" element={<CookiesPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
