import React from 'react'
import { useState } from 'react';






function LoginPage() {

  const [focus,setIsFocus]=useState(false)

  const handleFocus=()=>{
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false);
  };
  


  return (
    
    <main className=' bg-background-pattern bg-cover bg-center bg-no-repeat h-screen '>
    
      
    <h1 className='text-center text-4xl pb-4'>Recepie Hub</h1>
      <div className=' text-center pt-52'>
      
      <div className='mb-7'>

        <input
          className={`text-white ${focus ? 'bg-slate-600 focus:outline-none' :'' } ` }
          type="email"
          placeholder='Enter your email'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
     
      <div className='mb-7 focus:outline-none'>
        <input type="password"
        placeholder='Enter your password'
        />
      </div>
      <div>
        <button className='bg-slate-700 text-white pl-8 pr-8' type='submit'>Login</button>
      </div>
      </div>
    </main>

  )
}

export default LoginPage