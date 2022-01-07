import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ContactCard = (props) => {
  console.log(props);
  const {
    handleClose,
    setShow,
    show,
    contactToEdit,
    saveEditedContact,
    currentContact,
  } = props;

  const [name, setName] = useState(currentContact?.name || "");
  const [phone, setPhone] = useState(currentContact?.phone || "");
  const [photo, setPhoto] = useState(currentContact?.photo || "");

  React.useEffect(() => {
    setName(currentContact?.name);
    setPhone(currentContact?.phone);
    setPhoto(currentContact?.photo);
  }, [currentContact]);
  console.log(currentContact);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}></Button>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" />
          {}
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Form.Group className="mb-3" />
          {/* <Form.Label>Photo</Form.Label> */}
          <Form.Control value={phone} />
          <Form.Group className="mb-3" />
          {/* <Form.Label>Photo</Form.Label> */}
          <Form.Control value={photo} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactCard;
