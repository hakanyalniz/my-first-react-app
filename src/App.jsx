import silverWolfLogo from "./assets/silverwolf-icon.png";
import styled, { keyframes } from "styled-components";

// import "./App.css";

const logoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #9a2dffaa);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:nth-of-type(1) {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

function App() {
  return (
    <>
      <div>
        <a
          href="https://honkai-star-rail.fandom.com/wiki/Silver_Wolf"
          target="_blank"
          rel="noreferrer"
        >
          <Logo src={silverWolfLogo} alt="Vite logo"></Logo>
          {/* <img src={silverWolfLogo} className="logo" alt="Vite logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Hello, World!</h2>
    </>
  );
}

export default App;
