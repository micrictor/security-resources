import { Container, Typography } from '@material-ui/core';
import './App.css';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App-header">
      <Container>
        <Typography variant="h1">Hello!</Typography>
        <CardGrid spacing={7} />
      </Container>
    </div>
  );
}

export default App;
