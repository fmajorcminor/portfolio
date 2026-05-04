import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogIndex from "../../../WebstormProjects/portfolio/src/pages/BlogIndex";
import BlogPost from "../../../WebstormProjects/portfolio/src/pages/BlogPost";
import "../../../WebstormProjects/portfolio/src/pages/blog.css";

function Home() {
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

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </BrowserRouter>
    );
}
