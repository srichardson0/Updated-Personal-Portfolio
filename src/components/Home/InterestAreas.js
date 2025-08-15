import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRobot, FaChartBar, FaBookReader, FaCode } from "react-icons/fa";
import { SiNaturallanguageprocessing } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

function InterestAreas() {
  const interests = [
    {
      icon: <GiArtificialIntelligence />,
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, Neural Networks",
      color: "#c770f0"
    },
    {
      icon: <SiNaturallanguageprocessing />,
      title: "NLP",
      description: "Text Analysis, Language Processing, Sentiment Analysis",
      color: "#6c63ff"
    },
    {
      icon: <FaChartBar />,
      title: "Data Visualization",
      description: "Interactive Visualizations, Data Storytelling",
      color: "#ff4757"
    },
    {
      icon: <FaBookReader />,
      title: "Digital Humanities",
      description: "Cultural Analytics, Digital Archives, Text Mining",
      color: "#ffa502"
    }
  ];

  return (
    <Container fluid className="interest-section">
      <Container>
        <h1 className="project-heading" style={{ marginBottom: "50px" }}>
          Areas of <strong className="purple">Interest</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {interests.map((interest, index) => (
            <Col md={3} className="interest-card" key={index}>
              <motion.div
                className="interest-card-inner"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(199, 112, 240, 0.3)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  height: "100%",
                  border: "1px solid rgba(199, 112, 240, 0.2)"
                }}
              >
                <div 
                  style={{ 
                    fontSize: "3rem", 
                    color: interest.color,
                    marginBottom: "1rem"
                  }}
                >
                  {interest.icon}
                </div>
                <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>
                  {interest.title}
                </h3>
                <p style={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                  {interest.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default InterestAreas;