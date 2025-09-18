import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
