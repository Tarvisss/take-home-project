import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";


const HomePage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 text-center">
            <Card className="shadow-sm" style={{ width: '40rem' }}>
              <Card.Img variant="top" src="public/pexels-veeterzy-38136.jpg" />
              <Card.Body>
                <Card.Title >Welcome to For Fun</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Explore </Card.Link>
                <Card.Link href="#">About Us</Card.Link>
              </Card.Body>
            </Card>
        </Container>
      );
}

export default HomePage;