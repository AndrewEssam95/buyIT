import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Input from "@components/form/Input";
import useLogin from "@hooks/useLogin";

const { container, title } = styles;

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    searchParams,
    accessToken,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <section className={`${container} mb-5`}>
      <Container style={{ marginTop: -10, padding: 10 }}>
        <h1 className={title}>User Login</h1>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}>
            {searchParams.get("message") === "login_required" && (
              <Alert variant="success">
                You need to login to view this content
              </Alert>
            )}
            {searchParams.get("message") === "account_created" && (
              <Alert variant="success">
                Your account successfully created, you can log in now.
              </Alert>
            )}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Email Address"
                name="email"
                error={errors.email?.message}
                register={register}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                error={errors.password?.message}
                register={register}
              />
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ color: "#fff" }}>
                  Login
                </Button>
                <p className="fs-6">
                  Not signed up yet ?{" "}
                  <Link to="/register" style={{ color: "#00f", fontSize: 16 }}>
                    Register
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
