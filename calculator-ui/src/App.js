import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Row, Col, Container, Button, Alert } from 'react-bootstrap';
import axios from 'axios';




function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);
  
  // Add division service URL here
  const div_url = 'http://division-service.eu-gb.mybluemix.net';

  const divButton = () => {
    setResult('Loading...');
    axios.get(div_url + '?num1=' + num1 + '&num2=' + num2).then((result) => {
      console.log(result.data.result);
      setResult(result.data.result);
    }).catch((error) => {
      console.log(error);
      setResult('Server Error');
    });
  }

  return (
    <div className="App" style={{marginTop: 25}}>
      <h1>Simple Division App</h1>
      <Container style={{marginTop: 40}}>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="First number"
                onChange={(e) => { setNum1(e.target.value) }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Second number"
                onChange={(e) => { setNum2(e.target.value) }} />
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 26, marginRight: 30 }}>=</span>
              <Form.Control value={result} disabled></Form.Control>
            </Col>
          </Row>
        </Form>
        <Form>
          <Row style={{ display: 'flex' }}>
            <Button onClick={divButton} style={{ flex: 1, marginTop: 20 }}>
              Division
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
