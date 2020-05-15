import React, { Component } from "react";
import "./App.css";

//components
import Smurfs from "./components/Smurfs";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurfs />
    </div>
  );
}

export default App;
