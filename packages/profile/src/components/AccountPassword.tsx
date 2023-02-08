import { Button, Label, Input } from "@dyteio/ui";
import { useState } from "react";

import supabase from "../supabaseClient";

const AccountPassword = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const onChangeNewPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setNewPassword((event.target as HTMLInputElement).value);
  };
  const asyncSubmit = async () => {
    setIsSaving(true);
    try {
      await supabase.auth.updateUser({
        password: newPassword,
      });
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
    <form className="section" onSubmit={onSubmit}>
      <h3 className="section__title">Password</h3>
      <div className="section__group">
        <Label htmlFor="newPassword">New password:</Label>
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
