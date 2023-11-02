import "./VideoProjectManager.css";
import mock from "./../../services/mock.json";
import {useState} from "react";
import VideoProjectList from "../VideoProjectList/VideoProjectList";
import CreateVideoProjectForm from "../CreateVideoProjectForm/CreateVideoProjectForm";
import {Button, Modal} from "react-bootstrap";

export default function VideoProjectManager() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onCreateNewProject = () => {
    handleShow();
  };
  const handleFormSubmit = (formData) => {
    const {name, description, type} = formData;
    console.log("Call API with given parameters:", name, description, type);
    handleClose();
  };
  return (
    <>
      <Button onClick={onCreateNewProject}>Create new project</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new video project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateVideoProjectForm onFormSubmit={handleFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Create project
          </Button>
        </Modal.Footer>
      </Modal>
      <VideoProjectList list={mock.list} />
    </>
  );
}
