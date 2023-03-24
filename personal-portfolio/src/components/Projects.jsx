// Bootstrap
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";

// Components
import ProjectCard from "./ProjectCard";

// Images
import proj from "../assets/img/project-img1.png";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proj,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proj,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proj,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proj,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proj,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: proj,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              consequuntur nisi mollitia quia, ducimus beatae dolorem laudantium
              dolorum corporis saepe. Quas sunt inventore aliquam, laboriosam
              fuga eaque tenetur deleniti repellendus?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
