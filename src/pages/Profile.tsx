import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Trophy, 
  BookOpen, 
  Shield, 
  Settings, 
  Award,
  Calendar,
  Star,
  Download
} from "lucide-react";

const Profile = () => {
  const userStats = [
    { label: "الدورات المكتملة", value: "12", icon: BookOpen },
    { label: "الشهادات المحصلة", value: "5", icon: Award },
    { label: "نقاط التحدي", value: "1,250", icon: Trophy },
    { label: "مستوى الأمان", value: "85%", icon: Shield }
  ];

  const completedCourses = [
    {
      title: "أساسيات الأمن السيبراني",
      progress: 100,
      certificate: true,
      date: "15 ديسمبر 2024"
    },
    {
      title: "حماية الهوية الرقمية",
      progress: 100,
      certificate: true,
      date: "10 ديسمبر 2024"
    },
    {
      title: "اختبار الاختراق للمبتدئين",
      progress: 75,
      certificate: false,
      date: "جاري"
    }
  ];

  const certificates = [
    {
      title: "شهادة أساسيات الأمن السيبراني",
      issueDate: "15 ديسمبر 2024",
      score: "95%",
      credentialId: "WA3I-2024-001"
    },
    {
      title: "شهادة حماية الهوية الرقمية",
      issueDate: "10 ديسمبر 2024",
      score: "88%",
      credentialId: "WA3I-2024-002"
    }
  ];

  const achievements = [
    { title: "أول دورة", description: "أكمل أول دورة تدريبية", earned: true },
    { title: "جامع الشهادات", description: "احصل على 5 شهادات", earned: true },
    { title: "الخبير", description: "أكمل 10 دورات متقدمة", earned: false },
    { title: "مقاتل التحدي", description: "احصل على 1000 نقطة", earned: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Profile Header */}
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl font-bold mb-2">أحمد محمد</h1>
              <p className="text-muted-foreground mb-4">أخصائي أمن سيبراني</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge>عضو مميز</Badge>
                <Badge variant="outline">مستوى متقدم</Badge>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              إعدادات الحساب
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userStats.map((stat, index) => (
              <Card key={index} className="p-4 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gradient-cyber">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="courses">الدورات</TabsTrigger>
              <TabsTrigger value="certificates">الشهادات</TabsTrigger>
              <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">دوراتي</h3>
                <div className="space-y-4">
                  {completedCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{course.title}</h4>
                        <div className="flex items-center gap-4">
                          <Progress value={course.progress} className="flex-1 max-w-48" />
                          <span className="text-sm text-muted-foreground">{course.progress}%</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={course.certificate ? "default" : "outline"}>
                          {course.certificate ? "مكتملة" : "جاري"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{course.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">شهاداتي</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {certificates.map((cert, index) => (
                    <Card key={index} className="p-6 border-border">
                      <div className="flex items-start justify-between mb-4">
                        <Award className="w-8 h-8 text-primary" />
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          تحميل
                        </Button>
                      </div>
                      <h4 className="font-bold mb-2">{cert.title}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {cert.issueDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          النتيجة: {cert.score}
                        </div>
                        <div>رقم الشهادة: {cert.credentialId}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">الإنجازات</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 border rounded-lg ${
                        achievement.earned 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Trophy className={`w-6 h-6 ${
                          achievement.earned ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <div>
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">إعدادات الأمان</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold">المصادقة الثنائية</h4>
                      <p className="text-sm text-muted-foreground">حماية إضافية لحسابك</p>
                    </div>
                    <Badge>مفعلة</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold">كلمة المرور</h4>
                      <p className="text-sm text-muted-foreground">آخر تغيير: منذ 30 يوماً</p>
                    </div>
                    <Button variant="outline" size="sm">تغيير</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-semibold">جلسات تسجيل الدخول</h4>
                      <p className="text-sm text-muted-foreground">إدارة الأجهزة المتصلة</p>
                    </div>
                    <Button variant="outline" size="sm">عرض</Button>
                  </div>
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

export default Profile;