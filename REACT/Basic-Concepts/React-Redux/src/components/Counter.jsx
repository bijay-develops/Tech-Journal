import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { increment, decrement } from '../redux/actions';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter