import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "د. أحمد محمد",
      role: "مؤسس ومدير تنفيذي",
      speciality: "خبير أمن سيبراني",
      experience: "+15 سنة خبرة",
      description: "دكتوراه في الأمن السيبراني، خبير معتمد في أمن المعلومات",
      certifications: ["CISSP", "CEH", "CISM"],
      image: "/placeholder.svg"
    },
    {
      name: "م. فاطمة أحمد",
      role: "مديرة التطوير التقني",
      speciality: "أمن التطبيقات",
      experience: "+10 سنوات خبرة",
      description: "خبيرة في أمن التطبيقات والبرمجة الآمنة",
      certifications: ["CISSP", "GWEB", "OSCP"],
      image: "/placeholder.svg"
    },
    {
      name: "م. محمد علي",
      role: "رئيس قسم التدريب",
      speciality: "اختبار الاختراق",
      experience: "+8 سنوات خبرة", 
      description: "خبير اختبار اختراق ومدرب معتمد",
      certifications: ["OSCP", "CEH", "GPEN"],
      image: "/placeholder.svg"
    },
    {
      name: "د. سارة محمود",
      role: "خبيرة المحتوى",
      speciality: "الأمن الجنائي الرقمي",
      experience: "+12 سنة خبرة",
      description: "دكتوراه في علوم الحاسوب، خبيرة في التحقيق الجنائي الرقمي",
      certifications: ["GCIH", "GCFA", "EnCE"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
            فريق العمل
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            خبراء متخصصون في الأمن السيبراني يعملون بشغف لحماية مجتمعنا الرقمي
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-cyber transition-bounce">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">
                    {member.name.split(' ')[1].charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.speciality}</p>
                <Badge variant="outline" className="mb-4">{member.experience}</Badge>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.certifications.map((cert, idx) => (
                    <Badge key={idx} variant="secondary">{cert}</Badge>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3 space-x-reverse">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى فريقنا</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            نحن نبحث دائماً عن المواهب المتميزة في مجال الأمن السيبراني للانضمام إلى فريقنا
          </p>
          <Button variant="hero" size="lg">تصفح الوظائف المتاحة</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;