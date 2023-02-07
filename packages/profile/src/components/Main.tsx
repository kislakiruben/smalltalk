import { Header } from "@dyteio/ui";
import { useSetRecoilState } from "recoil";

import Profile from "./Profile";
import supabase from "../supabaseClient";
import { isAuthenticatedState } from "../atoms/auth";

const Main = () => {
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const onLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <div>
      <Header onLogOut={onLogOut} />
      <Profile />
    </div>
  );
};

export default Main;
