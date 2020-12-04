import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabla from './components/Tabla';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <Tabla />
      <Graph></Graph>
    </div>
  );
}

export default App;
