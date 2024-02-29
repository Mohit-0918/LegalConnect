import logo from './resources/LegalConnect.svg';
import './CSS/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LegalConnect
        </p>
        <a
          className="App-link"
          href="https://github.com/Mohit-0918/LegalConnect"
          target="_blank"
          rel="noopener noreferrer"
        >
          Where Law Meets Connection, Solution Unfolds
        </a>
      </header>
    </div>
  );
}

export default App;
