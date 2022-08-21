import React, { ChangeEvent,useEffect } from "react";
import SubmitHandler from "../utils/onSubmit";
import { useSelector,useDispatch } from "react-redux";
import {RootState} from "../../../redux/app";
import {useRouter} from "next/router";
interface Props{
  setIsSignupPage:(val:boolean) => void;
}
function Signup({setIsSignupPage}:Props) {

  const authState = useSelector((state: RootState) => {
    return state.auth;
  });
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if(authState.isSignin){
        router.replace("/");
    }
  }, [authState])
  return (
    <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
      SubmitHandler(e, "/api/auth/signup",dispatch);
    }}>
      <h1>Create a new account</h1>
      <input required placeholder="Name" type="text" id="signupName" />
      <input required placeholder="Email" type="email" id="email" />
      <input required placeholder="Password" type="password" id="password" />
      <input type="submit" value="Signup" />
      <p>Already have an account? <span onClick={() => setIsSignupPage(false)}>Signin</span></p>
    </form>
  );
}

export default Signup;
