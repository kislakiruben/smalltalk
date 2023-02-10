import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Auth0Provider>
  </React.StrictMode>
);
