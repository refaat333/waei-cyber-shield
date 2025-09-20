import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Clock, Users, Star, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const featuredPaths = [
    {
      title: "مسار محلل الأمن السيبراني",
      description: "تأهيل شامل للعمل كمحلل أمن سيبراني في الشركات",
      duration: "3 أشهر",
      students: 1250,
      rating: 4.8,
      level: "متوسط",
      progress: 0,
      modules: 12,
      certificate: "CompTIA Security+"
    },
    {
      title: "مسار مختبر الاختراق الأخلاقي", 
      description: "تعلم اختبار الاختراق وتقييم الأمان بطريقة أخلاقية",
      duration: "4 أشهر",
      students: 890,
      rating: 4.9,
      level: "متقدم",
      progress: 0,
      modules: 16,
      certificate: "CEH"
    },
    {
      title: "مسار الأمان للمطورين",
      description: "أساسيات البرمجة الآمنة وحماية التطبيقات",
      duration: "2 أشهر", 
      students: 2100,
      rating: 4.7,
      level: "مبتدئ",
      progress: 0,
      modules: 8,
      certificate: "Secure Coding"
    }
  ];

  const individualCourses = [
    {
      title: "التحقيق الجنائي الرقمي",
      instructor: "د. سامي أحمد",
      duration: "6 ساعات",
      students: 450,
      rating: 4.6,
      price: "مجاني",
      level: "متوسط"
    },
    {
      title: "أمان الحوسبة السحابية",
      instructor: "م. نورا علي", 
      duration: "8 ساعات",
      students: 680,
      rating: 4.8,
      price: "499 ريال",
      level: "متقدم"
    },
    {
      title: "الامتثال لقوانين حماية البيانات",
      instructor: "أ. خالد محمد",
      duration: "4 ساعات", 
      students: 320,
      rating: 4.5,
      price: "299 ريال",
      level: "مبتدئ"
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
              أكاديمية وَعِي
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              مسارات تعليمية معتمدة لبناء مستقبلك في الأمن السيبراني
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>شهادات معتمدة دولياً</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>مختبرات عملية تفاعلية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>إرشاد مهني مخصص</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">المسارات التعليمية المهنية</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={path.level === "متقدم" ? "destructive" : path.level === "متوسط" ? "default" : "secondary"}>
                      {path.level}
                    </Badge>
                    <Badge variant="outline">{path.certificate}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{path.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{path.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{path.students}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{path.rating}</span>
                    <span className="text-xs text-muted-foreground">({path.modules} وحدة)</span>
                  </div>
                  
                  {path.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>التقدم</span>
                        <span>{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                  )}
                  
                  <Link to="/courses/path-details">
                    <Button className="w-full" variant="hero">
                      <Play className="mr-2 h-4 w-4" />
                      ابدأ المسار
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Courses */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">الدورات المتخصصة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">بواسطة {course.instructor}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{course.level}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                    <Link to="/courses/course-details">
                      <Button variant="outline" size="sm">
                        التفاصيل
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Lab Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">مختبر الترميز الآمن</h2>
            <p className="text-xl text-muted-foreground mb-8">
              بيئة تطوير تفاعلية لتعلم اكتشاف وإصلاح الثغرات الأمنية
            </p>
            
            <div className="bg-card p-8 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-cyber mb-2">5+</div>
                  <p className="text-muted-foreground">لغات برمجة</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-cyber mb-2">50+</div>
                  <p className="text-muted-foreground">تمرين عملي</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-cyber mb-2">100%</div>
                  <p className="text-muted-foreground">آمن ومعزول</p>
                </div>
              </div>
              
              <Link to="/tools/lab">
                <Button variant="hero" size="lg" className="mt-8">
                  اكتشف المختبر
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;