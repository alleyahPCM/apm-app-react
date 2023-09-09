import React from "react";

import CarouselComponent from "../components/CarouselComponent";
import MembersComponent from "../components/MembersComponent";

import '../App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="d-flex flex-column">
      <CarouselComponent/>
      <MembersComponent/>
    </div>
  );
}

export default Home;
