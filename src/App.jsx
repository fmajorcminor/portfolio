import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div className="flex flex-col h-screen text-[#485B63] bg-[#E3E1C9]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
