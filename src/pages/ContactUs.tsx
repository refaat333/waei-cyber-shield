import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنكون سعداء للإجابة على استفساراتك
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الأول</label>
                    <Input placeholder="أدخل اسمك الأول" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الأخير</label>
                    <Input placeholder="أدخل اسمك الأخير" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                  <Input placeholder="+966 XX XXX XXXX" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">موضوع الرسالة</label>
                  <Input placeholder="ما هو موضوع رسالتك؟" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">الرسالة</label>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..." 
                    className="min-h-32"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
                <p className="text-muted-foreground mb-2">تواصل معنا عبر البريد الإلكتروني</p>
                <p className="font-medium">info@wa3i-cyber.com</p>
                <p className="font-medium">support@wa3i-cyber.com</p>
              </Card>

              <Card className="p-6">
                <Phone className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">الهاتف</h3>
                <p className="text-muted-foreground mb-2">اتصل بنا مباشرة</p>
                <p className="font-medium">+966 11 234 5678</p>
                <p className="font-medium">+966 50 123 4567</p>
              </Card>

              <Card className="p-6">
                <MapPin className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">العنوان</h3>
                <p className="text-muted-foreground mb-2">مقرنا الرئيسي</p>
                <p className="font-medium">الرياض، المملكة العربية السعودية</p>
                <p className="font-medium">شارع الأمير محمد بن عبدالعزيز</p>
              </Card>

              <Card className="p-6">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
                <p className="text-muted-foreground mb-2">نحن متاحون</p>
                <p className="font-medium">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                <p className="font-medium">الجمعة - السبت: مغلق</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;