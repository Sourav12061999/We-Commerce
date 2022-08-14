import React from 'react'

interface Props{
  setIsSignupPage:(val:boolean) => void;
}
function Signin({setIsSignupPage}:Props) {
  return (
    <form>
        <h1>Signin to your account</h1>
        <input type="email" id="signinEmail" />
        <input type="password" id="signinPassword" />
        <input type="submit" value="Signin" />
        <p>Don't have an account? <span onClick={() =>{
           setIsSignupPage(true);
        }}>Signup</span></p>
    </form>
  )
}

export default Signin