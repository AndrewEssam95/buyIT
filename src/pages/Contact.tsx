import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hooks";
import actSendMessage from "@store/messages/act/actSendMessage";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const dispatch = useAppDispatch();
  const [t] = useTranslation("global");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(actSendMessage(formData));
  };

  return (
    <Container className="mt-1 mb-5">
      <h1 className={styles.title}>{t("contact.title")}</h1>
      <Row className="text-center mb-4">
        <Col>
          <p className="fs-4">{t("contact.description")}</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 9, offset: 3 }} lg={{ span: 8 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{t("contact.name")}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>{t("contact.email")}</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("contact.message")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {t("contact.button")}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
