import { atom } from "recoil";

interface IUserMetadata {
  name?: string;
  bio?: string;
  location?: string;
  email: string;
}

export const userMetadataState = atom({
  key: "atoms/auth/user-metadata",
  default: {} as IUserMetadata,
});
