import React, {useState} from 'react';
import './App.css';
import Calculator from './Calculator'
import Output from './Output'



function App() {

    const [history,setHistory] = useState([])

    function updateHistory(s) {
        setHistory([s, ...history])
        console.log(s)
    }

  return (
    <div className="App">
        <div className="calculator-container">
            <Calculator setHistory={setHistory} updateHistory={updateHistory} />
        </div>
        <div className="output-container">
            <Output outputs={history} />
        </div>
    </div>
  );
}

export default App;
