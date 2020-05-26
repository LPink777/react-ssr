import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../../store/actions/home";

const UserList = () => {

  const { list } = useSelector(state => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHomeList());
  }, [])

  return (
    <ul className="list-group">
      {list.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
