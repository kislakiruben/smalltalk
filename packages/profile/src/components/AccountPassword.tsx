import { Button, Label, Input } from "@dyteio/ui";
import { useState } from "react";

import supabase from "../supabaseClient";

const AccountPassword = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const onChangeOldPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setOldPassword((event.target as HTMLInputElement).value);
  };
  const onChangeNewPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setNewPassword((event.target as HTMLInputElement).value);
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

  return (
    <form className="section">
      <h3 className="section__title">Password</h3>
      <div className="section__group">
        <Label htmlFor="currentPassword">Old password:</Label>
        <Input
          autoComplete="current-password"
          id="currentPassword"
          onChange={onChangeOldPassword}
          type="password"
          value={oldPassword}
        />
      </div>
      <div className="section__group">
        <Label htmlFor="newPassword">Old password:</Label>
        <Input
          autoComplete="new-password"
          id="newPassword"
          onChange={onChangeNewPassword}
          type="password"
          value={newPassword}
        />
      </div>
      <Button
        className="section__button"
        disabled={isSaving}
        primary
        type="submit"
      >
        Change password
      </Button>
    </form>
  );
};

export default AccountPassword;
