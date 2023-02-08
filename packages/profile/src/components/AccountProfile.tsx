import { Button, Label, Input } from "@dyteio/ui";
import { useEffect, useRef, useState } from "react";

const AccountProfile = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    setName((event.target as HTMLInputElement).value);
  };
  const onChangeLocation = (event: React.FormEvent<HTMLInputElement>) => {
    setLocation((event.target as HTMLInputElement).value);
  };
  const onChangeBio = (event: React.FormEvent<HTMLInputElement>) => {
    setBio((event.target as HTMLInputElement).value);
  };
  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail((event.target as HTMLInputElement).value);
  };
  const asyncSubmit = async () => {
    setIsSaving(true);
    try {
      setIsSaving(false);
    } catch (e) {
      setIsSaving(false);
    }
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
          id="email"
          onChange={onChangeEmail}
          ref={emailInputRef}
          type="text"
          value={email}
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
