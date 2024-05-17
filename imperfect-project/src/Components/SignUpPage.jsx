import React from "react";

function SignUpPage() {




  return (
    <>
      <main>
        <div>
          <h1 className="text-center text-2xl">SignUp Page</h1>
        </div>

        <div>
          <label htmlFor="username">
            Username
            <input type="text" placeholder="Enter username" required />
          </label>
          <label htmlFor="email"></label>
          Email
          <input
            type="email"
            placeholder="Enter your email"
            pattern="/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          />
          <label htmlFor="phonenumber">
            PhoneNumber
            <input type="tel" maxLength={10} pattern="[0-9]{10} required" />
          </label>
          <label htmlFor="password">
            <input type="password" placeholder="Enter your password required " />
          </label>
        </div>
      </main>
    </>
  );
}

export default SignUpPage;
