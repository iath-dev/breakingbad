import React from 'react';
import { Button, Container } from './components';
import Phrase from './container/phrase';

function App() {
  
  const [phrase, setPhrase] = React.useState({});

  const consultApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const result = await api.json()
    setPhrase(result[0]);
  }

  return (
    <Container>
      <Phrase phrase={phrase} />
      <Button onClick={consultApi}>
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
