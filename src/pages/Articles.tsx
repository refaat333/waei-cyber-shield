import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowLeft, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "دليل شامل لحماية الهوية الرقمية في 2024",
      excerpt: "تعرف على أحدث الطرق والأساليب لحماية هويتك الرقمية من السرقة والاختراق",
      category: "الحماية الشخصية",
      author: "د. أحمد محمد",
      date: "15 ديسمبر 2024",
      readTime: "8 دقائق",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "كيف تكتشف هجمات التصيد الاحتيالي؟",
      excerpt: "علامات تحذيرية وأساليب عملية للكشف عن محاولات الخداع الإلكتروني",
      category: "التوعية",
      author: "م. فاطمة أحمد", 
      date: "12 ديسمبر 2024",
      readTime: "6 دقائق",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "أمن الحوسبة السحابية للشركات الصغيرة",
      excerpt: "نصائح وممارسات أمنية لحماية بيانات شركتك في السحابة",
      category: "أمن الشركات",
      author: "م. محمد علي",
      date: "10 ديسمبر 2024", 
      readTime: "10 دقائق",
      image: "/placeholder.svg"
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: "دور الذكي الاصطناعي في الأمن السيبراني",
      category: "تقنيات حديثة",
      date: "8 ديسمبر 2024",
      readTime: "7 دقائق"
    },
    {
      id: 5,
      title: "حماية الأطفال من المخاطر الرقمية",
      category: "الأمان الأسري",
      date: "5 ديسمبر 2024",
      readTime: "5 دقائق"
    },
    {
      id: 6,
      title: "أفضل الممارسات لكلمات المرور القوية",
      category: "التوعية",
      date: "3 ديسمبر 2024",
      readTime: "4 دقائق"
    }
  ];

  const categories = [
    "جميع المقالات",
    "التوعية",
    "الحماية الشخصية", 
    "أمن الشركات",
    "تقنيات حديثة",
    "الأمان الأسري"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
              مكتبة المقالات
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              اكتشف أحدث المقالات والإرشادات في مجال الأمن السيبراني من خبرائنا المعتمدين
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="ابحث في المقالات..." 
                className="pl-12 h-12"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticles[0] && (
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">المقال المميز</span>
              </div>
            </div>
            
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-64 lg:h-auto"></div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4">{featuredArticles[0].category}</Badge>
                  <h2 className="text-3xl font-bold mb-4 leading-tight">
                    {featuredArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredArticles[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredArticles[0].date}
                      </div>
                    </div>
                    <Badge variant="outline">{featuredArticles[0].readTime}</Badge>
                  </div>
                  
                  <Button variant="hero" className="w-full sm:w-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    اقرأ المقال كاملاً
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Recent Articles Grid */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">المقالات الحديثة</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-cyber transition-bounce group">
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 h-48"></div>
                <div className="p-6">
                  <Badge className="mb-3">{article.category}</Badge>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:border-primary transition-smooth">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    اقرأ المزيد
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles List */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8">مقالات أخرى</h3>
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <Card key={article.id} className="p-6 hover:shadow-cyber transition-bounce">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold hover:text-primary transition-smooth cursor-pointer">
                      {article.title}
                    </h4>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">ابق على اطلاع دائم</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            اشترك في نشرتنا الإخبارية لتصلك أحدث المقالات والنصائح الأمنية مباشرة إلى بريدك الإلكتروني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="بريدك الإلكتروني" className="flex-1" />
            <Button variant="hero">اشترك الآن</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;