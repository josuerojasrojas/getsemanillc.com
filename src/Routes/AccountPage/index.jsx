import React, { useContext } from "react";
import LogOutButton from "components/LogoutButton";
import Card from "components/Card";
import { UserContext } from "components/UserContext";

const AccountPage = () => {
  const { user } = useContext(UserContext);
  return (
    <Card>
      <div style={{ marginBottom: "10px" }}>email: {user.email}</div>
      <LogOutButton />
    </Card>
  );
};

export default AccountPage;
