import gio from './gio.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="imageText">My Cat Gio</h1>
        <img src={gio} className="App-logo" alt="logo" />
        <p>
          Likes: Biscuit-making, toes, and fighting his sister.
        </p>
      </header>
    </div>
  );
}

export default App;
