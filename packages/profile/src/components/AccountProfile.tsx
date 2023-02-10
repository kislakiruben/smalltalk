import { useAuth0 } from "@auth0/auth0-react";
import { Button, Label, Input } from "@smalltalk/ui";
import { useEffect, useRef, useState } from "react";

import createApi from "../auth0ApiClient";

const AccountProfile = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState(user?.user_metadata.name || "");
  const [location, setLocation] = useState(user?.user_metadata.location || "");
  const [bio, setBio] = useState(user?.user_metadata.bio || "");
  const onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    setName((event.target as HTMLInputElement).value);
  };
  const onChangeLocation = (event: React.FormEvent<HTMLInputElement>) => {
    setLocation((event.target as HTMLInputElement).value);
  };
  const onChangeBio = (event: React.FormEvent<HTMLInputElement>) => {
    setBio((event.target as HTMLInputElement).value);
  };
  const asyncSubmit = async () => {
    setIsSaving(true);
    const token = await getAccessTokenSilently({
      authorizationParams: {
        audience: "https://smalltalk.uk.auth0.com/api/v2/",
        scope: "openid profile email update:current_user_metadata",
      },
    });

    await createApi(token).patch(`/users/${user?.sub}`, {
      user_metadata: {
        name,
        bio,
        location,
      },
    });

    setIsSaving(false);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    asyncSubmit();
    event.preventDefault();
  };

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  return (
    <form className="section" onSubmit={onSubmit}>
      <h3 className="section__title">Profile</h3>
      <div className="section__group">
        <Label htmlFor="email">Email:</Label>
        <Input
          autoFocus
          disabled
          id="email"
          ref={emailInputRef}
          type="text"
          value={user?.email || ""}
        />
      </div>
      <div className="section__group">
        <Label htmlFor="name">Name:</Label>
        <Input id="name" onChange={onChangeName} type="text" value={name} />
      </div>
      <div className="section__group">
        <Label htmlFor="location">Location:</Label>
        <Input
          id="location"
          onChange={onChangeLocation}
          type="text"
          value={location}
        />
      </div>
      <div className="section__group">
        <Label htmlFor="bio">Bio:</Label>
        <Input id="bio" onChange={onChangeBio} type="text" value={bio} />
      </div>
      <Button
        className="section__button"
        disabled={isSaving}
        primary
        type="submit"
      >
        Save profile
      </Button>
    </form>
  );
};

export default AccountProfile;
