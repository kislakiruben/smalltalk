import { selectorFamily, SerializableParam } from "recoil";

import { participantsState } from "../atoms/dyte";
import { IParticipant } from "../types";

export const currentUserParticipantSelector = selectorFamily({
  key: "selectors/dyte/current-user-participant",
  get: ([meetingId, customParticipantId]: SerializableParam[]) => {
    return ({ get }) => {
      const participants = get(participantsState(meetingId as string));

      return participants.find((participant: IParticipant) => {
        return participant.custom_participant_id === customParticipantId;
      });
    };
  },
});
