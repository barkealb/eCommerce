import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const Brands = () => {
  return (
    <Container className="my-5">
      <span><h2 className="text-center mb-4 brand-text">Brands in Store</h2></span>
      <Row className="justify-content-center">
        <Col xs={4} md={3} className="mb-4">
          <Image src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo-500x281.png" fluid alt="Brand 1" />
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <Image src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" fluid alt="Brand 2" />
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <Image src="https://1000logos.net/wp-content/uploads/2017/03/Levis-Logo.png" fluid alt="Brand 3" />
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <Image src="https://i.imgur.com/1RHsB8n.png" fluid alt="Brand 4" />
        </Col>
        <Col xs={6} md={3} className="mb-4">
          <Image src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" fluid alt="Brand 5" />
        </Col>
      </Row>
    </Container>
  );
};

export default Brands;
