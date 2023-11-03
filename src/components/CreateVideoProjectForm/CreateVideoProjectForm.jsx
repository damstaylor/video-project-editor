import "./CreateVideoProjectForm.css";
import React, {useEffect, useRef} from "react";
import {Form} from "react-bootstrap";

const CreateVideoProjectForm = React.forwardRef(({formData, validated, handleInput, handleSubmit}, ref) => {
  const formRef = useRef(null);
  useEffect(() => {
    if (ref) {
      ref.current = {
        getFormValidity: () => formRef.current.checkValidity(),
      };
    }
  }, [ref]);
  return (
    <>
      <Form noValidate ref={formRef} validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nameCreateVideoProject">
          <Form.Label>Name</Form.Label>
          <Form.Control required
                        type="text"
                        name="name"
                        placeholder="Name of your project"
                        onInput={handleInput}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a project name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descCreateVideoProject">
          <Form.Label>Description</Form.Label>
          <Form.Control required
                        as="textarea"
                        name="description"
                        placeholder="What your project is about"
                        onInput={handleInput}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a project description.
          </Form.Control.Feedback>
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
});

export default CreateVideoProjectForm;
