import logo from './logo.svg';
import './App.css';
import TournamentPage from './components/Tournament';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />

      {/*{<TournamentPage />} */}
    </div>
  );
}

export default App;
