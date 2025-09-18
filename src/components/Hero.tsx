import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background"></div>
        <img 
          src={heroImage} 
          alt="الأمن السيبراني - حماية رقمية متقدمة" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient-primary leading-tight">
              وَعِي
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
              منصة الأمن السيبراني الشاملة
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              الوجهة الرقمية الأولى في العالم العربي للتوعية والحماية والتدريب في مجال الأمن السيبراني
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-48">
              <ArrowLeft className="mr-2 h-5 w-5" />
              ابدأ رحلتك الآن
            </Button>
            <Button variant="outline" size="lg" className="min-w-48">
              استكشف المنصة
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary mb-2" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-cyber">+10,000</h3>
              <p className="text-muted-foreground">مستخدم محمي</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Zap className="h-8 w-8 text-accent mb-2" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-cyber">+500</h3>
              <p className="text-muted-foreground">أداة حماية</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-secondary mb-2" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-cyber">+50</h3>
              <p className="text-muted-foreground">خبير معتمد</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};