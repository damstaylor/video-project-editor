import "./CreateVideoProjectForm.css";
import {Form} from "react-bootstrap";

export default function CreateVideoProjectForm({formData, handleInput, handleSubmit}) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nameCreateVideoProject">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
                        name="name"
                        placeholder="Name of your project"
                        onInput={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descCreateVideoProject">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"
                        name="description"
                        placeholder="What your project is about"
                        onInput={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="typeCreateVideoProject">
          <Form.Label>Video editing type</Form.Label>
          <Form.Check type="radio"
                      label="Automated"
                      name="type"
                      id="auto"
                      value="auto"
                      checked={formData.type === 'auto'}
                      onChange={handleInput}
          />
          <Form.Check type="radio"
                      label="Manual (by an editor)"
                      name="type"
                      id="manual"
                      value="manual"
                      checked={formData.type === 'manual'}
                      onChange={handleInput}
          />
        </Form.Group>
      </Form>
    </>
  );
}
