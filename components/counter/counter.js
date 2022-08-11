import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../app/slices/counterSlice';
import { Button } from '@nextui-org/react';
import style from '../../styles/Counter.module.scss';
function counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className={style.counter}>
      <button
        className={style.btn}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <h1 className={style.number}>{count}</h1>
      <button
        className={style.btn}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  ); 
}

export default counter;
