import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css';
import logoImage from '../assets/me.jpg'; 


const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
                <Container fluid >
                    <Navbar.Brand href="#home" className="brand">
                        <img src={logoImage} alt="Logo" width="30" height="30"   className="me-avatar" /> Camila Carrasco
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#home">About Me</Nav.Link>
                            <Nav.Link href="#portafolio">Portafolio</Nav.Link>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
