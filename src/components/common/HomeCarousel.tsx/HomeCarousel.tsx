import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel data-bs-theme="dark" interval={2000} style={{ marginTop: 10 }}>
      <Carousel.Item>
        <Image
          src="/public/assets/home/egen-2907-slider7.webp"
          style={{ width: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/public/assets/home/220524-en-d-slider1.webp"
          style={{ width: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/public/assets/home/egen-2907-slider4.webp"
          style={{ width: "100%" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
