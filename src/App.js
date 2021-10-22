import React from "react";
import Clock from "./components/clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Analog Clock</h1>
        <p>React Redux App.</p>
      </header>
      <main>
        <Clock size={300} />
      </main>
    </div>
  );
}

export default App;
