import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SkeletonTheme } from "react-loading-skeleton";

import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Music from "./views/Music";
import SignUp from "./views/SignUp";
import Haerin from "./views/Haerin";

function App() {
  return (
    <div className="App container-fluid d-flex flex-column">
      <SkeletonTheme baseColor="#D2D4DB" highlightColor="#F9FAFC">
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/haerin" element={<Haerin/>}/>
        </Routes>
        <FooterComponent/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
