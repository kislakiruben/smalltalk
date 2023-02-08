import { useDyteMeeting } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useEffect, useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { currentAuthTokenState, participantsState } from "../atoms/dyte";
import dyteApiClient from "../dyteApiClient";

const DyteRoom = () => {
  const { meeting } = useDyteMeeting();
  const setAuthToken = useSetRecoilState(currentAuthTokenState);
  const setParticipants = useSetRecoilState(
    participantsState(meeting.meta.roomName)
  );
  const removeParticipant = useCallback(async () => {
    await dyteApiClient.delete(
      `/meetings/${meeting.meta.roomName}/participants/${meeting.self.userId}`
    );

    setParticipants((participants) => {
      return participants.filter(
        (participant) => participant.id !== meeting.self.userId
      );
    });
  }, [meeting.meta.roomName, meeting.self.userId, setParticipants]);

  useEffect(() => {
    const onLeavinRoom = () => {
      setAuthToken(null);
      removeParticipant();
    };

    meeting.self.on("roomLeft", onLeavinRoom);

    return () => {
      meeting.self.off("roomLeft", onLeavinRoom);
    };
  }, [meeting, removeParticipant, setAuthToken]);

  return (
    <div className="grow">
      <DyteMeeting meeting={meeting} mode="fill" />
    </div>
  );
};

export default DyteRoom;
