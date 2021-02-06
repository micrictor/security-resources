import { Container, Typography } from '@material-ui/core';
import NewsCard from './components/NewsCard'
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Container>
        <Typography variant="h1">Hello!</Typography>
        <NewsCard
          title="News!"
          label="Things happened"
          description="Look at all the stuff that happened!"
        />
      </Container>
    </div>
  );
}

export default App;
