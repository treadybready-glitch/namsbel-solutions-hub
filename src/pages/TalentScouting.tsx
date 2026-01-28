import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Search, UserCheck, Briefcase, Award, Handshake, ArrowRight, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Identify and recruit top-level executives who can drive your organization forward. Our executive search services focus on finding leaders with the vision and expertise to make an impact."
  },
  {
    icon: UserCheck,
    title: "Candidate Screening",
    description: "Comprehensive screening processes ensure you only meet qualified candidates. We assess skills, experience, and cultural fit to find the perfect match for your organization."
  },
  {
    icon: Briefcase,
    title: "Industry-Specific Recruitment",
    description: "Leverage our expertise across multiple industries. From IT to healthcare, finance to manufacturing, we understand the unique talent requirements of each sector."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We maintain the highest standards in our recruitment process. Every candidate we present has been thoroughly vetted and verified to meet your specific requirements."
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    description: "We believe in building lasting relationships. Our approach focuses on understanding your evolving needs and providing continuous support for your talent acquisition strategy."
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Stay ahead with our industry insights. We provide valuable market intelligence on salary trends, skill availability, and competitive landscape to inform your hiring decisions."
  }
];

const stats = [
  { value: "15K+", label: "Job Opportunities" },
  { value: "32K+", label: "Permanent Employees" },
  { value: "500+", label: "Clients" },
  { value: "6600+", label: "Contracts" }
];

const TalentScouting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Talent Scouting</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Finding the{" "}
              <span className="text-gradient-yellow">Right Talent</span>{" "}
              for Your Success
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Our recruitment services focus on identifying, attracting, and retaining top talent. 
              We utilize advanced sourcing techniques, comprehensive screening processes, and in-depth 
              interviews to match the right candidates with the right roles.
            </p>
            <Link to="/#inquiry">
              <Button variant="hero" size="lg" className="group">
                Find Your Talent
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Talent <span className="text-gradient-yellow">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive recruitment solutions to build a strong workforce aligned with your strategic objectives
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

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Partner with Namsbel to access top talent across industries. Our proven track record 
              and commitment to excellence ensure you find the right people to drive your business forward.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg">
                Start Recruiting Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalentScouting;
