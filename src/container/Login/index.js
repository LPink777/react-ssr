import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions/session";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.login({ username }));
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              value={username}
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
