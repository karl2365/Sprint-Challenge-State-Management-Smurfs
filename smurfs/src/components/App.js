import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import Smurfs from './Smurfs';
import Axios from "axios";


function App() {

  const [smurfs, setSmurfs] = useState([]);
    useEffect(() => {
      Axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data);
      })
      .catch(err => console.log(err))

    },[])
   
    if (!smurfs) return <h1>Loading...</h1>
    return (
      <div className="App">
        <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
          <Smurfs />
        </SmurfContext.Provider>
      </div>
    );
  
}

export default App;
