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

  
  return (
    <>
      {/* <div className='h-screen w-full bg-password'></div> */}
      <div className=' bg-zinc-900 h-screen w-full bg-hero bg-center bg-cover  bg-no-repeat'>
        
        <h1 className=' flex text-black justify-center items-center text-3xl pt-32 '>Password Generator</h1>
        
        <div className='mt-12 ml-12 mr-12 flex justify-center'>
          <input className='px-10 text-black '  type="text " value={password} placeholder='Enter your password' readOnly  ref={passwordRef} aria-label="Generated Password"/>
          &nbsp;
          <button className='text-gray- px-4 ' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex justify-center m-10'>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}

          />
          <label className='text-yellow-50' htmlFor="Length">Length:{length}</label>
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
          
          <label className='text-yellow-50' htmlFor="numbers">Numbers</label>
          &nbsp;
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          name="" 
          id="" 
          
          />
         
          <label className='text-yellow-50' htmlFor="numbers">Characters</label>

            

        </div>

      </div>

    </>
  )
  
}

export default App
