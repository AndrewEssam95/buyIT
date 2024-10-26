import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import HeaderRightBar from "../HeaderRightBar/HeaderRightBar";
import { useState } from "react";

const { headerContainer, container } = styles;

const Header = () => {
  const [miniNavbar, setMiniNavbar] = useState(false);

  return (
    <header className={headerContainer}>
      <Container className={container}>
        <Row className="align-items-center bg-info w-100">
          <Col xs={{ span: 5 }}>
            <Navbar flexCol={false} />
          </Col>
          <Col xs={{ span: 4 }}>
            <Logo />
          </Col>
          <Col xs={{ span: 3 }}>
            <HeaderRightBar />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
