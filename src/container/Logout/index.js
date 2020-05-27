import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../../store/actions/session';

const Logout = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    let res = await dispatch(actions.logout());
    history.push('/');
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
