import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/*<h3> Website Design inspired by{" "}
            <a
              href="https://github.com/soumyajit4419" // The URL you want to link to
              style={{ color: "gray", textDecoration: "none" }} // Optional: Style the link
              target="_blank" // Optional: Opens link in a new tab
              rel="noopener noreferrer" // Optional: Security best practice for target="_blank"
            >
              Soumyajit Behera
            </a>
            </h3>*/}
        </Col>
       
      </Row>
    </Container>
  );
}

export default Footer;
