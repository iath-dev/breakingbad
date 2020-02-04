import React from 'react';
import { Button, Container } from './components';

function App() {

  const consultApi = () => {
    console.log('Consultando....');
  }

  return (
    <Container>
      <Button onClick={consultApi}>
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
