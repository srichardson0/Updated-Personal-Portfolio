import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiDatabase
} from "react-icons/di";
import { SiTableau } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import './Toolstack.css'; // Import the new CSS file

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingTop: "20px" ,paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper"> {/* Wrapper for icon and tooltip */}
          <DiPython />
          <span className="tooltip-text">Python</span> {/* Tooltip text */}
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <DiDatabase />
          <span className="tooltip-text">SQL</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <SiTableau />
          <span className="tooltip-text">Tableau</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <FaAws />
          <span className="tooltip-text">Amazon Web Services</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <DiGit />
          <span className="tooltip-text">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <DiJavascript1 />
          <span className="tooltip-text">Javascript</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;