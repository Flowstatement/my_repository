import Button from "./Button.js";
import Electric_fan from "./Electric.js";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render" + counter);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>+1</button>
    </div>
  );
}

export default App;
