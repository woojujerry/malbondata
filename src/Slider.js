import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel className="slider-box">
      <Carousel.Item>
        <img
          src="../img/2.sldier/1.jpg"
          style={{ width: "1950px", height: "780px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../img/2.sldier/2.jpg"
          style={{ width: "1950px", height: "780px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../img/2.sldier/3.jpg"
          style={{ width: "1950px", height: "780px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../img/2.sldier/4.jpg"
          style={{ width: "1950px", height: "780px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;