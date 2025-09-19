import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
            من نحن
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            منصة "وَعِي" هي الوجهة الرقمية الأولى في العالم العربي للأمن السيبراني، 
            نهدف إلى بناء مجتمع واعٍ ومحمي في الفضاء الرقمي
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون المنصة الرائدة عربياً في مجال الأمن السيبراني، ونساهم في بناء 
                جيل واعٍ قادر على التعامل بثقة وأمان مع التكنولوجيا الحديثة والتهديدات الرقمية.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10">
              <Eye className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                تزويد الأفراد والمؤسسات بالمعرفة والأدوات والمهارات اللازمة لحماية أنفسهم 
                من التهديدات السيبرانية، من خلال محتوى عربي أصيل وتدريب متخصص.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">الأمان</h4>
              <p className="text-sm text-muted-foreground">نضع الأمان في المقدمة</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h4 className="font-bold mb-2">التعاون</h4>
              <p className="text-sm text-muted-foreground">نؤمن بقوة المجتمع</p>
            </div>
            <div className="text-center">
              <Target className="h-10 w-10 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">التميز</h4>
              <p className="text-sm text-muted-foreground">نسعى للتميز دائماً</p>
            </div>
            <div className="text-center">
              <Eye className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">الشفافية</h4>
              <p className="text-sm text-muted-foreground">نؤمن بالشفافية التامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى مجتمعنا</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            كن جزءاً من الثورة الرقمية الآمنة واحمِ نفسك ومؤسستك من التهديدات السيبرانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="hero" size="lg">ابدأ رحلتك الآن</Button>
            </Link>
            <Link to="/team">
              <Button variant="outline" size="lg">تعرف على فريقنا</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;