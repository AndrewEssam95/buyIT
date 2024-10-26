import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import Input from "@components/form/Input";
import useRegister from "@hooks/useRegister";

const { container, title } = styles;

const Register = () => {
  const {
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    emailAvailabilityStatus,
    emailOnBlurHandler,
  } = useRegister();

  return (
    <section className={`${container} mb-5`}>
      <Container style={{ marginTop: -10, padding: 10 }}>
        <h1 className={title}>User Register</h1>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="First Name"
                name="firstName"
                error={errors.firstName?.message}
                register={register}
              />
              <Input
                label="Last Name"
                name="lastName"
                error={errors.lastName?.message}
                register={register}
              />
              <Input
                label="Email Address"
                name="email"
                register={register}
                onBLur={emailOnBlurHandler}
                error={
                  errors.email?.message
                    ? errors.email?.message
                    : emailAvailabilityStatus === "notAvailable"
                    ? "This email is already in use."
                    : emailAvailabilityStatus === "failed"
                    ? "Error from the server."
                    : ""
                }
                formText={
                  emailAvailabilityStatus === "checking"
                    ? "We're currently checking the availability of this email address. Please wait a moment."
                    : ""
                }
                success={
                  emailAvailabilityStatus === "available"
                    ? "This email is available for use."
                    : ""
                }
                disabled={emailAvailabilityStatus === "checking"}
              />
              <Input
                label="Password"
                type="password"
                name="password"
                error={errors.password?.message}
                register={register}
              />
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                error={errors.confirmPassword?.message}
                register={register}
              />
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  style={{ color: "#fff" }}>
                  <>
                    {loading === "pending" ? (
                      <Spinner animation="border" />
                    ) : (
                      "Register"
                    )}
                  </>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
