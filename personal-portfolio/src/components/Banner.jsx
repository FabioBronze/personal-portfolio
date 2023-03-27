import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Arrow90degDown } from "react-bootstrap-icons";
import Header from "../assets/img/header.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
              Hello everyone! I'm Fábio and i'm a junior front-end programmer
              looking for new job opportunities! i have just graduated in
              programming, and started studying in 2020. I've already had 4
              months of internship experience and i'm looking for my first job
              as a junior developer. Below you can see my resume with more
              detailed information about me.
            </p>
            <button onClick={() => console.log("connect")}>
              Download CV <ArrowRightCircle size={25} />
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
