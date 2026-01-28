import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Building2, FileText } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Briefcase,
      value: 15000,
      label: "Job Opportunities",
      suffix: "+",
    },
    {
      icon: Users,
      value: 32998,
      label: "Permanent Employees",
      suffix: "+",
    },
    {
      icon: Building2,
      value: 500,
      label: "Clients",
      suffix: "+",
    },
    {
      icon: FileText,
      value: 6600,
      label: "Contracts",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-border"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Namsbel In <span className="text-gradient-yellow">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, suffix }, index) => (
            <div 
              key={label}
              className="text-center group"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter 
                  value={value} 
                  suffix={suffix} 
                  animate={isVisible} 
                />
              </div>
              <p className="text-muted-foreground font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ 
  value, 
  suffix, 
  animate 
}: { 
  value: number; 
  suffix: string; 
  animate: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [animate, value]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default Stats;
