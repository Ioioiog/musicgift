
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Packages from "./pages/Packages";
import Order from "./pages/Order";
import Privacy from "./pages/Privacy";
import Faq from "./pages/Faq";

// Placeholder pages - these will be implemented later
const AboutPage = () => <div className="py-20 px-4 text-center">Despre Noi Page</div>;
const PackagesPage = () => <div className="py-20 px-4 text-center">Pachete & Prețuri Page</div>;
const TermsPage = () => <div className="py-20 px-4 text-center">Termeni și Condiții Page</div>;
const CookiesPage = () => <div className="py-20 px-4 text-center">Politica de Cookies Page</div>;

// Create the query client outside of the component
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="despre-noi" element={<About />} />
              <Route path="pachete" element={<Packages />} />
              <Route path="comanda" element={<Order />} />
              <Route path="faq" element={<Faq />} />
              <Route path="termeni" element={<TermsPage />} />
              <Route path="confidentialitate" element={<Privacy />} />
              <Route path="cookies" element={<CookiesPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
