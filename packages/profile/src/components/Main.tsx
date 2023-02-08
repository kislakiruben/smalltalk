import { AuthForm, Header } from "@dyteio/ui";
import { useRecoilValue } from "recoil";

import { sessionState } from "../atoms/auth";
import Profile from "./Profile";
import supabase from "../supabaseClient";

const Main = () => {
  const session = useRecoilValue(sessionState);
  const onLogInSubmit = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };
  const onLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <Header onLogOut={onLogOut} />
      {session ? <Profile /> : <AuthForm onLogInSubmit={onLogInSubmit} />}
    </>
  );
};

export default Main;
