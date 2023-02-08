import { Button } from "@dyteio/ui";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { currentAuthTokenState, participantsState } from "../atoms/dyte";
import dyteApiClient from "../dyteApiClient";
import {
  currentUserParticipantSelector,
  customParticipantIdSelector,
} from "../selectors/dyte";

interface MeetingProps {
  id: string;
  title: string;
}

const Meeting = ({ id, title }: MeetingProps) => {
  const setAuthToken = useSetRecoilState(currentAuthTokenState);
  const customParticipantId = useRecoilValue(customParticipantIdSelector);
  const currentParticipant = useRecoilValue(currentUserParticipantSelector(id));
  const participants = useRecoilValue(participantsState(id));
  const onJoinMeeting = async () => {
    const response = await dyteApiClient.post(`/meetings/${id}/participants`, {
      name: "Ruben",
      preset_name: "prototype",
      custom_participant_id: customParticipantId,
    });

    setAuthToken(response.data.data.token);
  };
  const onOpenMeeting = async () => {
    const response = await dyteApiClient.post(
      `/meetings/${id}/participants/${currentParticipant.id}/token`
    );

    setAuthToken(response.data.data.token);
  };

  return (
    <div className="flex items-center justify-between">
      <h3>{title}</h3>
      <p>{participants.length}</p>
      {currentParticipant ? (
        <Button onClick={onOpenMeeting} type="button">
          Open
        </Button>
      ) : (
        <Button onClick={onJoinMeeting} type="button">
          Join
        </Button>
      )}
    </div>
  );
};

export default Meeting;
