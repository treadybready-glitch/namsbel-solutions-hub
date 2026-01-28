import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, Settings, BookOpen, Handshake, ArrowRight, Layers, BarChart3, UserCheck, ShoppingCart, LineChart } from "lucide-react";

const recruitmentModules = [
  "SAP S/4HANA",
  "SAP Fiori",
  "SAP BW/4HANA",
  "SAP SuccessFactors",
  "SAP Ariba",
  "SAP Analytics Cloud"
];

const executionServices = [
  "SAP implementation and migration",
  "System integration",
  "Custom development",
  "Training and support"
];

const sapSolutions = [
  {
    icon: Database,
    title: "SAP S/4HANA",
    description: "SAP S/4HANA is an intelligent ERP suite designed to help businesses run simple in a digital and networked world. Built on the advanced in-memory platform, SAP HANA, it provides real-time insights and analytics, enabling organizations to make informed decisions quickly."
  },
  {
    icon: Layers,
    title: "SAP Fiori",
    description: "SAP Fiori is a user experience (UX) design approach that provides a consistent and intuitive interface across all SAP applications. It focuses on user-centric design principles, making it easier for users to interact with SAP software on any device."
  },
  {
    icon: BarChart3,
    title: "SAP BW/4HANA",
    description: "SAP BW/4HANA is a next-generation data warehousing solution that leverages the power of the SAP HANA platform. It allows organizations to consolidate, model, and analyze data from various sources in real-time."
  },
  {
    icon: UserCheck,
    title: "SAP SuccessFactors",
    description: "SAP SuccessFactors is a cloud-based human capital management (HCM) solution that helps organizations manage their workforce effectively. It covers recruitment, onboarding, performance management, and employee engagement."
  },
  {
    icon: ShoppingCart,
    title: "SAP Ariba",
    description: "SAP Ariba is a comprehensive procurement and supply chain management solution that connects businesses with suppliers globally. It streamlines the procurement process and enhances collaboration between buyers and suppliers."
  },
  {
    icon: LineChart,
    title: "SAP Analytics Cloud",
    description: "SAP Analytics Cloud is an all-in-one cloud platform for business intelligence, planning, and predictive analytics. It enables organizations to visualize and analyze data from various sources, driving better decision-making."
  }
];

const SAPServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">SAP Implementation</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Expert SAP Solutions for{" "}
              <span className="text-gradient-yellow">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              In a rapidly evolving business environment, having the right SAP talent is crucial for success. 
              Our SAP recruitment and execution firm is dedicated to bridging the gap between skilled 
              professionals and organizations looking to enhance their SAP capabilities.
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

      {/* Recruitment & Execution Services */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recruitment Services */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Recruitment Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer comprehensive recruitment services tailored to meet the unique needs of our clients. 
                Our team utilizes a robust selection process to identify candidates with the right skills, 
                experience, and cultural fit.
              </p>
              <div className="space-y-3">
                {recruitmentModules.map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Services */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Execution Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In addition to recruitment, we provide execution services to help organizations implement 
                and optimize their SAP solutions. Our consultants bring extensive industry experience and 
                technical expertise.
              </p>
              <div className="space-y-3">
                {executionServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-yellow">Commitments</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are committed to fostering long-term relationships with both our clients and candidates. 
              Our approach is centered around understanding the specific needs of each organization and 
              the aspirations of each candidate. We believe in transparency, integrity, and excellence 
              in all our interactions, ensuring that we deliver value to all stakeholders involved.
            </p>
          </div>
        </div>
      </section>

      {/* SAP Solutions Grid */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              SAP <span className="text-gradient-yellow">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SAP's Solutions collectively enhance organizational efficiency, improve user experience, 
              and enable data-driven decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sapSolutions.map((solution, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Transform Your Business with SAP
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              If you'd like more information about our SAP services and how we can help your 
              organization optimize its SAP capabilities, get in touch today.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SAPServices;
