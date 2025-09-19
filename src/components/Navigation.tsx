import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Shield, 
  GraduationCap, 
  MessageCircle, 
  Trophy,
  Menu
} from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "الرئيسية", href: "/" },
    { icon: BookOpen, label: "التوعية", href: "/awareness" },
    { icon: Shield, label: "الحماية", href: "/protection" },
    { icon: GraduationCap, label: "الدورات", href: "/courses" },
    { icon: Trophy, label: "التحديات", href: "/challenges" },
    { icon: MessageCircle, label: "الاستشارات", href: "/consulting" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="text-2xl font-bold text-gradient-primary">وَعِي</div>
            <div className="hidden md:block text-sm text-muted-foreground">
              منصة الأمن السيبراني
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href}>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 space-x-reverse hover:text-primary transition-smooth"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              تسجيل الدخول
            </Button>
            <Button variant="hero" size="sm">
              اشترك الآن
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start space-x-2 space-x-reverse p-3 w-full"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};