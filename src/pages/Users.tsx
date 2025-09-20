import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users as UsersIcon, 
  Search, 
  Filter, 
  UserPlus, 
  Shield, 
  Crown, 
  Clock,
  Mail,
  MoreVertical
} from "lucide-react";

const Users = () => {
  const userStats = [
    { label: "إجمالي المستخدمين", value: "2,847", icon: UsersIcon, color: "text-primary" },
    { label: "المستخدمون النشطون", value: "1,523", icon: Shield, color: "text-green-500" },
    { label: "المشتركون المميزون", value: "892", icon: Crown, color: "text-yellow-500" },
    { label: "المستخدمون الجدد", value: "127", icon: Clock, color: "text-blue-500" }
  ];

  const users = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      role: "مستخدم مميز",
      status: "نشط",
      joinDate: "15 يناير 2024",
      lastLogin: "منذ ساعتين",
      courses: 5,
      avatar: "AM"
    },
    {
      id: 2,
      name: "فاطمة أحمد",
      email: "fatima@example.com",
      role: "مستخدم عادي",
      status: "نشط",
      joinDate: "22 يناير 2024",
      lastLogin: "منذ يوم",
      courses: 2,
      avatar: "FA"
    },
    {
      id: 3,
      name: "محمد علي",
      email: "mohammed@example.com",
      role: "مستخدم مميز",
      status: "غير نشط",
      joinDate: "8 فبراير 2024",
      lastLogin: "منذ أسبوع",
      courses: 8,
      avatar: "MA"
    },
    {
      id: 4,
      name: "نورا سالم",
      email: "nora@example.com",
      role: "إداري",
      status: "نشط",
      joinDate: "1 يناير 2024",
      lastLogin: "منذ 10 دقائق",
      courses: 12,
      avatar: "NS"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient-primary mb-2">إدارة المستخدمين</h1>
              <p className="text-muted-foreground text-lg">مراقبة وإدارة جميع المستخدمين في المنصة</p>
            </div>
            <Button variant="hero">
              <UserPlus className="ml-2 h-5 w-5" />
              إضافة مستخدم جديد
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userStats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-cyber">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <Card className="p-6">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="البحث عن المستخدمين..." 
                  className="pr-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="ml-2 h-4 w-4" />
                تصفية
              </Button>
            </div>

            {/* Users Table */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">جميع المستخدمين</TabsTrigger>
                <TabsTrigger value="active">النشطون</TabsTrigger>
                <TabsTrigger value="premium">المميزون</TabsTrigger>
                <TabsTrigger value="inactive">غير النشطين</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-right py-3 px-4 font-semibold">المستخدم</th>
                        <th className="text-right py-3 px-4 font-semibold">النوع</th>
                        <th className="text-right py-3 px-4 font-semibold">الحالة</th>
                        <th className="text-right py-3 px-4 font-semibold">تاريخ الانضمام</th>
                        <th className="text-right py-3 px-4 font-semibold">آخر دخول</th>
                        <th className="text-right py-3 px-4 font-semibold">الدورات</th>
                        <th className="text-right py-3 px-4 font-semibold">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                                {user.avatar}
                              </div>
                              <div>
                                <div className="font-semibold">{user.name}</div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                  <Mail className="w-3 h-3" />
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant={user.role === "إداري" ? "default" : user.role === "مستخدم مميز" ? "secondary" : "outline"}>
                              {user.role}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant={user.status === "نشط" ? "default" : "outline"}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-muted-foreground">{user.joinDate}</td>
                          <td className="py-4 px-4 text-muted-foreground">{user.lastLogin}</td>
                          <td className="py-4 px-4">
                            <Badge variant="outline">{user.courses} دورات</Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="active">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">عرض المستخدمين النشطين فقط</p>
                </div>
              </TabsContent>

              <TabsContent value="premium">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">عرض المستخدمين المميزين فقط</p>
                </div>
              </TabsContent>

              <TabsContent value="inactive">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">عرض المستخدمين غير النشطين فقط</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Users;