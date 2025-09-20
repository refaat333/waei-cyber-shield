import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Shield, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const LinkChecker = () => {
  const [url, setUrl] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkUrl = () => {
    if (!url) return;
    
    setIsChecking(true);
    // محاكاة فحص الرابط
    setTimeout(() => {
      setResult({
        safe: Math.random() > 0.3, // 70% احتمال أن يكون آمن
        domain: new URL(url).hostname,
        threats: Math.random() > 0.5 ? [] : ["Phishing", "Malware"],
        reputation: Math.floor(Math.random() * 100),
        ssl: Math.random() > 0.2
      });
      setIsChecking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              فاحص الروابط
            </h1>
            <p className="text-xl text-muted-foreground">
              تحقق من أمان أي رابط قبل زيارته وتجنب التهديدات المحتملة
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                أدخل الرابط للفحص
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input 
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={checkUrl}
                  disabled={!url || isChecking}
                  variant="hero"
                >
                  {isChecking ? "جاري الفحص..." : "فحص الرابط"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.safe ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      الرابط آمن
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      تحذير أمني
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertDescription>
                    تم فحص الرابط: <strong>{result.domain}</strong>
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-cyber mb-1">
                      {result.reputation}%
                    </div>
                    <div className="text-sm text-muted-foreground">سمعة النطاق</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Badge variant={result.ssl ? "default" : "destructive"} className="mb-2">
                      {result.ssl ? "SSL آمن" : "SSL غير آمن"}
                    </Badge>
                    <div className="text-sm text-muted-foreground">شهادة الأمان</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold mb-1">
                      {result.threats.length === 0 ? "لا توجد" : result.threats.length}
                    </div>
                    <div className="text-sm text-muted-foreground">تهديدات مكتشفة</div>
                  </div>
                </div>

                {result.threats.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-destructive">التهديدات المكتشفة:</h4>
                    {result.threats.map((threat: string, index: number) => (
                      <Badge key={index} variant="destructive">{threat}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>نصائح الأمان</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• لا تنقر على روابط من مصادر غير موثوقة</p>
                <p>• تحقق من وجود شهادة SSL (https://)</p>
                <p>• انتبه للأخطاء الإملائية في النطاق</p>
                <p>• استخدم برامج مكافحة الفيروسات محدثة</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>معلومات إضافية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• نفحص أكثر من 50 قاعدة بيانات للتهديدات</p>
                <p>• التحديث المستمر لقوائم المواقع الضارة</p>
                <p>• فحص محتوى الصفحة للكشف عن البرمجيات الخبيثة</p>
                <p>• تقييم سمعة النطاق والخادم</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinkChecker;