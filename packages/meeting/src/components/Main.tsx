import { AuthForm, Header } from "@dyteio/ui";
import { useRecoilValue } from "recoil";

import { sessionState } from "../atoms/auth";
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
    <>
      <Header onLogOut={onLogOut} userName={user?.email} />
      {session ? (
        <pre>TBD: meeting</pre>
      ) : (
        <AuthForm onLogInSubmit={onLogInSubmit} />
      )}
    </>
  );
};

export default Main;
