import silverWolfLogo from "./assets/silverwolf-icon.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a
          href="https://honkai-star-rail.fandom.com/wiki/Silver_Wolf"
          target="_blank"
        >
          <img src={silverWolfLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Hello, World!</h2>
    </>
  );
}

export default App;
