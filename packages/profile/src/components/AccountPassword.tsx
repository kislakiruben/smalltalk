import { Button, Label, Input } from "@dyteio/ui";

const AccountPassword = () => {
  return (
    <form className="section">
      <h3 className="section__title">Password</h3>
      <div className="section__group">
        <Label htmlFor="currentPassword">Old password:</Label>
        <Input id="currentPassword" type="text" />
      </div>
      <div className="section__group">
        <Label htmlFor="newPassword">Old password:</Label>
        <Input id="newPassword" type="password" />
      </div>
      <Button className="section__button" primary type="submit">
        Change password
      </Button>
    </form>
  );
};

export default AccountPassword;
