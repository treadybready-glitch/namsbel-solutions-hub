import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Irfan Bellary",
    role: "Director",
    image: "https://static.wixstatic.com/media/c2105a_b2587d19939641f996504b6a525a0403~mv2.jpeg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Irfan%20Sir.jpeg"
  },
  {
    name: "Sneha",
    role: "Talent Head",
    image: "https://static.wixstatic.com/media/c2105a_d8e89fc5c91d405ca98dce423a0f26f6~mv2.jpeg/v1/fill/w_287,h_323,al_c,lg_1,q_80,enc_avif,quality_auto/Sneha_PP.jpeg"
  },
  {
    name: "Praveen Sarkar",
    role: "Finance & Business Control",
    image: "https://static.wixstatic.com/media/c2105a_2aec0731991a4d12ae4cbf05872122a3~mv2.jpeg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Praveen%20Sarkar.jpeg"
  },
  {
    name: "Kavya I",
    role: "HR",
    image: "https://static.wixstatic.com/media/c2105a_fd2d4cd640bd4bfaa6031c54d00c6715~mv2.jpeg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kavya_PP.jpeg"
  },
  {
    name: "Rahul Shrivastav",
    role: "Business Development",
    image: "https://static.wixstatic.com/media/c2105a_d55f89fda0fe49f1b8870968c583f882~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rahul%20S_edited.jpg"
  },
  {
    name: "Vamshi",
    role: "COO - IT",
    image: "https://static.wixstatic.com/media/c2105a_88950d068f78426d8502671b2d53bcf9~mv2.jpeg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vamshi_PP.jpeg"
  },
  {
    name: "Asma S Y",
    role: "Director Technical",
    image: "https://static.wixstatic.com/media/c2105a_dbf5ff1a961f4cf78d6dc5545102f413~mv2.png/v1/fill/w_287,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18.png"
  },
  {
    name: "Arun",
    role: "Project Management",
    image: "https://static.wixstatic.com/media/c2105a_2658508291154976acf07d4e3aeb9805~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Arun%20PP%20phto.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Our Team</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient-yellow">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A team of professionals dedicated to your success, bringing expertise and innovation to every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-display font-bold text-sm text-foreground mb-0.5 truncate">
                  {member.name}
                </h3>
                <p className="text-primary text-xs font-medium truncate">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
