import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./styles/filter.css"

const Filter = () => {

    function filtering() {
        var input, filter, cards, cardContainer, title, i;
        input = document.getElementById("siteFilter");
        filter = input.value.toUpperCase();
        cardContainer = document.getElementById("filterItems");
        cards = cardContainer.getElementsByClassName("card");
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector(".card-body .h5.card-title");
            if (title && title.innerText.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }

    return (
        <Container className='filter-component'>
            <Row>
                <h2>
                    Filter out some cute pets here.
                </h2>
                <Col sm={12} className="mb-3">
                    <input type="text" id="siteFilter" className="form-control" onKeyUp={filtering} placeholder="Search for names.." />
                </Col>
            </Row>
            <Row id="filterItems">
                <Col sm={12} className="mb-3 grid-filter">
                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card One</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Two</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Three</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    {/* Cards Four to Eight */}
                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Four</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Five</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Six</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Seven</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title><a href="#">Card Eight</a></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                            <Card.Text>Some text.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Filter;
