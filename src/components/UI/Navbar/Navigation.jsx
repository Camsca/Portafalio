import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/me.jpg'; 
import '../Navbar/navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to="#home" className="brand">
                        <img src={logoImage} alt="Logo" width="30" height="30" className="me-avatar" /> Camila Carrasco
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className=" justify-content-end  flex-grow-1 pe-3">
                            <Link to="/About"className="nav-link text-center">About Me</Link>
                            <Link to="/Portfolio"className="nav-link text-center">Portfolio</Link>
                            <Link to="/Resume"className="nav-link text-center">Resume</Link>
                            <Link to="/Contact"className="nav-link text-center">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};


export default Navigation;
