import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Music from "./views/Music";
import SignUp from "./views/SignUp";

function App() {
  return (
    <div className="App container-fluid d-flex flex-column">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  );
}

export default App;
