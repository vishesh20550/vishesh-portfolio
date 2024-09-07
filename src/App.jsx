import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Experience from "./Pages/Experience.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import bgVideo from "./assets/background.mp4";
import DotRing from "./components/DotRing.jsx";

function App() {
  return (
    <>
      <DotRing />
      <Router>
        <Navbar />
        <div className="bg-video">
          <video src={bgVideo} autoPlay loop muted />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route
              path="/experience"
              element={<Experience />}
            />*/}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
