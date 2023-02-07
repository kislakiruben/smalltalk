import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { isAuthenticatedState } from "./atoms/auth";
import Auth from "./components/Auth";
import AuthLogOut from "./components/AuthLogOut";
import supabase from "./supabaseClient";

const App = () => {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);

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
    <div>
      logged in <AuthLogOut />
    </div>
  ) : (
    <Auth />
  );
};

export default App;
