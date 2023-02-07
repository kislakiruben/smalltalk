export const Spinner = () => (
  <div className="relative inline-flex">
    <span className="animate-ping w-full h-full absolute rounded-full bg-purple-400 opacity-75 z-0" />
    <svg
      className="relative z-10"
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
  </div>
);
