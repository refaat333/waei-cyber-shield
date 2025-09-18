import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Users, Clock, Star, CheckCircle, Send, Bot } from "lucide-react";

const Consulting = () => {
  const services = [
    {
      title: "المستشار الذكي",
      description: "إجابات فورية على أسئلتك الأمنية باستخدام الذكاء الاصطناعي",
      icon: Bot,
      features: ["متاح 24/7", "إجابات فورية", "مجاني"],
      price: "مجاني",
      color: "text-green-500"
    },
    {
      title: "استشارة مع خبير",
      description: "جلسة فردية مع خبير أمن سيبراني معتمد",
      icon: MessageCircle,
      features: ["30 دقيقة", "استشارة مخصصة", "حلول عملية"],
      price: "299 ريال",
      color: "text-blue-500"
    },
    {
      title: "الإرشاد المهني",
      description: "برنامج إرشاد طويل المدى لتطوير مسارك المهني",
      icon: Users,
      features: ["3 أشهر", "متابعة دورية", "شبكة مهنية"],
      price: "1,499 ريال",
      color: "text-purple-500"
    }
  ];

  const experts = [
    {
      name: "د. أحمد محمد علي",
      title: "خبير أمن الشبكات",
      experience: "15+ سنة",
      specialties: ["أمن الشبكات", "إدارة المخاطر", "ISO 27001"],
      rating: 4.9,
      sessions: 250,
      image: "👨‍💼"
    },
    {
      name: "م. فاطمة سالم",
      title: "خبيرة أمن التطبيقات", 
      experience: "12+ سنة",
      specialties: ["أمن الويب", "DevSecOps", "OWASP"],
      rating: 4.8,
      sessions: 180,
      image: "👩‍💻"
    },
    {
      name: "أ. خالد حسن",
      title: "خبير اختبار الاختراق",
      experience: "10+ سنة", 
      specialties: ["Penetration Testing", "Red Team", "OSCP"],
      rating: 4.9,
      sessions: 320,
      image: "👨‍🔬"
    }
  ];

  const mentorshipPrograms = [
    {
      title: "برنامج المحلل المبتدئ",
      description: "للمبتدئين الذين يريدون دخول مجال الأمن السيبراني",
      duration: "3 أشهر",
      sessions: "8 جلسات",
      goals: ["بناء CV قوي", "تحضير للمقابلات", "اختيار التخصص"]
    },
    {
      title: "برنامج القائد التقني",
      description: "للمحترفين الذين يريدون الانتقال لأدوار قيادية",
      duration: "6 أشهر", 
      sessions: "12 جلسة",
      goals: ["مهارات القيادة", "إدارة الفرق", "الاستراتيجية الأمنية"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              مركز الاستشارات
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              احصل على الإرشاد المهني والاستشارات المتخصصة من خبراء الأمن السيبراني
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">خدمات الاستشارة</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader className="text-center">
                  <service.icon className={`h-12 w-12 mx-auto mb-4 ${service.color}`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button className="w-full" variant={index === 0 ? "outline" : "hero"}>
                      {index === 0 ? "ابدأ الدردشة" : "احجز الآن"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">المستشار الذكي</h2>
            
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Bot className="h-8 w-8 text-primary" />
                  <span className="text-lg font-semibold">مساعد وَعِي الذكي</span>
                  <Badge variant="secondary">متاح الآن</Badge>
                </div>
                <p className="text-muted-foreground">
                  اسأل أي سؤال متعلق بالأمن السيبراني واحصل على إجابة فورية
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="اكتب سؤالك هنا... مثال: كيف أحمي نفسي من هجمات التصيد؟"
                  className="min-h-[100px]"
                />
                <Button className="w-full" variant="hero">
                  <Send className="mr-2 h-4 w-4" />
                  إرسال السؤال
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center text-sm">
                  <div>
                    <div className="font-bold text-gradient-cyber">10,000+</div>
                    <div className="text-muted-foreground">سؤال مجاب</div>
                  </div>
                  <div>
                    <div className="font-bold text-gradient-cyber">95%</div>
                    <div className="text-muted-foreground">دقة الإجابات</div>
                  </div>
                  <div>
                    <div className="font-bold text-gradient-cyber">&lt;30 ثانية</div>
                    <div className="text-muted-foreground">وقت الاستجابة</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">خبراؤنا المعتمدون</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{expert.image}</div>
                  <CardTitle className="text-lg">{expert.name}</CardTitle>
                  <p className="text-muted-foreground">{expert.title}</p>
                  <Badge variant="outline">{expert.experience}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{expert.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {expert.sessions} جلسة
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">التخصصات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {expert.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    احجز استشارة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">برامج الإرشاد المهني</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">المدة:</span>
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">الجلسات:</span>
                      <div className="font-semibold">{program.sessions}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">الأهداف:</h4>
                    {program.goals.map((goal, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="hero">
                    <Users className="mr-2 h-4 w-4" />
                    انضم للبرنامج
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">تواصل معنا</h2>
            
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="الاسم الكامل" />
                  <Input placeholder="البريد الإلكتروني" type="email" />
                </div>
                <Input placeholder="عنوان الاستشارة" />
                <Textarea 
                  placeholder="اشرح احتياجك بالتفصيل..."
                  className="min-h-[120px]"
                />
                <Button className="w-full" variant="hero" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  إرسال طلب الاستشارة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;