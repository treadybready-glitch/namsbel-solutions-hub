import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Cloud, Code, Network, Users, HeadphonesIcon, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Leverage our expertise to manage your IT infrastructure efficiently. From proactive monitoring to rapid issue resolution, our managed services ensure optimal performance and reliability, allowing you to focus on your core business activities."
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Embrace the flexibility and scalability of cloud computing with our tailored solutions. Whether you're looking to migrate to the cloud, optimize existing cloud infrastructure, or implement hybrid solutions, we've got you covered."
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Tailor-made software solutions to streamline your business processes and enhance efficiency. Our experienced development team creates scalable and user-friendly applications that meet your specific requirements."
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "We design, implement, and maintain robust networks that support your business operations while ensuring scalability and flexibility to meet future demands."
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Gain a competitive edge with our strategic IT consulting services. Our experts collaborate with you to develop customized IT strategies aligned with your business goals, ensuring technology is a catalyst for growth."
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support Services",
    description: "Receive prompt and effective IT support whenever you need it. Our dedicated support team is ready to assist with troubleshooting, issue resolution, and ensuring your systems run smoothly."
  }
];

const ITSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">IT Solutions</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Empowering Your Business with{" "}
              <span className="text-gradient-yellow">Cutting-Edge IT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Our IT Solutions are designed to empower your business by streamlining operations, 
              boosting efficiency, and fostering innovation. From managed services to custom development, 
              we provide comprehensive technology solutions.
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
              Our IT <span className="text-gradient-yellow">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your unique business needs
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

      {/* Ready to Deploy Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Deploy
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Partner with us to harness the full potential of technology. Whether you're looking to 
              modernize your IT infrastructure, streamline operations, or embark on a digital transformation 
              journey, we have the expertise to guide you. Contact us today to explore how our IT solutions 
              can propel your business forward.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSolutions;
