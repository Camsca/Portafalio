import React, { useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Portafolio() {
  
   const [hovered, setHovered] = useState();
  //array of portafolio dta
  const portfolioData = [
    {
      id: 1,
      gif: 'src/assets/lava.gif',
      title: 'Project 1',
      description: 'Description for Project 1',
      link: 'https://snappergee.github.io/bookworm/bestsellers.html'
    },
    {
      id: 2,
      image: 'src/assets/image3.jpeg',
      title: 'Pocket Pal Note-Taking Application',
      description: 'Pocket Pal is a simple web-based note-taking application that allows users to create, save, and manage their notes conveniently. It provides an easy-to-use interface for organizing and retrieving your notes.',
      link: 'https://pocket-pal-0a3f48b51dea.herokuapp.com'
    },
    {
      id: 3,
      image: 'src/assets/blue.avif',
      title: 'ElectroMarket Express',
      description: 'ElectroMarket Express is a functional Express.js API that leverages Sequelize to interact with a MySQL database, providing a robust foundation for building e-commerce platforms in the electronics industry. This project allows businesses and consumers to conveniently engage in online buying and selling of electronic products.',
       link: 'https://drive.google.com/file/d/1EmX3N2FLxmfvmIHB1toH1okgAZ-a0JWi/view'
    },
    {
      id: 4,
      image: 'src/assets/images 4.jpeg',
      title: 'Code Connect: Social Network API',
      description: 'Code Connect is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Express.js is utilized for routing, alongside a MongoDB database, and the Mongoose ODM. Additionally, it makes use of the Express.js and Mongoose packages',
      link: 'https://github.com/Camsca/CodeConnect'
    },

  ];
  return(
      <Row xs={1} md={2} lg={4} className="g-4">
            {/* Mapping through portfolioData array to display each project */}
        {portfolioData.map((project) => (
          <Col key={project.id}>
            <Link to={project.link}>
              <Card
                className="portfolio-card"
              // Handling mouse enter and leave events to set hovered stat
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >/  {/* Conditionally rendering project GIF or image */}
                {project.gif ? (
                  <Card.Img
                    variant="top"
                    src={project.gif} 
                    style={{
                      filter: hovered === project.id ? 'blur(4px)' : 'none',
                      transition: 'filter 0.3s ease-in-out',
                      opacity: hovered === project.id ? 0.8 : 1,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                ) : (
                  <Card.Img
                    variant="top"
                    src={project.image} 
                    style={{
                      filter: hovered === project.id ? 'blur(4px)' : 'none',
                      transition: 'filter 0.3s ease-in-out',
                      opacity: hovered === project.id ? 0.8 : 1,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                )}
                 {/* Text displayed on hover */}
                <div
                  className="hover-text"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: hovered === project.id ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                >
                  <span>{project.title}</span>
                  <p>{project.description}</p>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
  
export default Portafolio;