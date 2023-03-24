// Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

// Image
import Header from "../assets/img/header.png";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="min">I'm Fábio Bronze and...</span> <br />
            <span className="med">This is my portfolio!</span> <br />
            <h1>Front-End Developer</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sed
              voluptatum rerum porro dolorem eum aspernatur maxime officia,
              tempore consectetur repellendus consequatur harum, voluptates
              perferendis dicta veritatis adipisci ullam delectus.
            </p>
            <button onClick={() => console.log("connect")}>
              Download CV <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="header-img" src={Header} alt="Background" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
