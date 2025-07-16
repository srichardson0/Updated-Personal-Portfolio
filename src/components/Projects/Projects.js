import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/peoplemap-project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="PeopleMap"
              description="PeopleMap is an open-source, web-based tool that visually maps researchers based on their interests and publications, using Natural Language Processing (NLP) techniques, addressing the challenge of outdated directories and fostering collaboration opportunities."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://poloclub.github.io/people-map/ml/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
