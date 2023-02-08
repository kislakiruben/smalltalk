import { selector } from "recoil";

import { sessionState } from "../atoms/auth";

export const userSelector = selector({
  key: "selectors/auth/user",
  get: ({ get }) => {
    const session = get(sessionState);

    return session ? session.user : null;
  },
});
