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
  const onSignUpSubmit = async (
    name: string,
    email: string,
    password: string
  ) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
  };

  const onLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="wrapper">
      <Header
        onLogOut={onLogOut}
        userName={user?.user_metadata.name || user?.email}
      />
      {session ? (
        <div className="content">
          <Meetings />
        </div>
      ) : (
        <div className="auth-wrapper">
          <div className="auth-form">
            <AuthForm
              onLogInSubmit={onLogInSubmit}
              onSignUpSubmit={onSignUpSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
