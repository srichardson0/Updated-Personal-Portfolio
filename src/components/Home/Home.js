import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/my-avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import EducationTimeline from "./EducationTimeline"; // Import the new component
import { Link } from "react-router-dom"; // Import Link
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import { FaLaptopCode, FaChartBar } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

function Home() {
  React.useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    function showSlides() {
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        dots[i].className = dots[i].className.replace(" active", "");
      }

      // Show next slide
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.opacity = "1";
      dots[slideIndex - 1].className += " active";

      // Change slide every 3 seconds
      setTimeout(showSlides, 5000);
    }

    showSlides();

    // Cleanup function
    return () => {
      const allTimeouts = setTimeout(() => {});
      for (let i = 0; i < allTimeouts; i++) {
        clearTimeout(i);
      }
    };
  }, []);

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

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              { /*
              <p style={{ textAlign: "left", marginLeft: 45, fontSize: "1.2em", fontWeight: "bold" }}>
                MA Digital Humanities Student @ The CUNY Graduate Center
              </p>
              <p style={{ textAlign: "left", marginLeft: 45, marginTop: 5 }}>
                <a href="mailto:sfrichardson9@gmail.com" style={{ color: '#888', textDecoration: 'none' }}>
                  sarichardson@graduatecenter.cuny.edu
                </a>
              </p>
                */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20, marginTop: "0px" }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid home-avatar" // Add this class
                  style={{ maxHeight: "900px", maxWidth: "100%", height: "auto" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* --- Education Timeline Section --- */}
      <Container fluid className="home-about-section" id="education">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <EducationTimeline />
            </Col>
          </Row>
          {/* Add the button here, typically in its own row or column for layout control */}
          {/* <Row className="justify-content-center mt-5">
            <Col md={4} className="text-center">
              {/* Add the custom class 'learn-more-btn' here */}
              {/* <Link to="/about" className="btn btn-primary btn-lg learn-more-btn">
                Learn More About Me
              </Link>
            </Col>
          </Row> */}
        </Container>
      </Container>
      {/* --- End Education Timeline Section --- */}
      {/* --- Areas of Interest Section --- */}
      <Container fluid className="home-about-section" id="interests">
        <Container>
          <h1 className="project-heading">
            Areas of <strong className="purple">Interest </strong>
          </h1>
          <div className="slideshow-container">
            {[
              {
                title: "Digital Humanities",
                description: "Exploring intersections of technology and humanities",
                icon: <FaLaptopCode size={40} />,
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              },
              {
                title: "Data Visualization",
                description: "Creating meaningful visual narratives from data",
                icon: <FaChartBar size={40} />,
                gradient: "linear-gradient(135deg, #2af598 0%, #009efd 100%)"
              },
              {
                title: "Artificial Intelligence",
                description: "Leveraging AI for innovative solutions",
                icon: <GiBrain size={40} />,
                gradient: "linear-gradient(135deg, #a5445dff 0%, #ffb199 100%)"
              }
            ].map((interest, index) => (
              <div key={index} className="slide fade">
                <div
                  className="interest-card"
                  style={{
                    background: interest.gradient,
                  }}
                >
                  <div className="interest-icon">{interest.icon}</div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              </div>
            ))}
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </Container>
      </Container>
      {/* --- End Areas of Interest Section --- */}
      {/* --- Skillset and Tools Section --- */}
      <Container fluid className="home-about-section">
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
      {/* --- End Skillset and Tools Section --- */}
      <Home2 />
    </section>
  );
}

export default Home;