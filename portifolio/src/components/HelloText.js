import { Component } from 'react';
import ControlledCarousel from '../components/carousel'
// import {Carousel} from 'react-bootstrap';
// import imagem1 from '../images/imagem1.jpg'
// import imagem2 from '../images/imagem2.jpg'
// import imagem3 from '../images/imagem3.jpg'
// import imagem4 from '../images/imagem4.jpg'


class HelloText extends Component {
  render() {
    return (
      <div className="helloText">
        {/* <p>Página Inicial</p> */}
        <div className="carouselStats">
          <ControlledCarousel />
        </div>
      </div>
    )
  }
}

export default HelloText;