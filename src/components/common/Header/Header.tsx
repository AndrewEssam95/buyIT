import Logo from "../Logo/Logo";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import { Button, Container, Offcanvas } from "react-bootstrap";
import styles from "./styles.module.css";
import HeaderRightBar from "../HeaderRightBar/HeaderRightBar";
import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useAppSelector } from "@store/hooks";

const { headerContainer, container } = styles;

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const theme = useAppSelector((state) => state.theme.theme);

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
          <Offcanvas
            responsive="lg"
            show={showOffcanvas}
            style={{ backgroundColor: "black" }}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body
              style={{
                backgroundColor: theme === "dark" ? "#000030" : "#f9f9f9",
              }}>
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
