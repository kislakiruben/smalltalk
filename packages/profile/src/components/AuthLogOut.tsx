import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { isAuthenticatedState } from "../atoms/auth";
import supabase from "../supabaseClient";

const AuthLogOut = () => {
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const [isProcessing, setIsProcessing] = useState(false);
  const onClick = async () => {
    setIsProcessing(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      } else {
        setIsProcessing(false);
        setIsAuthenticated(false);
      }
    } catch (e) {
      setIsProcessing(false);
    }
  };

  return (
    <button disabled={isProcessing} onClick={onClick} type="button">
      Log out
    </button>
  );
};

export default AuthLogOut;
