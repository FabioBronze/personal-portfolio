// Bootstrap
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
