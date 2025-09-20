import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Awareness from "./pages/Awareness";
import Protection from "./pages/Protection";
import Courses from "./pages/Courses";
import Challenges from "./pages/Challenges";
import Consulting from "./pages/Consulting";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Help from "./pages/Help";
import Articles from "./pages/Articles";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Pricing from "./pages/Pricing";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
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
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/protection" element={<Protection />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
