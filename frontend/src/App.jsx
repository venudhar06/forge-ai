import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
function App() {
  return (
    <div className="bg-[#030712]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App;