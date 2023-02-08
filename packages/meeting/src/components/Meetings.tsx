import { Button } from "@dyteio/ui";
import { useRecoilValue } from "recoil";

import { currentAuthTokenState, meetingsState } from "../atoms/dyte";
import DyteWrapper from "./DyteWrapper";
import Meeting from "./Meeting";

const Meetings = () => {
  const authToken = useRecoilValue(currentAuthTokenState);
  const meetings = useRecoilValue(meetingsState);

  return authToken ? (
    <DyteWrapper authToken={authToken} />
  ) : (
    <div className="meetings">
      <div className="meetings__header">
        <Button primary type="button">
          Create a new meeting
        </Button>
      </div>
      {meetings.length > 0 ? (
        <ul className="meetings__list">
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <Meeting id={meeting.id} title={meeting.title} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="meetings__empty">
          <p>There are not meetings</p>
        </div>
      )}
    </div>
  );
};

export default Meetings;
