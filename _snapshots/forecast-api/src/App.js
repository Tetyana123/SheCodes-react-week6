import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.tetyanakozak.io/" target="_blank">
           Tetyana Kozak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Tetyana123/SheCodes-react-week6.git"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://calm-granita-5d9b12.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}