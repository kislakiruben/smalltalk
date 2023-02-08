import { useState } from "react";

import { Button } from "./Button";
import { Input } from "./Input";
import { InputGroup } from "./InputGroup";
import { Label } from "./Label";

interface AuthLoginProps {
  onShowSignUp: React.MouseEventHandler;
  onSubmit: Function;
}

const AuthLogin = ({
  onShowSignUp,
  onSubmit: onSubmitCallback,
}: AuthLoginProps) => {
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
      await onSubmitCallback(email, password);
      setIsProcessing(false);
    } catch (e) {
      setIsProcessing(false);
    }
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    asyncSubmitLogin();
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-extrabold text-2xl mb-6">Log in</h2>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          autoComplete="username"
          autoFocus
          disabled={isProcessing}
          id="email"
          onChange={onChangeEmail}
          type="email"
          value={email}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          autoComplete="current-password"
          disabled={isProcessing}
          id="password"
          onChange={onChangePassword}
          type="password"
          value={password}
        />
      </InputGroup>
      <div className="flex items-center justify-between">
        <Button disabled={isProcessing} primary type="submit">
          Log in
        </Button>
        <div className="text-sm text-slate-500">
          Don't have an account yet?{" "}
          <button
            className="text-purple-700 font-bold hover:underline"
            onClick={onShowSignUp}
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthLogin;
