import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Front-End Developer</span>
            <h1>
              {`Hi! I'm Fabio`}
              <span classNamewrap>Web Developer</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sed
                voluptatum rerum porro dolorem eum aspernatur maxime officia,
                tempore consectetur repellendus consequatur harum, voluptates
                perferendis dicta veritatis adipisci ullam delectus.
              </p>
              <button onClick={() => console.log("connect")}>
                Let's Connect
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src="" alt="Background" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
