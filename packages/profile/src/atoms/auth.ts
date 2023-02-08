import cookies from "js-cookie";
import { atom, DefaultValue } from "recoil";

import supabase from "../supabaseClient";

const ACCESS_TOKEN_KEY = "dyte.connect.access_token";
const REFRESH_TOKEN_KEY = "dyte.connect.refresh_token";
const cookieOptions = { expires: 100 * 365 * 24 * 60 * 60 };

export const sessionState = atom({
  key: "atoms/auth/session",
  default: null,
  effects: [
    ({ setSelf, onSet, trigger }) => {
      if (trigger === "get") {
        const accessTokenCookie = cookies.get(ACCESS_TOKEN_KEY);
        const refreshTokenCookie = cookies.get(REFRESH_TOKEN_KEY);

        if (accessTokenCookie && refreshTokenCookie) {
          setSelf(
            supabase.auth
              .setSession({
                access_token: accessTokenCookie,
                refresh_token: refreshTokenCookie,
              })
              .then(({ data, error }) => {
                return data ? data.session : new DefaultValue();
              })
          );
        }
      }
      onSet((session) => {
        if (session) {
          cookies.set(ACCESS_TOKEN_KEY, session.access_token, cookieOptions);
          cookies.set(REFRESH_TOKEN_KEY, session.refresh_token, cookieOptions);
        }
      });
      supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_OUT" || event === "USER_DELETED") {
          setSelf(null);
          cookies.remove(ACCESS_TOKEN_KEY);
          cookies.remove(REFRESH_TOKEN_KEY);
        } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
          setSelf(session);
          cookies.set(ACCESS_TOKEN_KEY, session.access_token, cookieOptions);
          cookies.set(REFRESH_TOKEN_KEY, session.refresh_token, cookieOptions);
        }
      });
    },
  ],
});
