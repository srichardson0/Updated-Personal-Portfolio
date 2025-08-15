import React, { useState } from "react";
import { Container, Row, Col, Button, Ratio } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import peoplemapimg from "../../Assets/Projects/peoplemap-project.png";
import movieratingsimg from "../../Assets/Projects/movie_ratings.png";
import marketanalysisimg from "../../Assets/Projects/marketanalysis.png";
import { SiGooglescholar, SiOrcid } from "react-icons/si";

// 1. Store projects in an array with detailed tags
// 2. Add a tag navigation bar to filter projects by tags
// 3. Use Bootstrap for styling and layout
// 4. Render project cards with images, titles, descriptions, and links

// 1. Store projects in an array with detailed tags
const projects = [
  {
    imgPath: peoplemapimg,
    isBlog: false,
    tags: ["NLP", "D3.js", "Web Development"],
    title: "PeopleMap",
    description: "An open-source, web-based tool that visually maps researchers based on their interests and publications, addressing the challenge of outdated directories and fostering collaboration opportunities.",
    demoLink: "https://poloclub.github.io/people-map/ml/",
    ghLink: "https://github.com/poloclub/people-map"
  },
  {
    imgPath: movieratingsimg,
    isBlog: false,
    tags: ["Python"],
    title: "Hypothesis Testing of Movie Ratings Data",
    description: "Demonstrates essential skills involved in hypothesis testing. To do so, I will use a real dataset that stems from a replication attempt of published research (Wallisch & Whritner, 2017). ",
    ghLink: "https://github.com/srichardson0/Hypothesis-testing-of-movie-ratings-data#"
  },
  {
    imgPath: marketanalysisimg,
    isBlog: false,
    tags: ["Python"],
    title: "Marketing Analysis",
    description: "Using Python to conduct EDA, perform statistical analysis, visualize insights, and present data-driven solutions. This project showcases my ability to analyze marketing data and derive actionable insights.",
    ghLink: "https://github.com/srichardson0/MarketAnalysisProject"
  },
  // Add more projects here...
];

function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong>See What I've Worked on</strong>
        </h1>

        {/* Academic Profile Links */}
        <div className="home-about-social" style={{ marginBottom: "2rem" }}>
          <p>
            Find my academic publications on <span className="purple">Google Scholar </span> 
            and <span className="purple">ORCID</span>
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://scholar.google.com/citations?hl=en"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiGooglescholar />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://orcid.org/0009-0004-7585-4470"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiOrcid />
              </a>
            </li>
          </ul>
        </div>

        {/* Tag Navigation Bar */}
        <div className="tag-navigation" style={{
          position: 'sticky',
          top: '0',
          zIndex: 100,
          /*backgroundColor: '#fff',*/
          padding: '2rem 0',
          /*marginBottom: '2rem',*/
          /*borderBottom: '1px solid #ddd'*/
        }}>
          <Button
            variant={!selectedTag ? "dark" : "outline-dark"}
            className="mx-1 mb-2"
            onClick={() => setSelectedTag(null)}
          >
            All Projects
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "dark" : "outline-dark"}
              className="mx-1 mb-2"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
