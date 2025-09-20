import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Search, AlertTriangle, CheckCircle, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Protection = () => {
  const [urlToCheck, setUrlToCheck] = useState("");
  const [emailToCheck, setEmailToCheck] = useState("");
  const [passwordToCheck, setPasswordToCheck] = useState("");

  const tools = [
    {
      icon: Search,
      title: "فاحص الروابط",
      description: "تحقق من أمان أي رابط قبل زيارته",
      status: "متاح",
      color: "text-green-500"
    },
    {
      icon: Lock,
      title: "مدقق كلمات المرور",
      description: "اختبر قوة كلمة المرور الخاصة بك",
      status: "متاح", 
      color: "text-green-500"
    },
    {
      icon: Eye,
      title: "كاشف التسريبات",
      description: "تحقق من تسريب بياناتك في قواعد البيانات",
      status: "متاح",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "مختبر الأدوات",
      description: "جرب أدوات الأمن السيبراني بأمان",
      status: "قريباً",
      color: "text-yellow-500"
    }
  ];

  const recentThreats = [
    { name: "تروجان بنكي جديد", level: "عالي", detected: "منذ ساعتين" },
    { name: "رسائل تصيد مصرفية", level: "متوسط", detected: "منذ 4 ساعات" },
    { name: "ثغرة في WordPress", level: "عالي", detected: "منذ 6 ساعات" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              ترسانة الحماية
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              أدوات متقدمة لحماية نفسك وبياناتك في الفضاء الرقمي
            </p>
          </div>
        </div>
      </section>

      {/* Security Tools */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">أدوات الحماية الفورية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader className="text-center">
                  <tool.icon className={`h-12 w-12 mx-auto mb-4 ${tool.color}`} />
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Badge variant={tool.status === "متاح" ? "default" : "secondary"}>
                    {tool.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* URL Checker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  فاحص الروابط
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="الصق الرابط هنا..."
                  value={urlToCheck}
                  onChange={(e) => setUrlToCheck(e.target.value)}
                />
                <Link to="/tools/link-checker">
                  <Button className="w-full" variant="hero">
                    فحص الرابط
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground">
                  نحلل الرابط للتحقق من وجود تهديدات محتملة
                </div>
              </CardContent>
            </Card>

            {/* Email Breach Checker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  كاشف التسريبات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  type="email"
                  placeholder="بريدك الإلكتروني..."
                  value={emailToCheck}
                  onChange={(e) => setEmailToCheck(e.target.value)}
                />
                <Link to="/tools/digital-footprint">
                  <Button className="w-full" variant="hero">
                    فحص التسريبات
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground">
                  نبحث في قواعد بيانات التسريبات المعروفة
                </div>
              </CardContent>
            </Card>

            {/* Password Checker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  مدقق كلمات المرور
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  type="password"
                  placeholder="كلمة المرور..."
                  value={passwordToCheck}
                  onChange={(e) => setPasswordToCheck(e.target.value)}
                />
                <Link to="/tools/password-checker">
                  <Button className="w-full" variant="hero">
                    فحص القوة
                  </Button>
                </Link>
                <div className="text-xs text-muted-foreground">
                  تقييم محلي آمن لقوة كلمة المرور
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-time Threats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">التهديدات النشطة</h2>
            
            <div className="space-y-4">
              {recentThreats.map((threat, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        <div>
                          <h3 className="font-semibold">{threat.name}</h3>
                          <p className="text-sm text-muted-foreground">{threat.detected}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={threat.level === "عالي" ? "destructive" : "default"}>
                          {threat.level}
                        </Badge>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Protection;