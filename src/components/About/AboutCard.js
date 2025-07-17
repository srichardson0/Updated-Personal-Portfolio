import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>      
              I am 
              <i>
                <b className="purple"> currently pursuing a Master of Arts in Digital Humanities </b> </i>
              with a
              <i>
                <b className="purple"> specialization in Data Visualization & Mapping </b> </i>
              at CUNY Graduate Center,
              building upon my Master of Science in Business Analytics from Baruch College
              and a Bachelor of Science in Computer Science from Fayetteville State
              University. My technical expertise spans a wide range of languages and tools,
              including
              <i>
                <b className="purple"> Python, R, SQL, Tableau, and various AWS services.</b>
              </i>          
              <br />
              <br />
              My work focuses on leveraging data to derive actionable insights, particularly
              in areas concerning
              <i>
                <b className="purple"> environmental justice, public policy, and social impact.</b>
              </i>
              I thrive in multidisciplinary environments, translating complex data into
              clear, policy-ready visualizations and recommendations.
              <br />
              <br />
             
          </p>
     
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
