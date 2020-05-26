import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../store/actions/counter';

const Counter = (props) => {

  const { num } = useSelector(state => state.counter);

  const dispatch = useDispatch()

  return (
    <>
      <p>{num}</p>
      <button className="btn btn-primary" onClick={() => dispatch(actions.increment())}>add</button>
    </>
  )
}

export default Counter;