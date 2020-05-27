import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = props => {
  const { user } = useSelector(state => state.session);

  return user ? (
    <div className="row">
      <div className="col-md-12">{user.username}</div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Profile;
