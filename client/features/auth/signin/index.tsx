import React, { ChangeEvent,useEffect } from "react";
import SubmitHandler from "../utils/onSubmit";
import { useSelector,useDispatch } from "react-redux";
import {RootState} from "../../../redux/app";
import {useRouter} from "next/router";
interface Props {
  setIsSignupPage: (val: boolean) => void;
}
function Signin({ setIsSignupPage }: Props) {
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
    <form
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        SubmitHandler(e, "/api/auth/signin",dispatch);
      }}
    >
      <h1>Signin to your account</h1>
      <input required placeholder="Email" type="email" id="email" />
      <input required placeholder="Password" type="password" id="password" />
      <input type="submit" value="Signin" />
      <p>
        Don't have an account?{" "}
        <span
          onClick={() => {
            setIsSignupPage(true);
          }}
        >
          Signup
        </span>
      </p>
    </form>
  );
}

export default Signin;
