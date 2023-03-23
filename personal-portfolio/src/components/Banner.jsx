// Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

// Hooks
import { useState, useEffect } from "react";

// Image
import Header from "../assets/img/header.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="min">I'm Fábio Bronze and...</span> <br />
            <span className="med">This is my portfolio!</span> <br />
            <h1>
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
            </h1>
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
