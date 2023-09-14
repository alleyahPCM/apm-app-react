import React from "react";

import CarouselComponent from "../components/CarouselComponent";
import MembersComponent from "../components/MembersComponent";

function Home() {
  return (
    <div className="d-flex flex-column">
      <CarouselComponent/>
      <MembersComponent/>
    </div>
  );
}

export default Home;
