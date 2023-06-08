import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  
  return (
    <Container className='hero-container'>
      <div className="container">
        <div className='hero-text-container'>
        <h1>Welcome to StyleWise</h1>
        <p>Shop the latest fashion trends and styles from our curated collection of clothing, shoes, and accessories.</p>
        <Button variant="secondary">Shop Now</Button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
