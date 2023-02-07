import { AuthForm } from "@dyteio/ui";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { isAuthenticatedState } from "./atoms/auth";
import Main from "./components/Main";
import supabase from "./supabaseClient";

const App = () => {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);
  const onLogInSubmit = async (email: string, password: string) => {
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
    } catch (e) {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        setIsCheckingSession(false);
        if (error) {
          throw error;
        } else {
          setIsAuthenticated(data.session !== null);
        }
      } catch (e) {
        setIsCheckingSession(false);
      }
    };

    checkSession();
  }, [setIsAuthenticated]);

  return isCheckingSession ? (
    <pre>Loading...</pre>
  ) : isAuthenticated ? (
    <Main />
  ) : (
    <AuthForm onLogInSubmit={onLogInSubmit} />
  );
};

export default App;
