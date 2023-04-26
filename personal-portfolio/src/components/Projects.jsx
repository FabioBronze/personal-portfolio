//Hooks
import { useEffect } from "react";

// Images
import img1 from "../assets/img/web-post.png";
import img2 from "../assets/img/disney-plus.png";
import img3 from "../assets/img/clone-apple.png";
import img4 from "../assets/img/movies-lib.png";
import img5 from "../assets/img/netflix.png";
import img6 from "../assets/img/calculator.png";

// Animations
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const data = [
    {
      id: 1,
      image: img1,
      title: "WebPost",
      github: "https://github.com/FabioBronze/social-media",
      demo: "https://gilded-boba-0c8c64.netlify.app/",
    },
    {
      id: 2,
      image: img2,
      title: "Disney Plus",
      github: "https://github.com/FabioBronze/disney-plus",
      demo: "https://disney-plus-clone-snowy.vercel.app/",
    },
    {
      id: 3,
      image: img5,
      title: "Netflix API Project",
      github: "https://github.com/FabioBronze/netflix-API-project",
      demo: "https://netflix-api-project.vercel.app/",
    },
    {
      id: 4,
      image: img4,
      title: "Movies Library API",
      github: "https://github.com/FabioBronze/movies-lib",
      demo: "https://taupe-chaja-0fde7e.netlify.app/",
    },
    {
      id: 5,
      image: img3,
      title: "Apple",
      github: "https://github.com/FabioBronze/clone-apple",
      demo: "https://clone-apple-black.vercel.app/",
    },
    {
      id: 6,
      image: img6,
      title: "Calculator",
      github: "https://github.com/FabioBronze/calculadora",
      demo: "https://calculadora-eta-tawny.vercel.app/",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects">
      <h3>Projects</h3>
      <div data-aos="fade-up" className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <div className="portfolio-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
