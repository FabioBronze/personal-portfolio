// Hooks
import { useState } from "react";

// Bootstrap
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
