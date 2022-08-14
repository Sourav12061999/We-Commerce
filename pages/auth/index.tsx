import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/auth.module.css";
import Signin from "../../client/features/auth/signin";
import Signup from "../../client/features/auth/signup";
function Auth() {
  const authContainerRef = useRef<HTMLDivElement>(null);
  const [isSignupPage, setIsSignupPage] = useState(true);

  useEffect(() => {
    if (authContainerRef.current && isSignupPage===false) {
       authContainerRef.current.style.transform = `rotateY(180deg)`;
    }else if(authContainerRef.current && isSignupPage===true){
      authContainerRef.current.style.transform = `rotateY(0deg)`;
    }
    console.log(isSignupPage);
    
  }, [isSignupPage]);

  return (
    <main>
      <div  className={styles.authContainer}>
        <div ref={authContainerRef} className={styles.authContainerInner}>
          <div>
            <Signup setIsSignupPage={setIsSignupPage} />
          </div>
          <div>
            <Signin setIsSignupPage={setIsSignupPage} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Auth;
