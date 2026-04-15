import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import Care from "@/components/Care";
import Biosafety from "@/components/Biosafety";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Portfolio />
    <About />
    <Process />
    <Care />
    <Biosafety />
    <CTAFinal />
    <Contact />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
