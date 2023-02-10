import { selector } from "recoil";

import { userMetadataState } from "../atoms/auth";

export const userNameSelector = selector({
  key: "selectors/auth/user-name",
  get: ({ get }) => {
    const userMetadata = get(userMetadataState);

    return userMetadata?.name || userMetadata.email;
  },
});
