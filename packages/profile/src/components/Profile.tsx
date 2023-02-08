import { Button, Container, Label, Input } from "@dyteio/ui";

const Profile = () => {
  return (
    <Container>
      <h2>Account</h2>

      <h3>Profile</h3>
      <form>
        <Label htmlFor="name">Name:</Label>
        <Input id="name" type="text" />
        <Label htmlFor="location">Location:</Label>
        <Input id="bio" type="text" />
        <Label htmlFor="bio">Bio:</Label>
        <Input id="bio" type="text" />
        <Label htmlFor="email">Email:</Label>
        <Input id="email" type="text" />
        <Button primary type="submit">
          Save profile
        </Button>
      </form>

      <h3>Password</h3>
      <form>
        <Label htmlFor="currentPassword">Old password:</Label>
        <Input id="currentPassword" type="text" />
        <Label htmlFor="newPassword">Old password:</Label>
        <Input id="newPassword" type="password" />
        <Button primary type="submit">
          Change password
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
