import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <Container>
      <Row style={{ marginTop: 10, marginBottom: 10, minHeight: 500 }}>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item as={NavLink} end to="">
              Accont Info
            </ListGroup.Item>
            <ListGroup.Item as={NavLink} end to="orders">
              Orders
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileLayout;
