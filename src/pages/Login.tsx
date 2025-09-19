import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gradient-primary mb-2">
                  تسجيل الدخول
                </h1>
                <p className="text-muted-foreground">
                  مرحباً بك مرة أخرى في منصة وَعِي
                </p>
              </div>

              {/* Login Form */}
              <form className="space-y-6">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                      تذكرني
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  تسجيل الدخول
                </Button>
              </form>

              <div className="mt-6">
                <Separator className="my-6" />
                
                {/* Social Login */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <img src="/placeholder.svg" alt="Google" className="w-5 h-5 mr-2" />
                    تسجيل الدخول بـ Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <img src="/placeholder.svg" alt="Apple" className="w-5 h-5 mr-2" />
                    تسجيل الدخول بـ Apple
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-muted-foreground">
                    ليس لديك حساب؟{" "}
                    <Link to="/register" className="text-primary hover:underline font-medium">
                      إنشاء حساب جديد
                    </Link>
                  </p>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                بتسجيل الدخول، فإنك توافق على{" "}
                <Link to="/terms" className="text-primary hover:underline">شروط الخدمة</Link>
                {" "}و{" "}
                <Link to="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;