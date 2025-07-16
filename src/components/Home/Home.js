import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SASHA RICHARDSON</strong>
              </h1>

              {/* This is where your Type component content goes */}
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* Move the "MA Digital Humanities Student" text here */}
              <p style={{ textAlign: "left", marginLeft: 45, fontSize: "1.2em", fontWeight: "bold" }}>
                MA Digital Humanities Student @ The CUNY Graduate Center
              </p>
              {/* Add the mailto link here */}
              <p style={{ textAlign: "left",  marginLeft: 45, marginTop: 5 }}> {/* Adjust marginTop as needed for spacing */}
                <a href="mailto:sfrichardson9@gmail.com" style={{ color: '#888', textDecoration: 'none' }}>
                  sarichardson@graduatecenter.cuny.edu
                </a>
              </p>
            </Col>

            <Col md={4} style={{ paddingBottom: 20, marginTop: '-70px' }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
          {/* Removed the extra Row and Col that contained the text */}
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;