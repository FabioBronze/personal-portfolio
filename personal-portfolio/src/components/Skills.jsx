import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "../assets/img/react.webp";
import JavaScript from "../assets/img/js.png";
import HTML from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const PreventDefault = (e) => {
    e.preventDefault();
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row data-aos="fade-up">
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Here, you can see the technologies I use and work with. Besides
                being a front-end programmer, I also have some knowledge in
                back-end (NodeJS) and some frameworks (Bootstrap). I study and
                learn every day to become more and more a qualified programmer.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div onDragStart={PreventDefault} className="item">
                  <img src={React} alt="React Lib" />
                  <h3>React</h3>
                </div>
                <div onDragStart={PreventDefault} className="item">
                  <img src={JavaScript} alt="JavaScript" />
                  <h3>JavaScript</h3>
                </div>
                <div onDragStart={PreventDefault} className="item">
                  <img src={HTML} alt="HTML" />
                  <h3>HTML</h3>
                </div>
                <div onDragStart={PreventDefault} className="item">
                  <img src={CSS} alt="CSS" />
                  <h3>CSS</h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
