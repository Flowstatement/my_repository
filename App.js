import { useEffect, useState } from "react";

function App() {
  const [todo_value, setTodo_value] = useState("");
  const write_something = (event) => setTodo_value(event.target.value);

  const [plan_array, setPlan_array] = useState([]);
  const add_plan = (e) => {
    e.preventDefault();
    console.log(todo_value);
    if (todo_value === "") return;
    else {
      setPlan_array((currentArray) => [todo_value, ...currentArray]);
      setTodo_value("");
    }
    console.log(plan_array);
  };
  return (
    <div>
      <h1>Current Array: ({plan_array.length})</h1>
      <form onSubmit={add_plan}>
        <input
          onChange={write_something}
          value={todo_value}
          type="text"
          placeholder="계획을 적으세요."
        />
        <button>입력</button>
      </form>
    </div>
  );
}

export default App;
