import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./styles/donation.css"

const Donation = () => {
    return (
        <Container className='donation-component'>
            <Row className="align-items-center content-container">
                <section className="video-container">
                    <video autoPlay muted loop>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    
                    </video>
                    <div className="overlay"></div>
                    <div className="content">
                        <h3>
                            Donate here!
                        </h3>
                        <p>
                        Your donation to "You Got a Paw in ME" enables individuals in need to access therapy animals for emotional support and a compassionate community. Your support ensures that everyone, regardless of their challenges, can benefit from the healing power of animal companionship. Thank you for making a difference!

                        </p>
                        <button className='btn donate-btn'>
                            Donate
                        </button>
                    </div>
                </section>

            </Row>
        </Container>
    );
};

export default Donation;
