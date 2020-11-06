import React, { useState } from 'react';
import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import Number from './components/Number';
import Interval from './components/Interval';

function App() {
  const [ min, setMin ] = useState(100);
  const [ max, setMax ] = useState(1000);

  return (
    <div className="App">
      <h1>React-Redux simples</h1>
      <div className="line">
        <Interval min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}></Interval>
      </div>
      <div className="line">
        <Average min={min} max={max}></Average>
        <Sum min={min} max={max}></Sum>
        <Number min={min} max={max}></Number>
      </div>
    </div>
  );
}

export default App;
