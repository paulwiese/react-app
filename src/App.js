import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { GlobalStateProvider } from "./components/GlobalState";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import P1 from "./pages/P1";
import P2 from "./pages/P2";

function App() {

  // localStorage.setItem('data', JSON.stringify({}))

  return (    
    <GlobalStateProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/p1" element={<P1/>}/>
          <Route path="/p2" element={<P2/>}/>
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
