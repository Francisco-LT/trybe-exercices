import React, {useState} from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import imagem1 from '../images/imagem1.jpg'
import imagem2 from '../images/imagem2.jpg'
import imagem3 from '../images/imagem3.jpg'
import imagem4 from '../images/imagem4.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem>
        <img
          className="d-block w-100 imageCarousel"
          src={imagem1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100 imageCarousel"
          src={imagem2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100 imageCarousel"
          src={imagem3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100 imageCarousel"
          src={imagem4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
    </div>
    // <div>  
    //   <div class='container-fluid' >
    //     <div className="row title" style={{ marginBottom: "20px" }} >
    //     </div>
    //   </div>
    //   <div className='container-fluid' >
    //     <Carousel>
    //       <Carousel.Item style={{'height':"300px"}} >
    //         <img 
    //           style={{'height':"300px"}}
    //           className="d-block w-100 imageCarousel"
    //           src={imagem1}
    //           alt="exemplo"
    //         />
    //         <Carousel.Caption>
    //           <h3>First Demo </h3>
    //         </Carousel.Caption>
    //       </Carousel.Item  >
    //       <Carousel.Item style={{'height':"300px"}}>  
    //         <img
    //           style={{'height':"300px"}}
    //           className="d-block w-100 imageCarousel"
    //           src={imagem2}
    //           alt="exemplo1"
    //         />
    //         <Carousel.Caption>
    //           <h3>Second Demo</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item style={{'height':"300px"}}>
    //         <img
    //           style={{'height':"300px"}}
    //           className="d-block w-100 imageCarousel"
    //           src={imagem3}
    //           alt="exemplo2"
    //         />
    //         <Carousel.Caption>
    //           <h3>Third Demo</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>
    //   </div>
    // </div>
  );
}

export default ControlledCarousel;