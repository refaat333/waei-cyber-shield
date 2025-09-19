import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "مجاني",
      price: "0",
      period: "دائماً",
      description: "للبدء في رحلة الأمن السيبراني",
      icon: Shield,
      popular: false,
      features: [
        "الوصول للمحتوى الأساسي",
        "3 أدوات حماية مجانية",
        "مقالات التوعية اليومية",
        "منتدى المجتمع",
        "دعم فني أساسي"
      ],
      limitations: [
        "محدود بـ 5 دورات شهرياً",
        "لا يشمل الشهادات",
        "بدون أدوات متقدمة"
      ]
    },
    {
      name: "مميز",
      price: "49",
      period: "شهرياً", 
      description: "للمحترفين والطلاب الجادين",
      icon: Star,
      popular: true,
      features: [
        "جميع ميزات الخطة المجانية",
        "وصول كامل لجميع الدورات",
        "شهادات معتمدة",
        "جميع أدوات الحماية",
        "مختبر الأدوات التفاعلي",
        "تحديات CTF متقدمة",
        "دعم فني مميز",
        "تحديثات أسبوعية"
      ]
    },
    {
      name: "للشركات",
      price: "299",
      period: "شهرياً",
      description: "للمؤسسات والفرق الكبيرة",
      icon: Crown,
      popular: false,
      features: [
        "جميع ميزات الخطة المميزة",
        "حسابات متعددة (10-50 مستخدم)",
        "لوحة تحكم المؤسسة",
        "تقارير مخصصة",
        "الميدان السيبراني",
        "استشارات مباشرة",
        "تدريب مخصص",
        "دعم فني 24/7"
      ]
    }
  ];

  const faqs = [
    {
      question: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
      answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت بدون أي رسوم إضافية."
    },
    {
      question: "هل الشهادات معترف بها؟",
      answer: "نعم، شهاداتنا معتمدة ومعترف بها في السوق المحلي والإقليمي."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل جميع بطاقات الائتمان الرئيسية، مدى، وتحويل بنكي."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
            خطط الاشتراك
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اختر الخطة المناسبة لك وابدأ رحلتك في عالم الأمن السيبراني
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${
                  plan.popular 
                    ? 'border-primary shadow-cyber scale-105' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4">الأكثر شعبية</Badge>
                )}
                
                <div className="text-center mb-6">
                  <plan.icon className={`w-12 h-12 mx-auto mb-4 ${
                    plan.popular ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gradient-cyber">{plan.price}</span>
                    <span className="text-muted-foreground">ريال/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations?.map((limitation, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-60">
                      <div className="w-5 h-5 border border-muted-foreground rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.price === "0" ? "ابدأ مجاناً" : "اشترك الآن"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار وَعِي؟</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">محتوى متجدد</h3>
              <p className="text-muted-foreground">
                محتوى جديد يومياً يواكب أحدث التطورات في الأمن السيبراني
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">خبراء معتمدون</h3>
              <p className="text-muted-foreground">
                تعلم من أفضل الخبراء المعتمدين في مجال الأمن السيبراني
              </p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">شهادات معتمدة</h3>
              <p className="text-muted-foreground">
                احصل على شهادات معترف بها تؤهلك لسوق العمل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">أسئلة شائعة</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-bold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">جاهز للبدء؟</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المتخصصين الذين يثقون في منصة وَعِي لتطوير مهاراتهم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="hero" size="lg">ابدأ تجربتك المجانية</Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outline" size="lg">تواصل للاستفسار</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;