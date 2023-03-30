// Hooks
import { useEffect } from "react";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Arrow90degDown } from "react-bootstrap-icons";

// Pages
import Header from "../assets/img/header.png";

// Animations
import AOS from "aos";
import "aos/dist/aos.css";

// Resume
import resume from "../assets/resume-fabiobronze.pdf";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row data-aos="fade-up" className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="min">I'm Fábio Bronze and...</span> <br />
            <span className="med">This is my portfolio!</span> <br />
            <h1>
              Front-End Developer <Arrow90degDown size={30} />
            </h1>
            <p>
              Hello, World! I'm a Junior Front-End Developer and I am a recent
              graduate in programming, with skills for Web development.
              Currently, I am looking for new job opportunities where I can
              contribute and help the company as much as possible.
            </p>
            <p>
              Below, you can see my resume with more detailed information about
              myself and my professional experience.{" "}
              <Arrow90degDown size={15} />
            </p>
            <button>
              <a href={resume} download="resume.pdf">
                Download CV <ArrowRightCircle size={25} />
              </a>
            </button>
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
