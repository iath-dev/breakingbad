import React from 'react';
import { Button, Container } from './components';
import Phrase from './container/phrase';

function App() {
  
  const [phrase, setPhrase] = React.useState({});

  const getPhrase = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const result = await api.json()
    setPhrase(result[0]);
  }

  React.useEffect(() => {
    getPhrase();
  }, [])

  return (
    <Container>
      <Phrase phrase={phrase} />
      <Button onClick={getPhrase}>
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
