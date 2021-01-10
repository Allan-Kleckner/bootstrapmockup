import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      Jeopardy!
        <Container>
          <Form>
            <Row>
              <Col md>
                <Card className= "mb-1" style={{ color: '#000' }}>The Answer is </Card>
                <Card className= "mb-1" style={{ color: '#000' }}>The API for the answer goes here</Card>
              </Col>
       
              <Col md>
                <Card className= "mb-1" style={{ color: '#000' }}>Who, what, where is ... </Card>
                <Card className= "mb-1" style={{ color: '#000' }}>The API question goes here</Card>
              </Col>
          </Row>
        </Form>
        <Button variant='primary' type='onClick'>Reveal the Question</Button>
        <Card className= "mb-1" style={{ color: '#000' }}>
          <Card.Img src='https://i.imgur.com/GNv1eXg.jpeg' />
        
        </Card>   
        </Container>        
      </header>
    </div>
  );
}

export default App;
