import React from 'react';
import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import Number from './components/Number';
import Interval from './components/Interval';

function App() {
  return (
    <div className="App">
      <h1>React-Redux simples</h1>
      <div className="line">
        <Interval></Interval>
      </div>
      <div className="line">
        <Average></Average>
        <Sum></Sum>
        <Number></Number>
      </div>
    </div>
  );
}

export default App;
