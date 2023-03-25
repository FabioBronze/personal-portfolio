// Images
import img from "../assets/img/project-img1.png";

const Projects = () => {
  return (
    <section id="portfolio">
      <h3>My Recent Works</h3>
      <h4>Portfolio</h4>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img} alt="" />
          </div>
          <h4>Title</h4>
          <div className="portfolio-item-cta">
            <a href="https://github.com/FabioBronze" className="btn">
              Github
            </a>
            <a
              href="https://github.com/FabioBronze"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img} alt="" />
          </div>
          <h4>Title</h4>
          <div className="portfolio-item-cta">
            <a href="https://github.com/FabioBronze" className="btn">
              Github
            </a>
            <a
              href="https://github.com/FabioBronze"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img} alt="" />
          </div>
          <h4>Title</h4>
          <div className="portfolio-item-cta">
            <a href="https://github.com/FabioBronze" className="btn">
              Github
            </a>
            <a
              href="https://github.com/FabioBronze"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img} alt="" />
          </div>
          <h4>Title</h4>
          <div className="portfolio-item-cta">
            <a href="https://github.com/FabioBronze" className="btn">
              Github
            </a>
            <a
              href="https://github.com/FabioBronze"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img} alt="" />
          </div>
          <h4>Title</h4>
          <div className="portfolio-item-cta">
            <a href="https://github.com/FabioBronze" className="btn">
              Github
            </a>
            <a
              href="https://github.com/FabioBronze"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img} alt="" />
          </div>
          <h4>Title</h4>
          <div className="portfolio-item-cta">
            <a href="https://github.com/FabioBronze" className="btn">
              Github
            </a>
            <a
              href="https://github.com/FabioBronze"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
