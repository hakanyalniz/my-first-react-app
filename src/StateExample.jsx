import { useState } from "react";
import styled from "styled-components";

// import "./StateExample.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

// The key to react state is that everytime the stateValue is changed using setStateValue,
// the entire component is destroyed and rerendered. Except this time the new value of stateValue is used.
// The initial state provided when setting up the state hook is ignored on the subsequent renders.

function StateExample() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [clickCount, setClickCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setClickCount(clickCount + 1);
  };

  return (
    <FlexContainer>
      <ExampleForState
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <Button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </Button>
        ))}
      </ExampleForState>
      <Counter>{clickCount}</Counter>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  margin: auto;
  width: 90%;
`;

const ExampleForState = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
  transition: all 0.1s ease-in;
`;

const Button = styled.button`
  color: black;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  background-color: #f1f1f1;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    background-color: #fff;
  }

  &.selected {
    outline: 5px solid #000;
    background-color: #fff;
  }
`;

const Counter = styled.div`
  font-size: 2rem;
`;

export default StateExample;
