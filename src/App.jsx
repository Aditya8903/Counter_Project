import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='numberCount'>
        <h1>{count}</h1>
      </div>
      <div className='ButtonsSection'>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
    </>
  )
}

export default App
