import { useAuth0 } from "@auth0/auth0-react";
import { Header, Spinner } from "@smalltalk/ui";
import { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { userMetadataState } from "./atoms/auth";
import Account from "./components/Account";
import createApi from "./auth0ApiClient";
import { userNameSelector } from "./selectors/auth";

const Main = () => {
  const {
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  const setUserMetadata = useSetRecoilState(userMetadataState);
  const userName = useRecoilValue(userNameSelector);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
  const onLogIn = () => {
    loginWithRedirect();
  };
  const onLogOut = () => {
    logout();
  };

  useEffect(() => {
    const asyncLoadUserMetadata = async () => {
      setIsLoadingMetadata(true);
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: "https://smalltalk.uk.auth0.com/api/v2/",
          scope: "read:current_user",
          ignoreCache: true,
        },
      });

      const { data } = await createApi(token).get(`/users/${user?.sub}`);

      if (data.user_metadata) {
        setUserMetadata({
          ...data.user_metadata,
          email: user?.email,
        });
      }
      setIsLoadingMetadata(false);
    };

    if (user) {
      asyncLoadUserMetadata();
    }
  }, [getAccessTokenSilently, setUserMetadata, user]);

  return (
    <div className="wrapper">
      <Header
        accountBaseUrl={process.env.REACT_APP_ACCOUNT_BASE_URL}
        meetingBaseUrl={process.env.REACT_APP_MEETING_BASE_URL}
        onLogIn={onLogIn}
        onLogOut={onLogOut}
        showAuthControls={!(isLoading || isLoadingMetadata)}
        userName={userName}
      />
      {isLoading || isLoadingMetadata ? (
        <div className="loading">
          <Spinner />
        </div>
      ) : isAuthenticated ? (
        <div className="content">
          <Account />
        </div>
      ) : null}
    </div>
  );
};

export default Main;
