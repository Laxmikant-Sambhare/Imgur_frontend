import React from "react";
import AuthService from "../services/auth.services";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong>Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong>
        {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Username:</strong>
        {"  " + currentUser.data.fullName}
      </p>
      <p>
        <strong>Email:</strong>
        {"  " + currentUser.data.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};
export default Profile;