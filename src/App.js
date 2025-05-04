import logo from './logo.svg';
import './App.css';
import TournamentPage from './components/Tournament';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     {<TournamentPage />}
    </div>
  );
}

export default App;
