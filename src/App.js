import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import AppBar from './AppBar';
import AppRouter from './AppRouter';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <AppBar />
      <Container fluid>
        <AppRouter />
      </Container>
    </Router>
  );
}

export default App;
