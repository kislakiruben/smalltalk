import { Button, Input, InputGroup, Label } from "@dyteio/ui";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

import { isAuthenticatedState } from "../atoms/auth";
import supabase from "../supabaseClient";

const AuthLogin = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [password, setPassword] = useState("");
  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail((event.target as HTMLInputElement).value);
  };
  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword((event.target as HTMLInputElement).value);
  };
  const asyncSubmitLogin = async () => {
    setIsProcessing(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
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
    asyncSubmitLogin();
    event.preventDefault();
  };

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          autoComplete="username"
          disabled={isProcessing}
          id="email"
          onChange={onChangeEmail}
          ref={emailInputRef}
          type="email"
          value={email}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          autoComplete="current-password"
          disabled={isProcessing}
          id="password"
          onChange={onChangePassword}
          type="password"
          value={password}
        />
      </InputGroup>
      <Button disabled={isProcessing} primary type="submit">
        Log in
      </Button>
    </form>
  );
};

export default AuthLogin;
