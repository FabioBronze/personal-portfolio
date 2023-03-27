import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Arrow90degDown } from "react-bootstrap-icons";
import Header from "../assets/img/header.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <span className="min">I'm Fábio Bronze and...</span> <br />
                  <span className="med">This is my portfolio!</span> <br />
                  <h1>
                    Front-End Developer <Arrow90degDown size={30} />
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                    sed voluptatum rerum porro dolorem eum aspernatur maxime
                    officia, tempore consectetur repellendus consequatur harum,
                    voluptates perferendis dicta veritatis adipisci ullam
                    delectus.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Download CV <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col className="cont-img" xs={12} md={6} xl={5}>
            <img className="header-img" src={Header} alt="Background" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
