import { atom } from "recoil";

export const isAuthenticatedState = atom({
  key: "atoms/auth/is-authenticated",
  default: false,
});
