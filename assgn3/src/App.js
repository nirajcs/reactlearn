import { useState } from 'react';
import './App.css';
import User from './User'

function App() {
  const [count,setCount]=useState(1)
  return (
    <div className="App">
      <h1>{count}</h1>
      <User data={count} />
      <div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
      </div>
      {
        (count!==1) ? <div><button onClick={()=>{setCount(count-1)}}>-</button></div> : null
      }
    </div>
  );
}

export default App;
