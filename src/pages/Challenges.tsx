import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flag, Users, Clock, Star, Play, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Challenges = () => {
  const categories = [
    {
      name: "أمان الويب",
      icon: "🌐",
      challenges: 25,
      completed: 8,
      difficulty: "متنوع"
    },
    {
      name: "التشفير",
      icon: "🔐", 
      challenges: 18,
      completed: 3,
      difficulty: "متقدم"
    },
    {
      name: "الجنائي الرقمي",
      icon: "🔍",
      challenges: 15,
      completed: 12,
      difficulty: "متوسط"
    },
    {
      name: "الهندسة الاجتماعية",
      icon: "👥",
      challenges: 12,
      completed: 7,
      difficulty: "مبتدئ"
    }
  ];

  const recentChallenges = [
    {
      title: "SQL Injection: البحث عن الثغرة",
      category: "أمان الويب",
      difficulty: "سهل",
      points: 100,
      solvers: 1250,
      timeLimit: "30 دقيقة",
      status: "متاح"
    },
    {
      title: "فك تشفير الرسالة السرية",
      category: "التشفير", 
      difficulty: "متوسط",
      points: 250,
      solvers: 450,
      timeLimit: "45 دقيقة",
      status: "متاح"
    },
    {
      title: "تحليل ذاكرة النظام المخترق",
      category: "الجنائي الرقمي",
      difficulty: "صعب",
      points: 500,
      solvers: 125,
      timeLimit: "90 دقيقة", 
      status: "مغلق"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "أحمد محمد", points: 15420, country: "🇸🇦" },
    { rank: 2, name: "فاطمة علي", points: 14890, country: "🇪🇬" },
    { rank: 3, name: "خالد حسن", points: 13750, country: "🇦🇪" },
    { rank: 4, name: "نورا سالم", points: 12980, country: "🇯🇴" },
    { rank: 5, name: "محمد عبدالله", points: 11560, country: "🇰🇼" }
  ];

  const upcomingEvents = [
    {
      title: "بطولة الأمن السيبراني العربية",
      date: "2024-02-15",
      duration: "3 أيام",
      prize: "50,000 ريال",
      participants: 500
    },
    {
      title: "تحدي الحماية الشهري",
      date: "2024-01-28", 
      duration: "أسبوع",
      prize: "شهادات معتمدة",
      participants: 150
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              ساحة التحديات
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              اختبر مهاراتك وتنافس مع المحترفين في تحديات الأمن السيبراني
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/challenges/practice">
                <Button variant="hero" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  ابدأ التحدي
                </Button>
              </Link>
              <Link to="/challenges/leaderboard">
                <Button variant="outline" size="lg">
                  <Trophy className="mr-2 h-4 w-4" />
                  لوحة الصدارة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">فئات التحديات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-cyber">
                      {category.challenges}
                    </div>
                    <p className="text-sm text-muted-foreground">تحدي متاح</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>التقدم</span>
                      <span>{category.completed}/{category.challenges}</span>
                    </div>
                    <Progress value={(category.completed / category.challenges) * 100} className="h-2" />
                  </div>
                  
                  <Badge variant="outline" className="w-full justify-center">
                    {category.difficulty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">أحدث التحديات</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recentChallenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={challenge.difficulty === "صعب" ? "destructive" : challenge.difficulty === "متوسط" ? "default" : "secondary"}>
                      {challenge.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {challenge.status === "مغلق" && <Lock className="h-4 w-4 text-muted-foreground" />}
                      <Flag className="h-4 w-4 text-primary" />
                      <span className="text-sm font-bold">{challenge.points}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <Badge variant="outline">{challenge.category}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{challenge.timeLimit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{challenge.solvers}</span>
                    </div>
                  </div>
                  
                  {challenge.status === "متاح" ? (
                    <Link to="/challenges/practice">
                      <Button className="w-full" variant="hero">
                        ابدأ التحدي
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      مغلق
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard & Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Leaderboard */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">لوحة الصدارة</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {leaderboard.map((player) => (
                      <div key={player.rank} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {player.rank}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{player.name}</span>
                              <span>{player.country}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gradient-cyber">{player.points.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">نقطة</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">الأحداث القادمة</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">التاريخ:</span>
                          <div className="font-semibold">{event.date}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">المدة:</span>
                          <div className="font-semibold">{event.duration}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">الجائزة:</span>
                          <div className="font-semibold text-primary">{event.prize}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">المشاركون:</span>
                          <div className="font-semibold">{event.participants}</div>
                        </div>
                      </div>
                      <Link to="/register">
                        <Button className="w-full" variant="outline">
                          <Star className="mr-2 h-4 w-4" />
                          سجل اهتمامك
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Challenges;