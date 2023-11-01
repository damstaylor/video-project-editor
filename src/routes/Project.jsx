import mock from '../services/mock.json';
import {Card} from 'react-bootstrap';
import {useLoaderData} from "react-router-dom";

export async function loader({ params }) {
  const project = await mock.list.find(item => item.id === Number(params.projectId));
  return { project };
}

export default function Project() {
  const loaderData = useLoaderData();
  const project = loaderData.project;
  return (
    <>
      <a href={`/projects/`}>&lt; Back to projects</a>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}