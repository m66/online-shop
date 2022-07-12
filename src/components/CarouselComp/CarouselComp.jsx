import React from "react";
import { Carousel } from "react-bootstrap";
import "./carouselComp.scss";

import img1 from "../../images/carousel/alexander-andrews-anUOLC3zMD4-unsplash.jpg";
import img2 from "../../images/carousel/ezra-jeffrey-comeau-ftzwHTueh7E-unsplash.jpg";
import img3 from "../../images/carousel/pratham-kumar-lY97zkaJJbo-unsplash.jpg";
import img4 from "../../images/carousel/rupixen-com-Q59HmzK38eQ-unsplash.jpg";
import img5 from "../../images/carousel/tamanna-rumee-eD1RNYzzUxc-unsplash.jpg";

function CarouselComp() {
  return (
    <Carousel className="carousel" variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Third slide"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
