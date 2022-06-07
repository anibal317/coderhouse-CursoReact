import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count+1)
  }

  return (
    <div className="App">
      <h2>La cantidad es = {count}</h2>
      <button onClick={increaseCount}>Aumentar</button>
    </div>
  );
}

export default App;
