import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GridBackground />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
