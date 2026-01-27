import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Services
          </button>
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
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg text-left py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg text-left py-2"
            >
              Services
            </button>
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
