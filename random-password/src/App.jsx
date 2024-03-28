import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef=useRef(null)
  const generatePassword=useCallback(()=>{

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) 
    {
    str+="0123456789"
    }
    if(charAllowed){ 
    str+="!@#$%^&*()_+"
    }

    for(let i=0;i<length;i++){

      const char=Math.floor(Math.random()*str.length+1)

       pass+=str.charAt(char)
      
       
    }

    setPassword(pass)

  },[length,setCharAllowed,setNumberAllowed])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  }
  
  useEffect(()=>{

    generatePassword()    
  },[length,numberAllowed,charAllowed])

  console.log(charAllowed);
  console.log(numberAllowed);

  return (
    <>
      <div className='bg-zinc-500 h-screen'>
        <h1 className='flex text-blue-100 justify-center text-3xl'>Password Generator</h1>
        <div className='m-10 flex justify-center'>
          <input className='px-[90px] text-black'  type="text " value={password} placeholder='Enter your password' readOnly  ref={passwordRef} aria-label="Generated Password"/>
          &nbsp;
          <button className='text-yellow-400 px-4' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex justify-center'>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}

          />
          <label className='text-amber-400' htmlFor="Length">Length:{length}</label>
          &nbsp;
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev )
           }}
          name="" 
          id="" 
          
          />
          
          <label className='text-amber-400' htmlFor="numbers">Numbers</label>
          &nbsp;
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          name="" 
          id="" 
          
          />
         
          <label className='text-amber-400' htmlFor="numbers">Characters</label>

            

        </div>

      </div>

    </>
  )
  
}

export default App
