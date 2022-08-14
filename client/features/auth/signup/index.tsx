import React from "react";

interface Props{
  setIsSignupPage:(val:boolean) => void;
}
function Signup({setIsSignupPage}:Props) {
  return (
    <form>
      <h1>Create a new account</h1>
      <input type="text" id="signupName" />
      <input type="email" id="signupEmail" />
      <input type="password" id="signupPassword" />
      <input type="submit" value="Signup" />
      <p>Already have an account? <span onClick={() => setIsSignupPage(false)}>Signin</span></p>
    </form>
  );
}

export default Signup;
