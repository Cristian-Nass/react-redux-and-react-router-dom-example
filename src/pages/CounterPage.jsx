import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../state/counter/counterSlice'


const CounterPage = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  
    return (
      <>
        <div>Counter</div>
        <div>{count}</div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Decrement By 3
        </button>
      </>
    );
  };
  
  export default CounterPage;
  