import { Button, Label, Input } from "@dyteio/ui";

const Profile = () => {
  return (
    <div className="profile">
      <h2 className="profile__title">Account</h2>

      <div className="section">
        <h3 className="section__title">Profile</h3>
        <form>
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
      </div>

      <div className="section">
        <h3 className="section__title">Password</h3>
        <form>
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
      </div>
    </div>
  );
};

export default Profile;
