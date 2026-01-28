import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, UserPlus, FileText, Calculator, Scale, HeartHandshake, ArrowRight, Building2 } from "lucide-react";

const services = [
  {
    icon: UserPlus,
    title: "Talent Acquisition",
    description: "Our recruitment services focus on identifying, attracting, and retaining top talent. We utilize advanced sourcing techniques, comprehensive screening processes, and in-depth interviews to ensure we match the right candidates with the right roles."
  },
  {
    icon: Users,
    title: "Employee Engagement",
    description: "Build a positive workplace culture with our employee engagement solutions. We help organizations create environments where employees feel valued, motivated, and connected to the company's mission."
  },
  {
    icon: FileText,
    title: "HR Process Optimization",
    description: "Streamline your HR processes with our tailored solutions. From onboarding to performance management, we help organizations enhance efficiency and reduce administrative burden."
  },
  {
    icon: Calculator,
    title: "Payroll Processing",
    description: "Accurate and timely payroll processing is critical for employee satisfaction. Our payroll services ensure compliance and efficiency, freeing you to focus on strategic initiatives."
  },
  {
    icon: Scale,
    title: "Labor Law Compliance",
    description: "Navigate complex labor laws with confidence. Our compliance experts help ensure your organization adheres to all relevant regulations, reducing legal risks and protecting your business."
  },
  {
    icon: HeartHandshake,
    title: "Workplace Culture Development",
    description: "Foster a positive and inclusive workplace culture. We work with organizations to develop strategies that promote collaboration, innovation, and employee well-being."
  }
];

const benefits = [
  "Good feedback mechanism",
  "Digital transformation expertise",
  "Labor law compliance",
  "Efficient payroll processing",
  "Strategic HR consulting",
  "Employee retention strategies"
];

const HRSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">HR Solutions</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Empowering Your{" "}
              <span className="text-gradient-yellow">Workforce</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive suite of HR services helps organizations streamline their HR processes, 
              enhance employee engagement, and foster a positive workplace culture.
            </p>
            <Link to="/#inquiry">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              HR <span className="text-gradient-yellow">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored HR solutions that help organizations build and manage effective workforces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient-yellow">Namsbel</span> for HR?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We are a team of professionals who understand the trends and needs and provide 
                appropriate services with effective performance. In today's competitive world, 
                we help you update and digitize your HR operations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Partner with Excellence</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Choosing Namsbel is choosing a partner dedicated to your HR success. We stand out 
                for our unwavering commitment to excellence, innovative solutions, and a client-centric 
                approach. We understand that every business is unique, and we tailor our services to 
                meet your specific needs.
              </p>
              <Link to="/#contact">
                <Button variant="hero" className="w-full">
                  Contact Our HR Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRSolutions;
