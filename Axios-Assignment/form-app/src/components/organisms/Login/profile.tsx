import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <>
      {isAuthenticated && user && (
        <>
          {Object.entries(user).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </>
      )}
    </>
  );
};
export default Profile;
