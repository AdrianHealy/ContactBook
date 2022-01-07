import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newContact = {
      name,
      phone,
      photo,
      id: Date.now(),
    };
    props.addContacts(newContact);
  }

  return (
    <div className="add-contact">
      <Form onSubmit={handleSubmit}>
        <h2>Contact Book</h2>
        <Form.Group className="mb-3">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Phone</Form.Label> */}
          <Form.Control
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            value={phone}
            type="number"
            placeholder="Enter number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label>Photo</Form.Label> */}
          <Form.Control
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
            type="text"
            placeholder="Enter photo"
          />
        </Form.Group>

        <Button onClick={handleSubmit} type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
