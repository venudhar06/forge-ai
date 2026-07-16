import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import DemoPreview from "../components/DemoPreview";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
function App() {
  return (
    <div className="bg-[#030712]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DemoPreview />
      <PricingSection />
     <FAQSection />
      <Footer />

    </div>
  );
}

export default App;