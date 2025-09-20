import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, AlertTriangle, CheckCircle, Eye, Shield, Database } from "lucide-react";
import { useState } from "react";

const DigitalFootprint = () => {
  const [email, setEmail] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkEmail = () => {
    if (!email) return;
    
    setIsChecking(true);
    // محاكاة فحص البريد الإلكتروني
    setTimeout(() => {
      const hasBreaches = Math.random() > 0.4; // 60% احتمال وجود تسريبات
      const breachCount = hasBreaches ? Math.floor(Math.random() * 5) + 1 : 0;
      
      setResult({
        email,
        hasBreaches,
        breachCount,
        breaches: hasBreaches ? [
          { name: "LinkedIn", date: "2021-06-20", accounts: "700M", type: "بيانات مهنية" },
          { name: "Facebook", date: "2019-04-03", accounts: "533M", type: "بيانات شخصية" },
          { name: "Yahoo", date: "2013-08-01", accounts: "1B", type: "حسابات بريد" }
        ].slice(0, breachCount) : [],
        riskLevel: hasBreaches ? (breachCount > 2 ? "عالي" : "متوسط") : "منخفض",
        recommendations: hasBreaches ? [
          "غير كلمة المرور فوراً",
          "فعل المصادقة الثنائية",
          "راقب حساباتك بانتظام",
          "استخدم كلمات مرور فريدة"
        ] : [
          "حافظ على كلمات مرور قوية",
          "فعل المصادقة الثنائية",
          "احذر من رسائل التصيد"
        ]
      });
      setIsChecking(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              كاشف التسريبات
            </h1>
            <p className="text-xl text-muted-foreground">
              تحقق من تسريب بياناتك الشخصية في قواعد البيانات المخترقة
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                أدخل بريدك الإلكتروني للفحص
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={checkEmail}
                  disabled={!email || isChecking}
                  variant="hero"
                >
                  {isChecking ? "جاري البحث..." : "فحص التسريبات"}
                </Button>
              </div>
              
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  نحن لا نحفظ عنوان بريدك الإلكتروني - الفحص آمن ومجهول
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {result && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {result.hasBreaches ? (
                      <>
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                        تم العثور على تسريبات
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        لا توجد تسريبات مكتشفة
                      </>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert variant={result.hasBreaches ? "destructive" : "default"}>
                    <AlertDescription>
                      البريد الإلكتروني: <strong>{result.email}</strong>
                      {result.hasBreaches ? 
                        ` موجود في ${result.breachCount} من قواعد البيانات المخترقة` :
                        " غير موجود في قواعد البيانات المخترقة المعروفة"
                      }
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-gradient-cyber mb-1">
                        {result.breachCount}
                      </div>
                      <div className="text-sm text-muted-foreground">تسريبات مكتشفة</div>
                    </div>
                    
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Badge 
                        variant={result.riskLevel === "عالي" ? "destructive" : 
                               result.riskLevel === "متوسط" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {result.riskLevel}
                      </Badge>
                      <div className="text-sm text-muted-foreground">مستوى المخاطر</div>
                    </div>
                    
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold mb-1">
                        {result.hasBreaches ? "مطلوب" : "اختياري"}
                      </div>
                      <div className="text-sm text-muted-foreground">إجراء فوري</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {result.hasBreaches && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      تفاصيل التسريبات
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.breaches.map((breach: any, index: number) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">{breach.name}</h4>
                            <Badge variant="outline">{breach.type}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">تاريخ التسريب:</span>
                              <div className="font-semibold">{breach.date}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">الحسابات المتأثرة:</span>
                              <div className="font-semibold">{breach.accounts}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>الإجراءات الموصى بها</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {result.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{rec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ما نفحصه</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• أكثر من 15 مليار حساب من التسريبات المعروفة</p>
                <p>• قواعد بيانات الشركات الكبرى المخترقة</p>
                <p>• منتديات الويب المظلم وأسواق البيانات</p>
                <p>• تسريبات الحكومات والمؤسسات</p>
                <p>• قواعد بيانات كلمات المرور المكشوفة</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>نصائح الحماية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• استخدم كلمة مرور فريدة لكل حساب</p>
                <p>• فعل المصادقة الثنائية حيثما أمكن</p>
                <p>• راقب كشوف حساباتك البنكية بانتظام</p>
                <p>• احذر من رسائل التصيد المشبوهة</p>
                <p>• حدث معلومات الأمان في حساباتك</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalFootprint;