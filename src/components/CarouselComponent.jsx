import React from "react";

//carousel img
import ditto from "../img/ditto.png";
import omg from "../img/omg.png";
import coolwithyou from "../img/coolwithyou.png";
import newjeansppg from "../img/newjeans-ppg.png";

//carousel
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div className="carousel-container row">
      <div className="d-flex align-items-center justify-content-center">
        <Carousel className="carousel">
          <Carousel.Item>
            <img src={ditto} alt="ditto" />
            <Carousel.Caption>
              <h3>Ditto</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={omg} alt="omg" />
            <Carousel.Caption>
              <h3>OMG</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={coolwithyou} alt="cool with you" />
            <Carousel.Caption>
              <h3>Cool With You</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <img className="ppg" src={newjeansppg} alt="new jeans ppg" />
      </div>
    </div>
  );
}

export default CarouselComponent;
