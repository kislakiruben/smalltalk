import { useEffect, useRef, useState } from "react";

import { Button } from "./Button";
import { Input } from "./Input";
import { InputGroup } from "./InputGroup";
import { Label } from "./Label";

interface AuthFormSignUpProps {
  onShowLogIn: React.MouseEventHandler;
  onSubmit: Function;
}

const AuthFormSignUp = ({
  onShowLogIn,
  onSubmit: onSubmitCallback,
}: AuthFormSignUpProps) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
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
      await onSubmitCallback(email, password);
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
      <InputGroup>
        <h2 className="font-extrabold text-2xl mb-6">Sign up</h2>
        <Label htmlFor="email">Email:</Label>
        <Input
          autoComplete="username"
          disabled={isProcessing}
          id="email"
          name="email"
          onChange={onChangeEmail}
          ref={emailInputRef}
          type="email"
          value={email}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
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
      </InputGroup>
      <div className="flex items-center justify-between">
        <Button disabled={isProcessing} primary type="submit">
          Sign up
        </Button>
        <div className="text-sm text-slate-500">
          Already have an account?{" "}
          <button
            className="text-purple-700 hover:underline"
            onClick={onShowLogIn}
            type="button"
          >
            Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthFormSignUp;
