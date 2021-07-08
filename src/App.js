import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './actions'


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>

      {isLogged ? <p>Vette info</p> : ""}
    </div>
  );
}

export default App;
