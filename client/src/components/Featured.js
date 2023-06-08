import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Card } from 'react-bootstrap';
import data from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className='featured-container'>
      <span className='featured-text'>Featured Products</span>
      <Row>
        <Col>
          <Slider {...settings}>
            {data.map((product) => (
              <div key={product.id} className='card-container'>
                <Card className="featured-card" >
                  <Card.Img variant="top" src={product.image} className="featured-card-img" />
                  <Card.Body className='featured-body'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}$</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;

