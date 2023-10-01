import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={ref}
      src={src}
      style={{ width: "50%", height: "auto" }}
      loop
      playsInline
    />
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}

export default function EffectExample() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Clock />

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <br />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}

// useEffect(
//     () => {
//       // execute side effect
//       return () => {
//         // cleanup function on unmounting or re-running effect
//       }
//     },
//     // optional dependency array
//     [/* 0 or more entries */]
//   )

// Effects are an escape hatch from the React paradigm.
// They let you “step outside” of React and synchronize your components with some external system like a non-React widget,
// network, or the browser DOM. If there is no external system involved (for example, if you want to
// update a component’s state when some props or state change), you shouldn’t need an Effect.

// You do not need effects for events. Code that runs when a component is displayed should be in effects, the rest should be in events.
// Effects allow you to also step outside the React rendering. Allowing you to do things at the end of rendering.

// Video example
// By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.
// When your VideoPlayer component renders (either the first time or if it re-renders), a few things will happen.
// First, React will update the screen, ensuring the <video> tag is in the DOM with the right props.
// Then React will run your Effect. Finally, your Effect will call play() or pause() depending on the value of isPlaying.

// if (isPlaying) {
//     ref.current.play();  // Calling these while rendering isn't allowed.
//   } else {
//     ref.current.pause(); // Also, this crashes.
//   }
// The reason this code isn’t correct is that it tries to do something with the DOM node during rendering.
// In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

// Moreover, when VideoPlayer is called for the first time, its DOM does not exist yet!
// There isn’t a DOM node yet to call play() or pause() on, because React doesn’t know what DOM to create until you return the JSX.
