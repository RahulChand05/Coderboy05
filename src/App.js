
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment, decrement} from './actions/counter';


function App() {
  const count = useSelector( state => state)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>
        Count is now: {count}
      </h2>
      <button onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
}

export default App;
