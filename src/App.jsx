import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      Learning

      Published 21 Dec 2023

      HTML & CSS foundations

      These languages are the backbone of every website, defining structure, content, and presentation.

      Greg Hooper

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
