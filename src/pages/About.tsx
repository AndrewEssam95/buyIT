import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-3">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>About BuyIT Store</h2>
          <p>
            Welcome to BuyIT store! We are dedicated to bringing you the best
            products with an easy and secure shopping experience. Our mission is
            to offer a wide range of high-quality items at competitive prices,
            while providing excellent customer service to ensure satisfaction.
          </p>
          <p>
            Whether you're looking for the latest trends or unique, hard-to-find
            products, we have something for everyone. Shop with us and discover
            a seamless online shopping journey.
          </p>
        </Col>
        <Col md={6}>
          <LottieHandler type="about" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Wide selection of products</li>
            <li>Competitive pricing</li>
            <li>Fast and secure checkout process</li>
            <li>Excellent customer service</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
