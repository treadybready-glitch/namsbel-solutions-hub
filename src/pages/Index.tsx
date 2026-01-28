import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import InquiryForm from "@/components/InquiryForm";
import Contact from "@/components/Contact";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <InquiryForm />
      <Contact />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
