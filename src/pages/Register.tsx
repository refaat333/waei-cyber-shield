import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gradient-primary mb-2">
                  إنشاء حساب جديد
                </h1>
                <p className="text-muted-foreground">
                  انضم إلى مجتمع الأمن السيبراني
                </p>
              </div>

              {/* Registration Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الأول</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input 
                        placeholder="أحمد"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الأخير</label>
                    <Input placeholder="محمد" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      type="email" 
                      placeholder="example@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      type="tel" 
                      placeholder="+966 XX XXX XXXX"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">كلمة المرور</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">تأكيد كلمة المرور</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      أوافق على{" "}
                      <Link to="/terms" className="text-primary hover:underline">شروط الخدمة</Link>
                      {" "}و{" "}
                      <Link to="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link>
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      أرغب في تلقي النشرة الإخبارية والتحديثات
                    </label>
                  </div>
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  إنشاء الحساب
                </Button>
              </form>

              <div className="mt-6">
                <Separator className="my-6" />
                
                {/* Social Registration */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <img src="/placeholder.svg" alt="Google" className="w-5 h-5 mr-2" />
                    التسجيل بـ Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <img src="/placeholder.svg" alt="Apple" className="w-5 h-5 mr-2" />
                    التسجيل بـ Apple
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-muted-foreground">
                    لديك حساب بالفعل؟{" "}
                    <Link to="/login" className="text-primary hover:underline font-medium">
                      تسجيل الدخول
                    </Link>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;