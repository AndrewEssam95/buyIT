import { Dispatch, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ILoginModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  message: string;
}

const LoginModal = ({ showModal, setShowModal, message }: ILoginModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      style={{ marginTop: 150 }}>
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}>
        {`You need to login first to ${message}.`}
        <Button onClick={() => navigate("/login")}>Log in</Button>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
