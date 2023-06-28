import { useSelector } from "react-redux";
import "./App.css";

export function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>teste</h1>
      <h1>{counter}</h1>
    </div>
  );
}
