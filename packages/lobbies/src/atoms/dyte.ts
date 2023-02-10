import { atom, atomFamily } from "recoil";

import dyteApiClient from "../dyteApiClient";
import { IMeeting } from "../types";

export const meetingsState = atom({
  key: "atoms/dyte/meetings",
  default: [] as IMeeting[],
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
