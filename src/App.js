import React, {useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about-us';
import Services from "./pages/Services";
import Platforms from "./pages/Platforms";




function App() {
  
  const [isExpanded, setExpanded]=useState(false);
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path='/about-us' Component={About}/>
      <Route path='/services' Component={Services}/>
      <Route path='/platforms' Component={Platforms}/>
    </Routes>
  </Router>
  );
}

export default App;
