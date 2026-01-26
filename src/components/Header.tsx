import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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

        <Button 
          variant="hero" 
          size="sm"
          onClick={() => scrollToSection("inquiry")}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
