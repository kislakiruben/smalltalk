import { useAuth0 } from "@auth0/auth0-react";
import { Button, Header, Spinner } from "@smalltalk/ui";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { userMetadataState } from "./atoms/auth";
import Meetings from "./components/Meetings";
import createApi from "./auth0ApiClient";

const Main = () => {
  const {
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = useRecoilState(userMetadataState);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
  const onLogIn = () => {
    loginWithRedirect();
  };
  const onLogOut = async () => {
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

      setUserMetadata({
        name: user?.name,
        ...(data.user_metadata ? data.user_metadata : {}),
      });
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
        userName={userMetadata.name}
      />
      {isLoading || isLoadingMetadata ? (
        <div className="loading">
          <Spinner />
        </div>
      ) : isAuthenticated ? (
        <div className="content">
          <Meetings />
        </div>
      ) : (
        <div className="hero">
          <div className="hero__image">
            <img
              alt="Call you friends simply and simple with SmallTalk"
              className="hero__image"
              src="hero.jpg"
            />
          </div>
          <div className="hero__content">
            <h2 className="hero__title">
              It's easy talking to
              <br />
              your friends <br />
              with <span>SmallTalk</span>
            </h2>
            <p className="hero__subtitle">
              Call you friends simply and simple with SmallTalk
            </p>
            <Button
              className="hero__button"
              onClick={onLogIn}
              primary
              type="button"
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
