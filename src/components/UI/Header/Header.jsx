import React from 'react';
import Card from 'react-bootstrap/Card';
import './Header.css'; 

function Header() {
  return (
    <Card className="bg-dark text-white custom-card">
     
      <Card.Img src="src/assets/green.jpeg" alt="Project image" />
      <Card.ImgOverlay>
        <Card.Title>Welcome to my Portafolio</Card.Title>
    
      </Card.ImgOverlay>
    </Card>
  );
}

export default Header;
