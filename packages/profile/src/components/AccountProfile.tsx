import { Button, Label, Input } from "@dyteio/ui";

const AccountProfile = () => {
  return (
    <form className="section">
      <h3 className="section__title">Profile</h3>
      <div className="section__group">
        <Label htmlFor="name">Name:</Label>
        <Input id="name" type="text" />
      </div>
      <div className="section__group">
        <Label htmlFor="location">Location:</Label>
        <Input id="bio" type="text" />
      </div>
      <div className="section__group">
        <Label htmlFor="bio">Bio:</Label>
        <Input id="bio" type="text" />
      </div>
      <div className="section__group">
        <Label htmlFor="email">Email:</Label>
        <Input id="email" type="text" />
      </div>
      <Button className="section__button" primary type="submit">
        Save profile
      </Button>
    </form>
  );
};

export default AccountProfile;
