import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setColor]=useState('olive')

  // function c(color){
  //   setColor(color)
  // }

  return (
    <>
      <div className='bg-black text-white h-screen w-full ' style={{backgroundColor:color}}>

        <div className='fixed flex  flex-wrap justify-center gap-8 bottom-124 inset-x-0 px-2'>
          <button onClick={()=>setColor('red')} className='bg-red-500 shadow-lg text-2xl rounded'  >Red</button>
          <button onClick={()=>setColor('blue')}className='bg-blue-500 shadow-lg text-2xl rounded'>Blue</button>
          <button onClick={()=>setColor('green')}className='bg-green-500 shadow-lg text-2xl rounded'>Green</button>
          <button onClick={()=>setColor('yellow')}className='bg-yellow-500 shadow-lg text-2xl rounded'>Yellow</button>
          <button onClick={()=>setColor('orange')}className='bg-orange-500 shadow-lg text-2xl rounded'>Orange</button>
        </div>

      </div>
    </>
  )
}

export default App
