import Button from "./Button.js";
import Electric_fan from "./Electric.js";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // console.log("render " + counter);
  // const this_is_sparta = () => {console.log("I live only once");}
  // useEffect(this_is_sparta ,[]);
  useEffect(() => console.log("I live only once"), []);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  };
  // useEffect(() => console.log(keyword), [keyword]);
  // useEffect(() => console.log("render " + counter), [counter]);
  useEffect(
    () => console.log("I run when 'counter' and 'keyword' changes."),
    [counter, keyword]
  );

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="search anything"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>+1</button>
    </div>
  );
}

export default App;
