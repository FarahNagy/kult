import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about-us";
import Services from "./pages/Services";
import Platforms from "./pages/Platforms";
import Contact from "./pages/Contact";
import Sidebar from "./components/Navbar/SideBar";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about-us" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/platforms" Component={Platforms} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
