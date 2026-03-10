import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ONama from "./pages/ONama";
import Kontakt from "./pages/Kontakt";
import RezanjeBetona from "./pages/services/RezanjeBetona";
import BusenjeBetona from "./pages/services/BusenjeBetona";
import BusenjeFrezanje from "./pages/services/BusenjeFrezanje";
import Ojacanja from "./pages/services/Ojacanja";
import Rusenje from "./pages/services/Rusenje";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/usluge/rezanje-betona" element={<RezanjeBetona />} />
          <Route path="/usluge/busenje-betona" element={<BusenjeBetona />} />
          <Route path="/usluge/brusenje-frezanje" element={<BusenjeFrezanje />} />
          <Route path="/usluge/ojacanja" element={<Ojacanja />} />
          <Route path="/usluge/rusenje" element={<Rusenje />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
