import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, Trophy, Flag, Users, Code, Terminal, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Practice = () => {
  const practiceCategories = [
    {
      id: "web",
      name: "أمان الويب",
      icon: "🌐",
      challenges: [
        {
          title: "SQL Injection المبتدئ",
          difficulty: "سهل",
          points: 100,
          solved: 1250,
          description: "اكتشف ثغرة SQL Injection في نموذج تسجيل الدخول"
        },
        {
          title: "XSS في التعليقات", 
          difficulty: "متوسط",
          points: 200,
          solved: 800,
          description: "استغل ثغرة Cross-Site Scripting في نظام التعليقات"
        },
        {
          title: "CSRF Token Bypass",
          difficulty: "صعب",
          points: 350,
          solved: 200,
          description: "تجاوز حماية CSRF وتنفيذ عملية غير مصرح بها"
        }
      ]
    },
    {
      id: "crypto",
      name: "التشفير",
      icon: "🔐",
      challenges: [
        {
          title: "Caesar Cipher",
          difficulty: "سهل",
          points: 75,
          solved: 1500,
          description: "فك تشفير رسالة مشفرة بطريقة القيصر"
        },
        {
          title: "RSA الأساسي",
          difficulty: "متوسط",
          points: 250,
          solved: 600,
          description: "كسر مفتاح RSA ضعيف واستخراج الرسالة السرية"
        },
        {
          title: "Hash Collision",
          difficulty: "صعب",
          points: 400,
          solved: 150,
          description: "إنشاء تصادم في دالة hash مخصصة"
        }
      ]
    },
    {
      id: "forensics",
      name: "الجنائي الرقمي",
      icon: "🔍",
      challenges: [
        {
          title: "استخراج البيانات المخفية",
          difficulty: "سهل",
          points: 125,
          solved: 900,
          description: "ابحث عن ملفات مخفية في صورة"
        },
        {
          title: "تحليل ذاكرة النظام",
          difficulty: "متوسط",
          points: 300,
          solved: 400,
          description: "حلل dump ذاكرة مشبوه واستخرج كلمات المرور"
        },
        {
          title: "استعادة الملفات المحذوفة",
          difficulty: "صعب",
          points: 450,
          solved: 100,
          description: "استعد ملفات حساسة من قرص صلب تالف"
        }
      ]
    }
  ];

  const activeChallenge = {
    title: "SQL Injection: البحث عن الثغرة",
    description: "موقع تسوق إلكتروني يحتوي على ثغرة في نظام البحث. هدفك هو الوصول لقاعدة البيانات واستخراج معلومات المستخدمين.",
    timeLimit: 30,
    points: 100,
    difficulty: "سهل",
    hint: "جرب استخدام علامة الاقتباس الفردية في حقل البحث",
    environment: "https://lab.waei.com/sqli-challenge"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              مختبر التحديات
            </h1>
            <p className="text-xl text-muted-foreground">
              بيئة آمنة لممارسة مهارات الأمن السيبراني والتعلم العملي
            </p>
          </div>

          <Tabs defaultValue="practice" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="practice">التحديات التدريبية</TabsTrigger>
              <TabsTrigger value="active">التحدي النشط</TabsTrigger>
              <TabsTrigger value="lab">المختبر الافتراضي</TabsTrigger>
            </TabsList>

            <TabsContent value="practice" className="space-y-8">
              {practiceCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{category.icon}</div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.challenges.map((challenge, index) => (
                      <Card key={index} className="hover:shadow-lg transition-smooth">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant={
                              challenge.difficulty === "صعب" ? "destructive" : 
                              challenge.difficulty === "متوسط" ? "default" : "secondary"
                            }>
                              {challenge.difficulty}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Flag className="h-4 w-4 text-primary" />
                              <span className="text-sm font-bold">{challenge.points}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {challenge.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4" />
                            <span>{challenge.solved} حلوه</span>
                          </div>
                          
                          <Button className="w-full" variant="hero">
                            <Play className="mr-2 h-4 w-4" />
                            ابدأ التحدي
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="active" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{activeChallenge.title}</CardTitle>
                      <Badge variant="secondary">{activeChallenge.difficulty}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient-cyber">{activeChallenge.points}</div>
                      <div className="text-sm text-muted-foreground">نقطة</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{activeChallenge.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>الوقت المتبقي: {activeChallenge.timeLimit} دقيقة</span>
                      </div>
                      <Progress value={75} className="h-3" />
                      
                      <Card className="p-4 bg-muted/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4" />
                          <span className="font-semibold">تلميح:</span>
                        </div>
                        <p className="text-sm">{activeChallenge.hint}</p>
                      </Card>
                    </div>
                    
                    <div className="space-y-4">
                      <Button variant="hero" size="lg" className="w-full">
                        <Terminal className="mr-2 h-5 w-5" />
                        افتح المختبر
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        <Code className="mr-2 h-4 w-4" />
                        عرض الكود المصدري
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        إرسال الحل
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lab" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>المختبر الافتراضي</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    بيئة محاكاة كاملة تحتوي على أنظمة وتطبيقات مختلفة للتدريب على اختبار الاختراق
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient-cyber mb-2">5+</div>
                        <div className="text-sm text-muted-foreground">أنظمة تشغيل</div>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient-cyber mb-2">20+</div>
                        <div className="text-sm text-muted-foreground">تطبيق ويب ضعيف</div>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gradient-cyber mb-2">100+</div>
                        <div className="text-sm text-muted-foreground">أداة أمنية</div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="hero" size="lg">
                      <Terminal className="mr-2 h-5 w-5" />
                      ابدأ مختبر Kali Linux
                    </Button>
                    
                    <Button variant="outline" size="lg">
                      <Code className="mr-2 h-5 w-5" />
                      مختبر تطوير آمن
                    </Button>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">متطلبات النظام:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• متصفح حديث يدعم WebRTC</li>
                      <li>• اتصال إنترنت مستقر (5 Mbps كحد أدنى)</li>
                      <li>• ذاكرة وصول عشوائي 4GB كحد أدنى</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Practice;