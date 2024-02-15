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
                        We are a platform that provides a comprehensive website and mobile application dedicated to enhancing accessibility to therapy animals for individuals experiencing emotional distress or physical challenges. 
                        
                        This initiative seamlessly merges a passion for animals with a steadfast commitment to mental health awareness. By offering a platform that provides resources, connects users with therapy animals, and fosters a supportive community, we aim to empower individuals seeking assistance to find comfort and companionship in their journey towards healing.


                        Thank you for joining us!
                        </p>
                        <Button variant="primary">Learn More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
