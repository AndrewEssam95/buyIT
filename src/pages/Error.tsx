import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const Error = () => {
  return (
    <Container className={styles.notFound}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <LottieHandler type="error" />
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </div>
    </Container>
  );
};

export default Error;
