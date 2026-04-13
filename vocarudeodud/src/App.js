import logo from './logo.svg';
import './App.css';
import { LoginApp } from './components/LoginApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>sex</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginApp></LoginApp>
      </header>
    </div>
  );
}


export default App;
