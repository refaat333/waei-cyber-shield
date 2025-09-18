import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "أقسام المنصة",
      links: [
        { label: "التوعية والمحتوى", href: "/awareness" },
        { label: "الحماية والأدوات", href: "/protection" },
        { label: "الدورات والكورسات", href: "/courses" },
        { label: "الاستشارات", href: "/consulting" }
      ]
    },
    {
      title: "الموارد",
      links: [
        { label: "مكتبة المقالات", href: "/articles" },
        { label: "الأخبار الأمنية", href: "/news" },
        { label: "التحديات العملية", href: "/challenges" },
        { label: "مركز المساعدة", href: "/help" }
      ]
    },
    {
      title: "الشركة",
      links: [
        { label: "من نحن", href: "/about" },
        { label: "فريق العمل", href: "/team" },
        { label: "الشراكات", href: "/partnerships" },
        { label: "الوظائف", href: "/careers" }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-primary">وَعِي</h3>
                <p className="text-sm text-muted-foreground">منصة الأمن السيبراني</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              الوجهة الرقمية الأولى في العالم العربي للتوعية والحماية والتدريب في مجال الأمن السيبراني.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@waei-cyber.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+966 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-muted-foreground hover:text-primary transition-smooth justify-start"
                    >
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold text-foreground mb-2">النشرة الأمنية</h4>
            <p className="text-muted-foreground mb-4">
              احصل على آخر التحديثات والتهديدات الأمنية مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex space-x-2 space-x-reverse">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">اشترك</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 وَعِي - منصة الأمن السيبراني. جميع الحقوق محفوظة.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 space-x-reverse text-sm">
              <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-primary">
                سياسة الخصوصية
              </Button>
              <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-primary">
                شروط الاستخدام
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};