import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'
import Calculus from './Calculus'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Name">
          <Calculus />
        </div>
      </header>
    </div>
  );
}

export default App;
