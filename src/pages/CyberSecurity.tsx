import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Search, Server, AlertTriangle, GraduationCap, FileCheck, Lock, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Vulnerability Assessment & Penetration Testing",
    description: "Identify and address potential weaknesses in your systems through our thorough vulnerability assessments and penetration testing. Our experts simulate real-world cyber-attacks to evaluate the effectiveness of your security controls and provide actionable insights."
  },
  {
    icon: Server,
    title: "Managed Firewall Services",
    description: "Protect your network perimeter with our managed firewall services. We deploy state-of-the-art firewalls and continuously monitor and update them to ensure real-time defense against unauthorized access and malicious activities."
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & Forensics",
    description: "Be prepared for any cyber incident with our rapid and effective incident response services. Our team of cyber security experts will investigate and mitigate the impact of security incidents, helping you recover quickly and minimize potential damage."
  },
  {
    icon: Lock,
    title: "Endpoint Protection",
    description: "Secure your endpoints, including devices and servers, against malware, ransomware, and other threats. Our endpoint protection solutions provide advanced threat detection and response capabilities to safeguard your entire network."
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description: "Build a culture of cyber security within your organization through our customized training programs. Equip your employees with the knowledge and skills to recognize and respond to potential threats, reducing the risk of human-related security breaches."
  },
  {
    icon: FileCheck,
    title: "Compliance & Risk Management",
    description: "Ensure your business adheres to industry regulations and best practices. Our security audits and compliance services help you meet regulatory requirements and manage risks effectively."
  }
];

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Cyber Security</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Your Fortress Against{" "}
              <span className="text-gradient-yellow">Digital Threats</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              In the realm of cybersecurity, Namsbel stands as your fortress against digital threats. 
              Our cybersecurity services ensure the confidentiality, integrity, and availability of your data.
            </p>
            <Link to="/#inquiry">
              <Button variant="hero" size="lg" className="group">
                Secure Your Business
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
              Security <span className="text-gradient-yellow">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your digital assets
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Protect Your Digital Future
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Partner with Namsbel to fortify your organization against cyber threats. Our team of 
              security experts combines industry-leading tools with deep expertise to deliver 
              comprehensive protection for your business.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg">
                Get Protected Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberSecurity;
