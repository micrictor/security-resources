import { Container, Typography } from '@material-ui/core';
import NewsCard from './components/NewsCard'
import './App.css';

function App() {
  return (
    <Container maxWidth="lg" class="App-header">
      <Typography variant="h1">Hello!</Typography>
      <NewsCard
        title="News!"
        label="Things happened"
        description="Look at all the stuff that happened!"
      />
    </Container>
  );
}

export default App;
