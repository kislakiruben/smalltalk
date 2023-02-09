import { selector, selectorFamily } from "recoil";

import { userSelector } from "./auth";
import { participantsState } from "../atoms/dyte";
import { IParticipant } from "../types";

export const customParticipantIdSelector = selector({
  key: "selectors/dyte/custom-participant-id",
  get: ({ get }) => {
    const user = get(userSelector);

    return user?.email;
  },
});

export const currentUserParticipantSelector = selectorFamily({
  key: "selectors/dyte/current-user-participant",
  get: (meetingId: string) => {
    return ({ get }) => {
      const participants = get(participantsState(meetingId));
      const customParticipantId = get(customParticipantIdSelector);

      return participants.find((participant: IParticipant) => {
        return participant.custom_participant_id === customParticipantId;
      });
    };
  },
});
