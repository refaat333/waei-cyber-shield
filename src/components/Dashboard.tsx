import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            لوحة التحكم الذكية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مراقبة شاملة لحالتك الأمنية مع تحديثات فورية وتوصيات مخصصة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Security Status */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">الحالة الأمنية</h3>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  آمن
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground">الحماية النشطة</h4>
                  <p className="text-sm text-muted-foreground">8 أدوات تعمل</p>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <TrendingUp className="w-8 h-8 text-accent mb-2" />
                  <h4 className="font-semibold text-foreground">نقاط الأمان</h4>
                  <p className="text-sm text-muted-foreground">95/100</p>
                </div>
                
                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <Users className="w-8 h-8 text-secondary mb-2" />
                  <h4 className="font-semibold text-foreground">التقدم التعليمي</h4>
                  <p className="text-sm text-muted-foreground">4 دورات مكتملة</p>
                </div>
              </div>
            </Card>

            {/* Recent Alerts */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">التحديثات الأمنية</h3>
                <Button variant="ghost" size="sm">
                  عرض الكل
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">تحذير أمني جديد</h4>
                    <p className="text-sm text-muted-foreground">اكتشاف ثغرة خطيرة في تطبيق واتساب - يُنصح بالتحديث فوراً</p>
                    <span className="text-xs text-muted-foreground">منذ ساعتين</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">تحديث أداة الحماية</h4>
                    <p className="text-sm text-muted-foreground">تم تحديث فاحص الروابط بقاعدة بيانات جديدة</p>
                    <span className="text-xs text-muted-foreground">منذ 4 ساعات</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">اكتمال المسح الأمني</h4>
                    <p className="text-sm text-muted-foreground">تم فحص جميع كلمات المرور - لا توجد مشاكل</p>
                    <span className="text-xs text-muted-foreground">منذ 6 ساعات</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">إجراءات سريعة</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  فحص الروابط
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  تدقيق كلمة المرور
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  فحص التسريبات
                </Button>
                <Button variant="hero" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  جميع الأدوات
                </Button>
              </div>
            </Card>

            {/* Progress */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">التقدم الشخصي</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground">أساسيات الأمان</span>
                    <span className="text-sm text-primary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground">أمن الشبكات</span>
                    <span className="text-sm text-accent">60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[60%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground">اختبار الاختراق</span>
                    <span className="text-sm text-secondary">30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Daily Tip */}
            <Card className="p-6 bg-gradient-glow border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-3">نصيحة اليوم</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                استخدم المصادقة الثنائية (2FA) في جميع حساباتك المهمة. هذه الخطوة البسيطة تقلل من خطر الاختراق بنسبة 99.9%.
              </p>
              <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto text-accent">
                اقرأ المزيد
                <ArrowLeft className="mr-1 h-3 w-3" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};