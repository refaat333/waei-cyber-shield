import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Eye, EyeOff, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkPassword = () => {
    if (!password) return;

    let score = 0;
    let feedback = [];
    let requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      numbers: /\d/.test(password),
      symbols: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    // حساب النقاط
    if (requirements.length) score += 20;
    if (requirements.uppercase) score += 20;
    if (requirements.lowercase) score += 15;
    if (requirements.numbers) score += 15;
    if (requirements.symbols) score += 20;
    if (password.length >= 12) score += 10;

    // إضافة تعليقات
    if (!requirements.length) feedback.push("يجب أن تكون كلمة المرور 8 أحرف على الأقل");
    if (!requirements.uppercase) feedback.push("أضف حروف كبيرة (A-Z)");
    if (!requirements.lowercase) feedback.push("أضف حروف صغيرة (a-z)");
    if (!requirements.numbers) feedback.push("أضف أرقام (0-9)");
    if (!requirements.symbols) feedback.push("أضف رموز خاصة (!@#$%^&*)");

    let strength = "ضعيف";
    let color = "destructive";
    if (score >= 80) {
      strength = "قوي جداً";
      color = "default";
    } else if (score >= 60) {
      strength = "قوي";
      color = "default";
    } else if (score >= 40) {
      strength = "متوسط";
      color = "secondary";
    }

    setResult({
      score,
      strength,
      color,
      feedback,
      requirements,
      estimatedCrackTime: calculateCrackTime(score)
    });
  };

  const calculateCrackTime = (score: number) => {
    if (score >= 80) return "أكثر من 100 سنة";
    if (score >= 60) return "عدة سنوات";
    if (score >= 40) return "عدة أشهر";
    if (score >= 20) return "عدة أيام";
    return "دقائق أو ساعات";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              مدقق كلمات المرور
            </h1>
            <p className="text-xl text-muted-foreground">
              اختبر قوة كلمة المرور الخاصة بك واحصل على نصائح لتحسينها
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                أدخل كلمة المرور للاختبار
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <Button 
                onClick={checkPassword}
                disabled={!password}
                variant="hero"
                className="w-full"
              >
                فحص القوة
              </Button>
              
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  لا نحفظ كلمات المرور - التحليل يتم محلياً على جهازك فقط
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {result && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.score >= 60 ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  )}
                  نتيجة التحليل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>قوة كلمة المرور</span>
                    <Badge variant={result.color as any}>{result.strength}</Badge>
                  </div>
                  <Progress value={result.score} className="h-3" />
                  <div className="text-sm text-muted-foreground">
                    النقاط: {result.score}/100
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">متطلبات كلمة المرور</h4>
                    <div className="space-y-2">
                      {Object.entries(result.requirements).map(([key, met]) => (
                        <div key={key} className="flex items-center gap-2">
                          {met ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                          )}
                          <span className="text-sm">
                            {key === 'length' && '8 أحرف على الأقل'}
                            {key === 'uppercase' && 'حروف كبيرة (A-Z)'}
                            {key === 'lowercase' && 'حروف صغيرة (a-z)'}
                            {key === 'numbers' && 'أرقام (0-9)'}
                            {key === 'symbols' && 'رموز خاصة (!@#$)'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">تقدير وقت الكسر</h4>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gradient-cyber mb-1">
                        {result.estimatedCrackTime}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        بواسطة حاسوب عادي
                      </div>
                    </div>
                  </div>
                </div>

                {result.feedback.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">نصائح التحسين</h4>
                    <div className="space-y-1">
                      {result.feedback.map((tip: string, index: number) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          • {tip}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>نصائح لكلمة مرور قوية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• استخدم خليط من الحروف والأرقام والرموز</p>
                <p>• تجنب المعلومات الشخصية المعروفة</p>
                <p>• استخدم جملة مع تعديلات بدلاً من كلمة واحدة</p>
                <p>• لا تستخدم نفس كلمة المرور لحسابات متعددة</p>
                <p>• استخدم مدير كلمات المرور</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>أمثلة على كلمات مرور قوية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <code>MyDog@Home123!</code></p>
                <p>• <code>Coffee&Tea2024</code></p>
                <p>• <code>I♥Reading#Books</code></p>
                <p>• <code>Travel2Paris$2024</code></p>
                <p className="text-muted-foreground mt-4">
                  تذكر: لا تستخدم هذه الأمثلة فعلياً!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PasswordChecker;