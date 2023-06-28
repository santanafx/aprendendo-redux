import { useSelector, useDispatch } from "react-redux";
import "./App.css";

export function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div>
      <h1>teste</h1>
      <h1>{counter}</h1>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => addBy()}>Add by 10</button>
    </div>
  );
}
