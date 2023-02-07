import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

import { isAuthenticatedState } from "../atoms/auth";
import supabase from "../supabaseClient";

const AuthSignup = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail((event.target as HTMLInputElement).value);
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword((event.target as HTMLInputElement).value);
  };
  const onTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const asyncSubmitSignUp = async () => {
    setIsProcessing(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      } else {
        setIsAuthenticated(true);
      }
      setIsProcessing(false);
    } catch (e) {
      setIsProcessing(false);
    }
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    asyncSubmitSignUp();
    event.preventDefault();
  };

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          autoComplete="username"
          disabled={isProcessing}
          id="email"
          name="email"
          onChange={onChangeEmail}
          ref={emailInputRef}
          type="email"
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          autoComplete="new-password"
          disabled={isProcessing}
          id="password"
          name="password"
          onChange={onChangePassword}
          type={isPasswordVisible ? "text" : "password"}
          value={password}
        />
        <button onClick={onTogglePasswordVisibility} type="button">
          Toggle password visibility
        </button>
      </div>
      <button disabled={isProcessing} type="submit">
        Sign up
      </button>
    </form>
  );
};

export default AuthSignup;
