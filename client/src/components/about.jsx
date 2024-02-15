import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src='images/bunny.jpeg' alt="About Us" className="thumbnail" />
                </Col>
                <Col md={6}>
                    <div className='p-2'>
                        <h2>Welcome to 'You Got A Paw In Me'</h2>
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
