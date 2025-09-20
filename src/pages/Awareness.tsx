import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle, TrendingUp, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Awareness = () => {
  const newsItems = [
    {
      title: "تهديد جديد يستهدف البنوك العربية",
      date: "2024-01-15",
      severity: "عالي",
      category: "مالي"
    },
    {
      title: "اكتشاف ثغرة في تطبيقات الدردشة الشائعة",
      date: "2024-01-14", 
      severity: "متوسط",
      category: "تطبيقات"
    },
    {
      title: "نصائح حماية البيانات للشركات الصغيرة",
      date: "2024-01-13",
      severity: "منخفض",
      category: "تعليمي"
    }
  ];

  const articles = [
    {
      title: "كيفية إنشاء كلمة مرور قوية",
      author: "د. أحمد محمد",
      readTime: "5 دقائق",
      level: "مبتدئ"
    },
    {
      title: "فهم هجمات التصيد الاحتيالي",
      author: "م. فاطمة علي", 
      readTime: "8 دقائق",
      level: "متوسط"
    },
    {
      title: "أمان الشبكات اللاسلكية",
      author: "أ. خالد حسن",
      readTime: "12 دقيقة", 
      level: "متقدم"
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
              مركز التوعية
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ابق على اطلاع بآخر التهديدات والحلول في عالم الأمن السيبراني
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <h2 className="text-3xl font-bold">آخر الأخبار والتهديدات</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={item.severity === "عالي" ? "destructive" : item.severity === "متوسط" ? "default" : "secondary"}>
                      {item.severity}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{item.category}</Badge>
                    <Link to="/articles">
                      <Button variant="ghost" size="sm">
                        اقرأ المزيد
                        <ArrowLeft className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">المقالات والأدلة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="outline">{article.level}</Badge>
                      <Badge variant="secondary">{article.readTime}</Badge>
                    </div>
                    <Link to="/articles">
                      <Button variant="ghost" size="sm">
                        قراءة
                        <ArrowLeft className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-cyber mb-2">250+</div>
              <p className="text-muted-foreground">مقال متخصص</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-cyber mb-2">50+</div>
              <p className="text-muted-foreground">تقرير أمني</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-cyber mb-2">100+</div>
              <p className="text-muted-foreground">نصيحة أمنية</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-cyber mb-2">25+</div>
              <p className="text-muted-foreground">خبير مساهم</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awareness;