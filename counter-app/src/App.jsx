import { useState } from 'react'
import '../src/App.css'



function App() {
  const [count, setCount] = useState(0)


  const addValue=()=>{
    setCount(count+1)
  }

  const removeValue=()=>{
    setCount(count-1)
  }

  const defaultValue=()=>{
    setCount(0)
  }
    return (
    <>
     <h1>Use State Hook Basic Example </h1>
     <p>Counter Application</p>
     <p>The current value is {count}</p>
     <button className='add' onClick={addValue}>Increment</button>
     <button className='remove' onClick={removeValue}>Decrement</button>
     <br />
     <button className='default' onClick={defaultValue}>Reset</button>
    </>
  )
}

export default App
