import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './styles/Header.css';

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <section className='app-header'>
            {/* Logo */}
            <Col>
              <div className="logo">
                <img src="images/logo.svg" alt="" />
              </div>
            </Col>

            {/* Navbar */}
            <Navbar expand="lg" className="justify-content-center">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/#filterSection">Search</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Col className="btn-container">
              <Button variant="primary" className='btn' href="#donationSection">Donate Now</Button>
            </Col>
          </section>
        </Container>
      </header>
    </>
  );
};

export default Header;