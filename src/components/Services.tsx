import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Shield, 
  GraduationCap, 
  MessageCircle, 
  Trophy, 
  ArrowLeft 
} from "lucide-react";
import awarenessIcon from "@/assets/awareness-icon.png";
import toolsIcon from "@/assets/tools-icon.png";
import coursesIcon from "@/assets/courses-icon.png";

export const Services = () => {
  const services = [
    {
      icon: awarenessIcon,
      title: "التوعية والمحتوى",
      subtitle: "مركز المعرفة",
      description: "آخر أخبار التهديدات، مقالات متخصصة، ومحتوى مرئي تفاعلي لبناء ثقافة أمنية شاملة",
      features: ["أخبار يومية", "مكتبة مقالات", "محتوى مرئي", "انفوجرافيك"],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: toolsIcon,
      title: "الحماية والأدوات",
      subtitle: "ترسانة الدفاع الرقمي",
      description: "مجموعة شاملة من الأدوات المتقدمة لفحص التهديدات وحماية البيانات الشخصية",
      features: ["فاحص الروابط", "مدقق كلمات المرور", "تقرير الظل الرقمي", "مختبر أدوات"],
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      icon: coursesIcon,
      title: "الدورات والكورسات",
      subtitle: "الأكاديمية",
      description: "مسارات تعليمية معتمدة ومختبرات عملية لتأهيل المحترفين في مجال الأمن السيبراني",
      features: ["مسارات مهنية", "شهادات معتمدة", "مختبرات تفاعلية", "ترميز آمن"],
      gradient: "from-accent/20 to-secondary/20"
    },
    {
      icon: MessageCircle,
      title: "الاستشارات والإرشاد",
      subtitle: "مركز الخبراء",
      description: "استشارات مخصصة وإرشاد مهني من خبراء معتمدين في الأمن السيبراني",
      features: ["مستشار ذكي", "اسأل خبير", "إرشاد مهني", "استشارات مؤسسية"],
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      icon: Trophy,
      title: "الممارسة والتحديات",
      subtitle: "الساحة التفاعلية",
      description: "تحديات عملية وبيئات محاكاة لاختبار المهارات وتطبيق المعرفة",
      features: ["تحديات CTF", "الميدان السيبراني", "لوحات صدارة", "محاكاة هجمات"],
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      icon: Eye,
      title: "المراقبة والتحليل",
      subtitle: "مركز العمليات",
      description: "مراقبة مستمرة للتهديدات وتحليل الاتجاهات الأمنية العالمية والمحلية",
      features: ["رصد التهديدات", "تحليل البيانات", "تقارير أمنية", "إنذار مبكر"],
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyber mb-4">
            أقسام المنصة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            منظومة متكاملة تدمج بين التوعية والحماية والتدريب والاستشارات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-cyber transition-bounce border-border/50 bg-card/50 backdrop-blur-sm group hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth`}>
                  {typeof service.icon === 'string' ? (
                    <img src={service.icon} alt={service.title} className="w-8 h-8" />
                  ) : (
                    <service.icon className="w-8 h-8 text-primary" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-primary font-medium">{service.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Action */}
              <Button variant="outline" className="w-full group-hover:border-primary transition-smooth">
                <ArrowLeft className="mr-2 h-4 w-4" />
                استكشف القسم
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};