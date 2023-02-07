import { useState } from "react";

import AuthLogIn from "./AuthLogIn";
import AuthSignUp from "./AuthSignUp";

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const onToggle = () => {
    setIsLoggingIn((prevState) => !prevState);
  };

  return (
    <div>
      <pre>Authentication</pre>
      {isLoggingIn ? <AuthLogIn /> : <AuthSignUp />}
      <button onClick={onToggle} type="button">
        {isLoggingIn ? "Sign up" : "Log in"}
      </button>
    </div>
  );
};

export default Auth;
