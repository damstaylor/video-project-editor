import "./ConfirmationModal.css";
import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function ConfirmationModal({children, show, title, handleSubmit, handleClose}) {
  const [showModal, setShowModal] = useState(show);
  const handleCancel = () => {
    handleClose();
  }
  const handleConfirm = () => {
    handleSubmit();
    handleClose();
  }
  useEffect(() => {
    setShowModal(show);
  }, [show]);
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          {title ? <Modal.Title>{title}</Modal.Title> : null}
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
