import React, { useState } from "react";
import "./StateExample.css";

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
    <>
      <div
        className="StateExample"
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
      <div className="counter">{clickCount}</div>
    </>
  );
}

export default StateExample;
