import { Button } from "@smalltalk/ui";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { currentAuthTokenState, meetingsState } from "../atoms/dyte";
import DyteWrapper from "./DyteWrapper";
import Meeting from "./Meeting";
import dyteApiClient from "../dyteApiClient";
import { IMeeting } from "../types";

const Meetings = () => {
  const authToken = useRecoilValue(currentAuthTokenState);
  const [meetings, setMeetings] = useRecoilState(meetingsState);
  const [isCreating, setIsCreating] = useState(false);
  const onCreateMeeting = async () => {
    setIsCreating(true);
    try {
      const response = await dyteApiClient.post("/meetings", {
        title: "This meeting should have been an email",
        preferred_region: "ap-south-1",
      });

      setMeetings((currentMeetings) => {
        return currentMeetings.concat([response.data.data as IMeeting]);
      });
      setIsCreating(false);
    } catch (e) {
      setIsCreating(false);
    }
  };

  return authToken ? (
    <DyteWrapper authToken={authToken} />
  ) : (
    <div className="meetings">
      <h2 className="meetings__title">Lobbies</h2>
      {meetings.length > 0 ? (
        <ul className="meetings__list">
          {meetings.map((meeting: IMeeting) => (
            <li key={meeting.id}>
              <Meeting id={meeting.id} title={meeting.title} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="meetings__empty">
          <p>There are no meetings</p>
          <Button
            disabled={isCreating}
            onClick={onCreateMeeting}
            primary
            type="button"
          >
            Create a new meeting
          </Button>
        </div>
      )}
    </div>
  );
};

export default Meetings;
