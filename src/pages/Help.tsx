import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Book, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const faqData = [
    {
      question: "ما هي منصة وَعِي؟",
      answer: "منصة وَعِي هي منصة شاملة للأمن السيبراني تهدف إلى توعية وتدريب وحماية المستخدمين من التهديدات الرقمية في العالم العربي."
    },
    {
      question: "كيف يمكنني إنشاء حساب جديد؟",
      answer: "يمكنك إنشاء حساب جديد بالنقر على زر 'اشترك الآن' في أعلى الصفحة، ثم ملء النموذج المطلوب بالمعلومات الأساسية."
    },
    {
      question: "ما هي أنواع الاشتراكات المتاحة؟",
      answer: "نوفر عدة أنواع من الاشتراكات: مجاني للمحتوى الأساسي، مدفوع شهري وسنوي للوصول الكامل لجميع الدورات والأدوات المتقدمة."
    },
    {
      question: "هل الشهادات معتمدة؟",
      answer: "نعم، شهاداتنا معتمدة ومعترف بها في السوق المحلي والإقليمي، ونتعاون مع جهات عالمية معتمدة في مجال الأمن السيبراني."
    },
    {
      question: "كيف يمكنني الوصول للدورات؟",
      answer: "بعد تسجيل الدخول، يمكنك الوصول للدورات من خلال قسم 'الدورات' في القائمة الرئيسية أو من لوحة التحكم الشخصية."
    },
    {
      question: "ما هي أدوات الحماية المتاحة؟",
      answer: "نوفر مجموعة من الأدوات المجانية مثل فاحص الروابط، مدقق كلمات المرور، وتقرير الظل الرقمي لحماية بياناتك."
    },
    {
      question: "كيف يمكنني إلغاء الاشتراك؟",
      answer: "يمكنك إلغاء الاشتراك في أي وقت من خلال إعدادات الحساب، أو التواصل مع فريق الدعم للمساعدة."
    },
    {
      question: "هل يمكنني الحصول على استشارة شخصية؟",
      answer: "نعم، نوفر خدمات الاستشارات الشخصية والمؤسسية من خلال فريقنا من الخبراء المعتمدين. يمكنك حجز موعد من قسم الاستشارات."
    }
  ];

  const helpCategories = [
    {
      icon: Book,
      title: "الدلائل والإرشادات",
      description: "دلائل شاملة لاستخدام المنصة",
      link: "/guides"
    },
    {
      icon: Users,
      title: "منتدى المجتمع", 
      description: "تفاعل مع المجتمع واطرح أسئلتك",
      link: "/community"
    },
    {
      icon: Mail,
      title: "الدعم الفني",
      description: "تواصل مباشر مع فريق الدعم",
      link: "/contact-us"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
            مركز المساعدة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            نحن هنا لمساعدتك في كل خطوة. ابحث عن الإجابات أو تواصل معنا مباشرة
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="ابحث عن المساعدة..." 
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">كيف يمكننا مساعدتك؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="p-6 text-center hover:shadow-cyber transition-bounce group">
                  <category.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              إجابات سريعة على الأسئلة الأكثر شيوعاً حول استخدام المنصة
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-right">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">لم تجد ما تبحث عنه؟</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            فريق الدعم الفني جاهز لمساعدتك على مدار الساعة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button variant="hero" size="lg">تواصل مع الدعم</Button>
            </Link>
            <Button variant="outline" size="lg">دردشة مباشرة</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;