// Bootstrap
import { Col, Container, Row } from "react-bootstrap";

// Images
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <span className="logo">Fábio Bronze</span>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fabio-bronze/">
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a href="https://github.com/FabioBronze">
                <img src={navIcon2} alt="Github" />
              </a>
            </div>
            <p>Fábio Bronze | &copy;2023 All Rights Reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
