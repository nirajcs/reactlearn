import React, { useRef } from 'react';

const App = () => {
  let inputRef = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    let inputValue = inputRef.current.value
    if (inputValue === '') {
      alert("Type anything")
      return
    }

    console.log(inputValue)
    inputRef.current.value=''
  }
  
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef}/>
      <button type='submit'>Submit</button>
     </form>
    </div>
  );
};

export default App;
