import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack
} from "react-icons/si";
import { BsWindows } from 'react-icons/bs';
import { IoLogoWordpress } from 'react-icons/io5';
import './Toolstack.css'; // Make sure this CSS file is imported

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingTop: "50px", paddingBottom: "50px" }}>
      <Col xs={4} md={2}> {/* Remove tech-icons from Col */}
        <div className="tech-icon-wrapper"> {/* Renamed for clarity and placed tech-icons styles here */}
          <BsWindows />
          <span className="tooltip-text">Microsoft Windows</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <SiVisualstudiocode />
          <span className="tooltip-text">Visual Studio Code</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <SiSlack />
          <span className="tooltip-text">Slack</span>
        </div>
      </Col>
      <Col xs={4} md={2}>
        <div className="tech-icon-wrapper">
          <IoLogoWordpress />
          <span className="tooltip-text">Wordpress</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;