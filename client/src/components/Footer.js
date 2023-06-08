import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row>
          <Col md={3} className="social-icons">
            <Row>
              <Col>
                <h5>Follow us</h5>
                <div className="d-flex justify-content-between flex-column">
                  <a href="#" className="text-decoration-none mb-2"><FontAwesomeIcon icon={faTwitter} size="lg" className="social-icon" /></a>
                  <a href="#" className="text-decoration-none mb-2"><FontAwesomeIcon icon={faFacebook} size="lg" className="social-icon" /></a>
                  <a href="#" className="text-decoration-none mb-2"><FontAwesomeIcon icon={faInstagram} size="lg" className="social-icon" /></a>
                </div>
              </Col>
              <Col className="subscribe-footer">
                <Form>
                  <Form.Group>
                    <Form.Label srOnly>BE A FRIEND</Form.Label>
                    <Form.Control type="email" placeholder="Email address" className="subscribe-input"/>
                  </Form.Group>
                  <Button variant="secondary" type="submit" className="subscribe-button">Subscribe Now</Button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="footer-lists">
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-lists">
            <ul className="list-unstyled">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Store Policy</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-lists">
            <ul className="list-unstyled">
              <li><a href="#">Email: info@example.com</a></li>
              <li><a href="#">Phone: +1 123-456-7890</a></li>
              <li><a href="#">Address: 123 Main Street, Anytown, USA</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;




