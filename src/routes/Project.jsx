import mock from '../services/mock.json';
import {Card} from 'react-bootstrap';
import {useLoaderData} from "react-router-dom";
import {useState} from "react";
import ConfirmationModal from "../components/ConfirmationModal/ConfirmationModal";

export async function loader({params}) {
  const project = await mock.list.find(item => item.id === Number(params.projectId));
  return {project};
}

export default function Project() {
  const loaderData = useLoaderData();
  const project = loaderData.project;
  const [showModal, setShowModal] = useState(false);
  const [modalOptions, setModalOptions] = useState(null);
  const deleteProject = () => {
    console.log("Project", project.name, "was deleted");
  };
  const openDeleteConfirmationModal = () => {
    setModalOptions({
      title: "Delete project",
      content: <div>Delete {project.name} project permanently?</div>,
      callback: () => deleteProject(project)
    });
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setModalOptions(null);
    setShowModal(false);
  };
  return (
    <>
      <ConfirmationModal show={showModal}
                         title={modalOptions?.title}
                         handleSubmit={modalOptions?.callback}
                         handleClose={handleCloseModal}
      >
        {modalOptions?.content}
      </ConfirmationModal>
      <a href={`/projects/`}>&lt; Back to projects</a>
      <Card className="Project" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="Project--footer">
          <div className="Project--link" onClick={openDeleteConfirmationModal}>Delete project</div>
        </Card.Footer>
      </Card>
    </>
  );
}