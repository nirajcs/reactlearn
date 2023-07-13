import React,{useState,useEffect} from 'react'

function Counter() {
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log('Mounting...')
    console.log('Updating...'+count)
  }, [count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter