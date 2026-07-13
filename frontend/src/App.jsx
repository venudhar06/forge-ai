import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DemoPreview from "./components/DemoPreview";
function App() {
  return (
    <div className="bg-[#030712]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DemoPreview />
    </div>
  );
}

export default App;