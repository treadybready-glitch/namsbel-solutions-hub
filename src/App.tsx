import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminInquiries from "./pages/AdminInquiries";
import AdminNewsletter from "./pages/AdminNewsletter";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ITSolutions from "./pages/ITSolutions";
import CyberSecurity from "./pages/CyberSecurity";
import SAPServices from "./pages/SAPServices";
import HRSolutions from "./pages/HRSolutions";
import TalentScouting from "./pages/TalentScouting";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/sap-services" element={<SAPServices />} />
          <Route path="/hr-solutions" element={<HRSolutions />} />
          <Route path="/talent-scouting" element={<TalentScouting />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/inquiries" element={<AdminInquiries />} />
          <Route path="/admin/newsletter" element={<AdminNewsletter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
