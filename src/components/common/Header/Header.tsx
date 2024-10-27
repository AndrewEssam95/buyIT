import Logo from "../Logo/Logo";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import HeaderRightBar from "../HeaderRightBar/HeaderRightBar";
import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";

const { headerContainer, container } = styles;

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <header className={headerContainer}>
      <Container className={container}>
        <div>
          <Button
            variant=""
            className="d-lg-none"
            onClick={() => setShowOffcanvas(!showOffcanvas)}>
            <HiBars3CenterLeft size={30} />
          </Button>
          <Offcanvas responsive="lg" show={showOffcanvas}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <CustomNavbar flexCol={showOffcanvas} />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <Logo />
        <HeaderRightBar />
      </Container>
    </header>
  );
};

export default Header;
