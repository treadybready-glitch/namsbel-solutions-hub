import { 
  Code2, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored applications built to solve your unique business challenges with modern technologies.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Seamless cloud migration, architecture design, and optimization for scalable infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security assessments, implementation, and ongoing protection strategies.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Design, optimization, and management of robust database solutions for your data needs.",
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
