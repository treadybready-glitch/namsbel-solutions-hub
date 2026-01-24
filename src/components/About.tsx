import { Award, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver future-proof solutions.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every project we undertake.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with our clients as trusted advisors.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building Tomorrow's{" "}
              <span className="text-gradient-yellow">Technology</span> Today
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded by <span className="text-foreground font-semibold">Irfan Bellary</span>, 
              namsbel is a premier IT consulting firm dedicated to helping businesses 
              navigate the complexities of digital transformation.
            </p>
            <p className="text-muted-foreground mb-8">
              With a passion for technology and a commitment to excellence, we partner 
              with organizations of all sizes to design, develop, and deploy solutions 
              that drive real business value. Our team combines deep technical expertise 
              with strategic thinking to solve your most challenging problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="font-display text-3xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div 
                key={title}
                className="p-6 rounded-2xl bg-card border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
