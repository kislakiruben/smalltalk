import { Button, Label, Input } from "@dyteio/ui";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import { userSelector } from "../selectors/auth";
import supabase from "../supabaseClient";

const AccountProfile = () => {
  const user = useRecoilValue(userSelector);
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
    await supabase.auth.updateUser({
      data: {
        bio,
        name,
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
