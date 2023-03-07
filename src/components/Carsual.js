import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assests/ndure.jpg';
import img2 from '../assests/255121148_3093118260967030_5025043842339542270_n.jpg';
import img3 from '../assests/maxresdefault.jpg';
function Carusal() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carusal;
