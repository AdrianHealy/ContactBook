import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ContactList = (props) => {
  const { setCurrentContact } = props;

  return (
    <div className="contact-list">
      <Row xs={1} md={3} className="g-4">
        {props.contacts.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img className="card-image" variant="top" src={item.photo} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Phone Number: <strong>{item.phone}</strong>
                </Card.Text>
                <Button onClick={(event) => props.setShow(true)}>
                  <img
                    style={{ width: "25px" }}
                    src="https://cdn-icons-png.flaticon.com/128/4334/4334039.png"
                  />
                </Button>
                <Button
                  onClick={() => props.deleteContact(item.id)}
                  type="submit"
                >
                  <img
                    style={{ width: "25px" }}
                    src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
                  />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
//console.log(props.contacts);

export default ContactList;
