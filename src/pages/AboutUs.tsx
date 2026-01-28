import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Target, Rocket, Award, Calendar, Globe, ArrowRight, Users, Lightbulb, Handshake } from "lucide-react";

const deliverables = [
  "HR & Talent Scouting Excellence",
  "IT Services & Solutions",
  "SAP/ERP Implementation",
  "Oil & Gas Industry Support",
  "Digitization Services",
  "Cybersecurity Solutions"
];

const journey = [
  {
    year: "2017",
    title: "Namsbel Founded",
    description: "Incorporated Namsbel in India"
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Formation of Namsbel in Australia"
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Expanding to new markets and services"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology and trends to deliver cutting-edge solutions."
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "We believe in transparency and ethical practices in all our interactions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as partners with our clients, fostering long-term relationships."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do."
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About Namsbel</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Discover <span className="text-gradient-yellow">Namsbel</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Crafting Connections, Inspiring Innovations
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Who We <span className="text-gradient-yellow">Are</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At Namsbel, we are a dynamic force in the realm of cutting-edge solutions, specializing 
                in HR and Talent Scouting Excellence, IT Services, SAP/ERP, O&G, Digitization and Cybersecurity.
              </p>
              
              <p>
                We pride ourselves on being a team of passionate professionals driven by innovation and 
                a commitment to excellence. With a foundation built on expertise and a forward-thinking 
                approach, Namsbel emerges as a trustworthy partner dedicated to empowering businesses 
                in the ever-evolving digital landscape.
              </p>
              
              <p>
                With very strong leadership and board decision making team with 200+ years of cumulative 
                experience in various domains, with vast exposure to senior leadership roles in various 
                MNC's which gives a high edge against our market competitors.
              </p>
              
              <p>
                Our team beyond leadership consists of young talents with creative mindsets, which keeps 
                at par to adopt things at rapid pace. Namsbel's unique, dynamic and diversified teams in 
                various cities and countries helps our clients to get the required results in quick 
                turnaround time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Redefining the Way{" "}
                <span className="text-gradient-yellow">We Move</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Namsbel, our mission is to empower businesses with the tools and strategies they 
                need to thrive in the digital age. We are dedicated to providing cutting-edge Digital 
                Marketing solutions that amplify brand presence, IT Services that streamline operations 
                and elevate efficiency, and Cybersecurity measures that fortify digital assets against 
                emerging threats.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                By fostering innovation, delivering exceptional value, and cultivating lasting partnerships, 
                our mission is to be the catalyst for our clients' success, propelling them into a future 
                where possibilities are limitless and challenges are opportunities for growth.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Namsbel is a young company built by people and for people to serve our clients. 
                We aim to be in the Top 10 Companies in India in the HR/Talent Scouting business 
                by 2028 with an employee strength of 50,000+.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">2028</div>
                  <div className="text-sm text-muted-foreground">Target Year</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Employees Goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What We <span className="text-gradient-yellow">Deliver</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across multiple domains to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {deliverables.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-yellow">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-yellow">Journey</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              {journey.map((item, index) => (
                <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center flex-shrink-0 z-10">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="pt-3">
                    <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Global Presence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              With offices in Bangalore, Hyderabad, Mysuru, and London, we serve clients across 
              the globe with localized expertise and global standards.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
