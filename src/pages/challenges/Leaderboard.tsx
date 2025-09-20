import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Crown, Star, TrendingUp, Users } from "lucide-react";

const Leaderboard = () => {
  const globalLeaderboard = [
    { rank: 1, name: "أحمد محمد", country: "🇸🇦", points: 15420, level: "خبير", streak: 45 },
    { rank: 2, name: "فاطمة علي", country: "🇪🇬", points: 14890, level: "خبير", streak: 38 },
    { rank: 3, name: "خالد حسن", country: "🇦🇪", points: 13750, level: "متقدم", streak: 32 },
    { rank: 4, name: "نورا سالم", country: "🇯🇴", points: 12980, level: "متقدم", streak: 28 },
    { rank: 5, name: "محمد عبدالله", country: "🇰🇼", points: 11560, level: "متقدم", streak: 25 },
    { rank: 6, name: "سارة أحمد", country: "🇲🇦", points: 10890, level: "متوسط", streak: 22 },
    { rank: 7, name: "يوسف علي", country: "🇹🇳", points: 10250, level: "متوسط", streak: 20 },
    { rank: 8, name: "ليلى محمد", country: "🇱🇧", points: 9800, level: "متوسط", streak: 18 },
    { rank: 9, name: "حسام خالد", country: "🇮🇶", points: 9300, level: "متوسط", streak: 15 },
    { rank: 10, name: "رنا سالم", country: "🇸🇾", points: 8750, level: "مبتدئ", streak: 12 }
  ];

  const weeklyChampions = [
    { name: "نورا سالم", country: "🇯🇴", points: 2450, challenges: 15 },
    { name: "خالد حسن", country: "🇦🇪", points: 2200, challenges: 12 },
    { name: "فاطمة علي", country: "🇪🇬", points: 2100, challenges: 14 }
  ];

  const categoryLeaders = [
    { category: "أمان الويب", leader: "أحمد محمد", points: 4200, country: "🇸🇦" },
    { category: "التشفير", leader: "فاطمة علي", points: 3800, country: "🇪🇬" },
    { category: "الجنائي الرقمي", leader: "خالد حسن", points: 3600, country: "🇦🇪" },
    { category: "الهندسة الاجتماعية", leader: "نورا سالم", points: 2900, country: "🇯🇴" }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
    return <Trophy className="h-5 w-5 text-muted-foreground" />;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "خبير": return "destructive";
      case "متقدم": return "default";
      case "متوسط": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              لوحة الصدارة
            </h1>
            <p className="text-xl text-muted-foreground">
              أفضل المتسابقين في تحديات الأمن السيبراني
            </p>
          </div>

          <Tabs defaultValue="global" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="global">الترتيب العام</TabsTrigger>
              <TabsTrigger value="weekly">أسبوعي</TabsTrigger>
              <TabsTrigger value="categories">الفئات</TabsTrigger>
              <TabsTrigger value="stats">الإحصائيات</TabsTrigger>
            </TabsList>

            <TabsContent value="global" className="space-y-6">
              {/* Top 3 Podium */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {globalLeaderboard.slice(0, 3).map((player) => (
                  <Card key={player.rank} className={`text-center ${player.rank === 1 ? 'ring-2 ring-primary' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {getRankIcon(player.rank)}
                      </div>
                      <CardTitle className="flex items-center justify-center gap-2">
                        <span>{player.name}</span>
                        <span>{player.country}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gradient-cyber mb-2">
                        {player.points.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">نقطة</div>
                      <Badge variant={getLevelColor(player.level) as any}>{player.level}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Full Leaderboard */}
              <Card>
                <CardHeader>
                  <CardTitle>الترتيب الكامل</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {globalLeaderboard.map((player) => (
                      <div key={player.rank} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {player.rank}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{player.name}</span>
                            <span>{player.country}</span>
                          </div>
                          <Badge variant={getLevelColor(player.level) as any} className="text-xs">
                            {player.level}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-right">
                            <div className="font-bold text-gradient-cyber">{player.points.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">نقطة</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{player.streak}</div>
                            <div className="text-xs text-muted-foreground">يوم متتالي</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weekly" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    أبطال الأسبوع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {weeklyChampions.map((champion, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                        <div className="text-2xl mb-2">
                          {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="font-semibold">{champion.name}</span>
                          <span>{champion.country}</span>
                        </div>
                        <div className="text-xl font-bold text-gradient-cyber mb-1">
                          {champion.points.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {champion.challenges} تحدي هذا الأسبوع
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryLeaders.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Trophy className="h-8 w-8 text-primary" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{category.leader}</span>
                              <span>{category.country}</span>
                            </div>
                            <div className="text-2xl font-bold text-gradient-cyber">
                              {category.points.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <Badge variant="default">بطل الفئة</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-gradient-cyber mb-2">2,847</div>
                    <div className="text-sm text-muted-foreground">متسابق نشط</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-gradient-cyber mb-2">15,420</div>
                    <div className="text-sm text-muted-foreground">أعلى نقاط</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-gradient-cyber mb-2">127</div>
                    <div className="text-sm text-muted-foreground">تحدي مكتمل</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-gradient-cyber mb-2">45</div>
                    <div className="text-sm text-muted-foreground">أطول سلسلة</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>إحصائيات شاملة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">أكثر الفئات شعبية</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>أمان الويب</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="w-4/5 h-full bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm">80%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>التشفير</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="w-3/5 h-full bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm">60%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>الجنائي الرقمي</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="w-2/5 h-full bg-primary rounded-full"></div>
                            </div>
                            <span className="text-sm">40%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">توزيع المستويات</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>مبتدئ</span>
                          <Badge variant="outline">45%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>متوسط</span>
                          <Badge variant="secondary">35%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>متقدم</span>
                          <Badge variant="default">15%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>خبير</span>
                          <Badge variant="destructive">5%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leaderboard;