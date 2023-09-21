import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about-us";
import Services from "./pages/Services";
import Platforms from "./pages/Platforms";
import Contact from "./pages/Contact";
import Sidebar from "./components/Navbar/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
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
