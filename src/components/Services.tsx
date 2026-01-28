import { 
  Code2, 
  Cloud, 
  Shield, 
  Users, 
  Briefcase, 
  Layers,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "IT Solutions",
      description: "Managed IT Services, Cloud Solutions, Custom Software Development, and IT Consulting aligned with your business goals.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Network Security, Endpoint Protection, Incident Response, and Security Audits to safeguard your digital assets.",
    },
    {
      icon: Layers,
      title: "SAP Implementation",
      description: "Expert SAP recruitment and execution, bridging skilled professionals with organizations enhancing SAP capabilities.",
    },
    {
      icon: Users,
      title: "Talent Scouting",
      description: "Finding the right talent for your organization through our extensive network and industry expertise.",
    },
    {
      icon: Briefcase,
      title: "HR Solutions",
      description: "Comprehensive HR services including payroll processing, labor law compliance, and workforce management.",
    },
    {
      icon: Cloud,
      title: "ERP Solutions",
      description: "End-to-end ERP implementation and support to streamline your business operations and drive efficiency.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive{" "}
            <span className="text-gradient-yellow">IT Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we provide end-to-end technology services 
            tailored to your business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div 
              key={title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
