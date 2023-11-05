import "./VideoProjectManager.css";
import mock from "./../../services/mock.json";
import {useState, useRef} from "react";
import VideoProjectList from "../VideoProjectList/VideoProjectList";
import CreateVideoProjectForm from "../CreateVideoProjectForm/CreateVideoProjectForm";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import {Button} from "react-bootstrap";

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
    console.log("handleSubmit")
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
      <ConfirmationModal show={show}
                        title="Create new video project"
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
      >
          <CreateVideoProjectForm ref={formRef}
                                  formData={formData}
                                  validated={validated}
                                  handleInput={handleInput}
          />
      </ConfirmationModal>
      <VideoProjectList list={mock.list} />
    </>
  );
}
