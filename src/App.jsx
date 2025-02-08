import "./App.css";
import "./fonts/real-vhs-font/RealVhsFontRegular.ttf";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
