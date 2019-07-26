import React, { Component, useState } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import Smurfs from './Smurfs';


function App() {

  const [smurfs, setSmurfs] = useState([]);
  
    return (
      <div className="App">
        <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
          <Smurfs />
        </SmurfContext.Provider>
      </div>
    );
  
}

export default App;
