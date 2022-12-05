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
      <h1>The most original app ever created</h1>
      <button className = "buttons" onClick={addOneToCount}> + 1 </button>
      <button className = "buttons" onClick={addFiveToCount}> + 5 </button>
      <button className = "buttons" onClick={addTenToCount}> + 10 </button>
      <h2> {count} </h2>
      <button className = "buttons" onClick={resetCount}> RESET!!! ⚠️ </button>
    </div>
  );
}

export default App;
