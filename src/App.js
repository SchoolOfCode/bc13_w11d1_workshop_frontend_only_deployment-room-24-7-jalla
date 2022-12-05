import './App.css';

import {useState} from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  
  function addOneToCount() {
    setCount(count + 1)
  }

  function addFiveToCount() {
    setCount(count + 5)
  }

  function addTenToCount() {
    setCount(count + 10)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Who would win in a fight?</h1>
      <ul>
        <li>Jalla</li>
        <li>Callason</li>
      </ul>
    </div>
  );
}

export default App;
