import './App.css'
import Counter from './Counter'
import {useState} from 'react'
// import Employee from './Employee'
function App() {
  const [state,setState] = useState(false)
  return (
    <div className='hello'>
      <h1 onClick={()=>setState(!state)}>Open Counter</h1>
      {state && <Counter/>}
    </div>
  );
}

export default App;
