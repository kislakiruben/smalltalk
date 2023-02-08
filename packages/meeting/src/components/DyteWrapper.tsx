import { Spinner } from "@dyteio/ui";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import { useEffect } from "react";

import DyteRoom from "./DyteRoom";

interface DyteWrapperProps {
  authToken: string;
}

const DyteWrapper = ({ authToken }: DyteWrapperProps) => {
  const [client, initClient] = useDyteClient();

  useEffect(() => {
    if (authToken) {
      initClient({ authToken });
    }
  }, [authToken]);

  return (
    <DyteProvider
      fallback={
        <div className="loading">
          <Spinner />
          <span className="loading-text">Initializing room...</span>
        </div>
      }
      value={client}
    >
      <DyteRoom />
    </DyteProvider>
  );
};

export default DyteWrapper;
