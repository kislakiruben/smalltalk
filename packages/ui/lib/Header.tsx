import { useState } from "react";

import { Button } from "./Button";
import { Link } from "./Link";

interface HeaderProps {
  onLogOut: Function;
  userName?: string;
  meetingBaseUrl?: string;
  accountBaseUrl?: string;
}

export const Header = ({
  accountBaseUrl,
  meetingBaseUrl,
  onLogOut: onLogOutCallback,
  userName,
}: HeaderProps) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const onClick = async () => {
    setIsLoggingOut(true);
    try {
      await onLogOutCallback();
      setIsLoggingOut(false);
    } catch (e) {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="bg-white shadow px-5 py-3">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <div className="flex items-center mr-10">
            <svg
              className="mr-2"
              width="40"
              height="40"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-purple-500"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6841 40.138C31.7298 40.138 40.6841 31.1837 40.6841 20.138C40.6841 9.09234 31.7298 0.138031 20.6841 0.138031C9.63837 0.138031 0.684082 9.09234 0.684082 20.138C0.684082 31.1837 9.63837 40.138 20.6841 40.138ZM26.9234 9.45487C27.2271 8.37608 26.1802 7.73816 25.2241 8.41933L11.8772 17.9276C10.8403 18.6663 11.0034 20.138 12.1222 20.138H15.6368V20.1108H22.4866L16.9053 22.0801L14.4448 30.8212C14.1411 31.9 15.1879 32.5379 16.1441 31.8567L29.491 22.3485C30.5279 21.6098 30.3647 20.138 29.246 20.138H23.9162L26.9234 9.45487Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="font-extrabold text-lg">Dyte Connect</h1>
          </div>
          <nav className="grow">
            <Link className="mr-5" href={meetingBaseUrl || "javascript:;"}>
              Meeting
            </Link>
            <Link href={accountBaseUrl || "javascript:;"}>Account</Link>
          </nav>
          {userName ? (
            <div className="flex items-center">
              <p className="text-sm mr-3">
                Welcome, <strong>{userName}</strong>
              </p>
              <Button disabled={isLoggingOut} onClick={onClick} type="button">
                Log out
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
