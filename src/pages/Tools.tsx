import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, Shield, Key, Search, FileText, Zap, Globe } from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      title: "أدوات الفحص والتحليل",
      tools: [
        {
          icon: Link,
          name: "فاحص الروابط",
          description: "فحص الروابط المشبوهة وكشف محاولات التصيد",
          status: "مجاني",
          link: "/tools/link-checker"
        },
        {
          icon: Search,
          name: "تقرير الظل الرقمي",
          description: "فحص تسريب بياناتك الشخصية على الإنترنت",
          status: "مجاني",
          link: "/tools/digital-footprint"
        },
        {
          icon: FileText,
          name: "محلل البريد الإلكتروني",
          description: "تحليل رؤوس البريد وكشف الرسائل المزيفة",
          status: "مجاني",
          link: "/tools/email-analyzer"
        }
      ]
    },
    {
      title: "أدوات الحماية",
      tools: [
        {
          icon: Key,
          name: "مولد كلمات المرور",
          description: "إنشاء كلمات مرور قوية ومعقدة",
          status: "مجاني", 
          link: "/tools/password-generator"
        },
        {
          icon: Shield,
          name: "مدقق قوة كلمة المرور",
          description: "تقييم قوة كلمات المرور الحالية",
          status: "مجاني",
          link: "/tools/password-checker"
        },
        {
          icon: Globe,
          name: "فاحص أمان الموقع",
          description: "فحص أمان المواقع والشهادات الرقمية",
          status: "مجاني",
          link: "/tools/website-security"
        }
      ]
    },
    {
      title: "أدوات متقدمة",
      tools: [
        {
          icon: Zap,
          name: "مختبر الأدوات",
          description: "بيئة آمنة لتجربة أدوات الأمن السيبراني",
          status: "مميز",
          link: "/tools/lab"
        },
        {
          icon: Search,
          name: "محلل البرمجيات الخبيثة",
          description: "فحص الملفات والبرامج للكشف عن البرمجيات الضارة",
          status: "مميز",
          link: "/tools/malware-analyzer"
        },
        {
          icon: Shield,
          name: "أداة اختبار الاختراق",
          description: "أدوات احترافية لاختبار أمان الشبكات",
          status: "مميز",
          link: "/tools/penetration-testing"
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: "فحص سريع للرابط",
      description: "أدخل الرابط للفحص الفوري",
      action: "فحص الآن",
      link: "/tools/link-checker"
    },
    {
      title: "توليد كلمة مرور",
      description: "إنشاء كلمة مرور قوية بنقرة واحدة",
      action: "إنشاء الآن",
      link: "/tools/password-generator"
    },
    {
      title: "فحص البريد الإلكتروني",
      description: "تحقق من أمان بريدك الإلكتروني",
      action: "فحص الآن", 
      link: "/tools/digital-footprint"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
            أدوات الحماية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الأدوات المتقدمة لحماية بياناتك وفحص التهديدات السيبرانية
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">إجراءات سريعة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-cyber transition-bounce">
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-muted-foreground mb-4">{action.description}</p>
                <Link to={action.link}>
                  <Button variant="hero" size="sm">{action.action}</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-8">{category.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Link key={toolIndex} to={tool.link}>
                    <Card className="p-6 hover:shadow-cyber transition-bounce group h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                          <tool.icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge 
                          variant={tool.status === "مجاني" ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {tool.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">
                        {tool.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {tool.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:border-primary transition-smooth"
                      >
                        استخدم الأداة
                      </Button>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج أدوات متقدمة أكثر؟</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              احصل على وصول كامل لجميع الأدوات المتقدمة ومختبر الأمن السيبراني مع الاشتراك المميز
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button variant="hero" size="lg">اشترك الآن</Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg">تواصل للاستشارة</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;