import "./VideoProjectManager.css";
import mock from "./../../services/mock.json";
import {useState, useRef} from "react";
import VideoProjectList from "../VideoProjectList/VideoProjectList";
import CreateVideoProjectForm from "../CreateVideoProjectForm/CreateVideoProjectForm";
import {Button, Modal} from "react-bootstrap";

export default function VideoProjectManager() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'auto'
  });
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    setValidated(true);
    const form = formRef.current;
    if (form && form.getFormValidity()) {
      console.log(formData);
      handleClose();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      <Button onClick={handleShow}>Create new project</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new video project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateVideoProjectForm ref={formRef} formData={formData} validated={validated} handleInput={handleInput} handleSubmit={handleSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Create project
          </Button>
        </Modal.Footer>
      </Modal>
      <VideoProjectList list={mock.list} />
    </>
  );
}
