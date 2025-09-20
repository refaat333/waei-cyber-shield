import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Download, 
  Calendar,
  AlertTriangle,
  Shield,
  Target,
  Activity
} from "lucide-react";

const Analytics = () => {
  const analyticsData = [
    { label: "إجمالي الزيارات", value: "125,648", change: "+12.5%", icon: Eye, color: "text-primary" },
    { label: "المستخدمون النشطون", value: "8,429", change: "+8.2%", icon: Users, color: "text-green-500" },
    { label: "التهديدات المكتشفة", value: "1,247", change: "-5.1%", icon: AlertTriangle, color: "text-red-500" },
    { label: "معدل الحماية", value: "98.7%", change: "+0.3%", icon: Shield, color: "text-blue-500" }
  ];

  const securityEvents = [
    {
      type: "تهديد محجوب",
      description: "محاولة تصيد إلكتروني من IP مشبوه",
      severity: "عالي",
      time: "منذ 15 دقيقة",
      count: 5
    },
    {
      type: "فحص مكتمل",
      description: "مسح شامل لقاعدة البيانات",
      severity: "منخفض", 
      time: "منذ ساعة",
      count: 1
    },
    {
      type: "تحديث الأمان",
      description: "تحديث قواعد الحماية",
      severity: "متوسط",
      time: "منذ 3 ساعات",
      count: 12
    }
  ];

  const topTools = [
    { name: "فاحص الروابط", usage: "2,547", trend: "+15%" },
    { name: "مدقق كلمة المرور", usage: "1,892", trend: "+8%" },
    { name: "كاشف التسريبات", usage: "1,234", trend: "+22%" },
    { name: "محلل الملفات", usage: "987", trend: "-3%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient-primary mb-2">التحليلات والإحصائيات</h1>
              <p className="text-muted-foreground text-lg">مراقبة شاملة لأداء المنصة والأمان السيبراني</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Calendar className="ml-2 h-4 w-4" />
                اختيار التاريخ
              </Button>
              <Button variant="hero">
                <Download className="ml-2 h-4 w-4" />
                تصدير التقرير
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsData.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <Badge variant={stat.change.startsWith('+') ? 'default' : 'destructive'}>
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-gradient-cyber mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Analytics */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
              <TabsTrigger value="users">المستخدمين</TabsTrigger>
              <TabsTrigger value="tools">الأدوات</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart Placeholder */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    الزيارات اليومية
                  </h3>
                  <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">رسم بياني للزيارات</p>
                    </div>
                  </div>
                </Card>

                {/* Activity Feed */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    النشاط الأخير
                  </h3>
                  <div className="space-y-4">
                    {securityEvents.map((event, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          event.severity === 'عالي' ? 'bg-red-500' :
                          event.severity === 'متوسط' ? 'bg-yellow-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm">{event.type}</h4>
                            <Badge variant="outline" className="text-xs">
                              {event.count} مرة
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                          <span className="text-xs text-muted-foreground">{event.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  تحليل الأمان
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-2">التهديدات المحجوبة</h4>
                    <div className="text-2xl font-bold text-green-400">1,247</div>
                    <p className="text-sm text-muted-foreground">هذا الشهر</p>
                  </div>
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">الفحوصات المكتملة</h4>
                    <div className="text-2xl font-bold text-blue-400">15,892</div>
                    <p className="text-sm text-muted-foreground">هذا الشهر</p>
                  </div>
                  <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-400 mb-2">التحذيرات النشطة</h4>
                    <div className="text-2xl font-bold text-yellow-400">23</div>
                    <p className="text-sm text-muted-foreground">تحتاج مراجعة</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  إحصائيات المستخدمين
                </h3>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">رسم بياني لنمو المستخدمين</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  أداء الأدوات
                </h3>
                <div className="space-y-4">
                  {topTools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground">{tool.usage} استخدام</p>
                      </div>
                      <Badge variant={tool.trend.startsWith('+') ? 'default' : 'destructive'}>
                        {tool.trend}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;