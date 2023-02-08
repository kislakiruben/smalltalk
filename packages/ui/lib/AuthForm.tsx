import { useState } from "react";

import AuthFormLogIn from "./AuthFormLogIn";
import AuthFormSignUp from "./AuthFormSignUp";

interface AuthFormProps {
  onLogInSubmit: (email: string, password: string) => void;
  onSignUpSubmit: (name: string, email: string, password: string) => void;
}

export const AuthForm = ({ onLogInSubmit, onSignUpSubmit }: AuthFormProps) => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const onToggle = () => {
    setIsLoggingIn((prevState) => !prevState);
  };

  return (
    <div className="border rounded-md shadow px-5 py-4">
      {isLoggingIn ? (
        <AuthFormLogIn onShowSignUp={onToggle} onSubmit={onLogInSubmit} />
      ) : (
        <AuthFormSignUp onShowLogIn={onToggle} onSubmit={onSignUpSubmit} />
      )}
    </div>
  );
};
