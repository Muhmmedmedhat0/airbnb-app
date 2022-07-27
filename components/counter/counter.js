import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../app/slices/counterSlice';
import { Button } from '@nextui-org/react';
import style from '../../styles/Counter.module.scss';
function counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className={style.counter}>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <h1 className={style.number}>{count}</h1>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  );
}

export default counter;
