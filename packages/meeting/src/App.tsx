import { useAuth0 } from "@auth0/auth0-react";
import { Button, Header, Spinner } from "@smalltalk/ui";

import Meetings from "./components/Meetings";

const Main = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const onClickLogIn = () => {
    loginWithRedirect();
  };
  const onLogOut = async () => {
    logout();
  };

  return (
    <div className="wrapper">
      <Header
        accountBaseUrl={process.env.REACT_APP_ACCOUNT_BASE_URL}
        meetingBaseUrl={process.env.REACT_APP_MEETING_BASE_URL}
        onLogOut={onLogOut}
        userName={user?.name || user?.email}
      />
      {isLoading ? (
        <div className="loading">
          <Spinner />
        </div>
      ) : isAuthenticated ? (
        <div className="content">
          <Meetings />
        </div>
      ) : (
        <div className="auth-wrapper">
          <div className="auth-form">
            <Button primary onClick={onClickLogIn} type="button">
              Authenticate
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
