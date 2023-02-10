import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@smalltalk/ui";
import pluralize from "pluralize";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { currentAuthTokenState, participantsState } from "../atoms/dyte";
import dyteApiClient from "../dyteApiClient";
import { currentUserParticipantSelector } from "../selectors/dyte";
import { IParticipant } from "../types";

interface MeetingProps {
  id: string;
  title: string;
}

const Meeting = ({ id, title }: MeetingProps) => {
  const { user } = useAuth0();
  const setAuthToken = useSetRecoilState(currentAuthTokenState);
  const currentParticipant = useRecoilValue(
    currentUserParticipantSelector([id, user?.email])
  );
  const participants = useRecoilValue(participantsState(id));
  const onJoinMeeting = async () => {
    const response = await dyteApiClient.post(`/meetings/${id}/participants`, {
      name: user?.nickname || user?.name || user?.email,
      preset_name: "group_call_participant",
      custom_participant_id: user?.email,
    });

    setAuthToken(response.data.data.token);
  };
  const onOpenMeeting = async () => {
    if (!currentParticipant) return;

    const response = await dyteApiClient.post(
      `/meetings/${id}/participants/${
        (currentParticipant as IParticipant).id
      }/token`
    );

    setAuthToken(response.data.data.token);
  };

  return (
    <div className="meeting">
      <div className="meeting__meta">
        <h3 className="meeting__title">{title}</h3>
        <div
          className="meeting__participants"
          title={pluralize("participant", participants.length, true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
          </svg>
          <strong>{participants.length}</strong>
        </div>
      </div>
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
