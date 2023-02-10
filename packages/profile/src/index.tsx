import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        audience: process.env.REACT_APP_AUTH0_AUDIENCE as string,
        scope:
          "openid profile email read:current_user update:current_user_metadata",
        redirect_uri: window.location.origin,
      }}
    >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Auth0Provider>
  </React.StrictMode>
);
