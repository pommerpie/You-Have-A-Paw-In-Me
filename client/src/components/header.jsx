import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles/Header.css';

import Auth from '../utils/auth';
import coverImage from '../assets/cover/cover-image.jpg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Auth.loggedIn());
  }, []);

  const handleLogout = () => {
    Auth.logout();
    setIsLoggedIn(false);
  };
  return (
    <>
      {/* Top Bar */}
      <Navbar bg="light" expand="lg" className="top-bar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="tel:+123456789"><FaPhone /> +1 (234) 567-89</Nav.Link>
              <Nav.Link href="mailto:info@example.com"><FaEnvelope /> info@example.com</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#"><FaFacebook /></Nav.Link>
              <Nav.Link href="#"><FaTwitter /></Nav.Link>
              <Nav.Link href="#"><FaInstagram /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}
      <header>
        <Container>
                <img src={coverImage} position="bottom"></img>
          <Row>
            {/* Logo */}
            <Col>
              <div className="logo">Therapy Animal Support Fund</div>
            </Col>

            {/* Menu */}
            <Col>
              <Nav className="navlinks">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                {isLoggedIn ? (
                  <>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav.Item>
                  </>
                ) : (
                  <>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                    </Nav.Item>
                  </>
                )}
                <Nav.Item>
                  <Nav.Link as={Link} to="/search">Search</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Donate Button */}
            <Col className="donateButton">
              <Button variant="primary">Donate Now</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
