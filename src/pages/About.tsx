import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <Container className="my-3">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="mb-4">{t("about.titleOne")}</h2>
          <p>{t("about.description")}</p>
        </Col>
        <Col md={6}>
          <LottieHandler type="about" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3>{t("about.titleTwo")}</h3>
          <ul>
            <li>{t("about.listItems.itemOne")}</li>
            <li>{t("about.listItems.itemTwo")}</li>
            <li>{t("about.listItems.itemThree")}</li>
            <li>{t("about.listItems.itemFour")}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
