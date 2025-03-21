import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../src/CSS/index.css";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      normalizeWheel: true,
    });

    const updateScroll = (time) => {
      lenis.raf(time * 1000); 
      ScrollTrigger.update();
    };

    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual"; 
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
