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
    <div>
      <Button primary type="button">
        Create meeting
      </Button>
      {meetings.length > 0 ? (
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <Meeting id={meeting.id} title={meeting.title} />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>There are not meetings</p>
        </div>
      )}
    </div>
  );
};

export default Meetings;
