import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from '../../store/actions/home';

const Home = () => {
  const { list } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  useEffect(() => {
    !list.length && dispatch(actions.getHomeList());
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group">
          {list.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Home.loadData = store => store.dispatch(actions.getHomeList());

export default Home;
