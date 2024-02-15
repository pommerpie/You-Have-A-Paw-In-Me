import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src='https://placehold.co/600x400' alt="About Us" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <div className='p-2'>
                        <h2>About Us</h2>
                        <p>
                            About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. 
                            About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here. About us goes here!
                        </p>
                        <Button variant="primary">Learn More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
