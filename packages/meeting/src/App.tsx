import { Spinner } from "@dyteio/ui";
import { Suspense } from "react";

import Main from "./components/Main";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <Spinner />
        </div>
      }
    >
      <Main />
    </Suspense>
  );
};

export default App;
