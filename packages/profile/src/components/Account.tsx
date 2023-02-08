import AccountProfile from "./AccountProfile";
import AccountPassword from "./AccountPassword";

const Account = () => {
  return (
    <div className="profile">
      <h2 className="profile__title">Account</h2>
      <AccountProfile />
      <AccountPassword />
    </div>
  );
};

export default Account;
