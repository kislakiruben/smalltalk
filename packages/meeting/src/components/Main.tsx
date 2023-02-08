import { AuthForm, Header } from "@dyteio/ui";
import { useRecoilValue } from "recoil";

import { sessionState } from "../atoms/auth";
import Meetings from "./Meetings";
import supabase from "../supabaseClient";
import { userSelector } from "../selectors/auth";

const Main = () => {
  const session = useRecoilValue(sessionState);
  const user = useRecoilValue(userSelector);
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
    <div className="wrapper">
      <Header onLogOut={onLogOut} userName={user?.email} />
      {session ? <Meetings /> : <AuthForm onLogInSubmit={onLogInSubmit} />}
    </div>
  );
};

export default Main;
