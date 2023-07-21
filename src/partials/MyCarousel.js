import { Carousel } from 'react-bootstrap';

import ImgOne from "../assets/img/myOne.png";

import ImgTwo from "../assets/img/myTwo.png";

import ImgThree from "../assets/img/myThree.png";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={ImgTwo} className="d-block w-100" alt="MyOne" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgOne}  className="d-block w-100" alt="MyTwo" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgThree}  className="d-block w-100" alt="MyThree" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
