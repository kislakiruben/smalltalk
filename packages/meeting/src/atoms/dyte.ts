import { atom, atomFamily } from "recoil";

import dyteApiClient from "../dyteApiClient";

export const meetingsState = atom({
  key: "atoms/dyte/meetings",
  default: [],
  effects: [
    ({ setSelf, trigger }) => {
      if (trigger === "get") {
        setSelf(
          dyteApiClient.get("/meetings").then((response) => {
            return response.data.data;
          })
        );
      }
    },
  ],
});

export const participantsState = atomFamily({
  key: "atoms/dyte/participants",
  default: () => [],
  effects: (meetingId: string) => [
    ({ setSelf, trigger }) => {
      if (trigger === "get") {
        setSelf(
          dyteApiClient
            .get(`/meetings/${meetingId}/participants`)
            .then((response) => response.data.data)
        );
      }
    },
  ],
});

export const currentAuthTokenState = atom({
  key: "atoms/dyte/current-auth-token",
  default: null,
});
