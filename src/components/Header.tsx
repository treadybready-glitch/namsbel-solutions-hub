import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "IT Solutions", href: "/it-solutions" },
  { name: "Cyber Security", href: "/cyber-security" },
  { name: "SAP Services", href: "/sap-services" },
  { name: "HR Solutions", href: "/hr-solutions" },
  { name: "Talent Scouting", href: "/talent-scouting" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  const handleBlogClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-xl">N</span>
          </div>
          <span className="font-display font-bold text-2xl text-foreground">
            namsbel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/about"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium outline-none">
              Services
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link to={service.href} className="w-full cursor-pointer">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            onClick={() => scrollToSection("team")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Team
          </button>
          <Link 
            to="/blog"
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Blog
          </Link>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection("inquiry")}
            className="hidden sm:flex"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link 
              to="/about"
              onClick={handleBlogClick}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg py-2"
            >
              About
            </Link>
            
            {/* Mobile Services */}
            <div className="py-2">
              <span className="text-foreground font-medium text-lg block mb-3">Services</span>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={handleBlogClick}
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <button 
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg text-left py-2"
            >
              Team
            </button>
            <Link 
              to="/blog"
              onClick={handleBlogClick}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg text-left py-2"
            >
              Contact
            </button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("inquiry")}
              className="mt-4 w-full"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
