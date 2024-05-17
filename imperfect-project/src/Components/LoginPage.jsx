import React,{useState} from "react";
import SignUpPage from "./SignUpPage";

function LoginPage() {
  
  const [showComponent,setShowComponent]=useState(false);
  
  const handleClick=()=>{
    setShowComponent(true);
  }


  return (
    <>
      
      <main className="bg-cyan-500 h-screen w-screen">
        
        <div className="flex flex-col items-center pt-52 gap-5 text-white ">
        <h1 className="text-3xl text-white">Login Page</h1>
        
          <label htmlFor="username">
            Username:
            <input
              className=" text-black"
              type="text"
              placeholder="Enter Username"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              className="text-black"
              type="password"
              placeholder="Enter Password"
            />
          </label>
          <button className=" ml-7 px-8 rounded-lg bg-cyan-400 hover:bg-cyan-700">
            LOGIN
          </button>

          <a href="">Forgot Password</a>
          <p>Don't have an account ? <a className="hover:underline underline-offset-1" onClick={handleClick}>signup</a></p>
          {showComponent && <SignUpPage/>}
        </div>
      </main>
      
    </>
  );
}

export default LoginPage;
