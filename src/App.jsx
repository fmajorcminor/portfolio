import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

// import Interests from "./components/Interests.jsx";

function App() {
  return (
    <div className="flex flex-col h-screen" style={{ color: "#485B63" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/*<Interests />*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
