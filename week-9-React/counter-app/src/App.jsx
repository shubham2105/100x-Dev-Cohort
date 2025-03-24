import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTodo() {
    if (title.trim()) {
      setTodos([...todos, { title, description }]);
      setTitle("");
      setDescription("");
    }
  }
  return (
    <div
      style={{
        height: "100%",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h2>Todo App</h2>
      <div style={{}}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>addTodo</button>
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "red",
              padding: "10px",
              margin: "5px",
              borderRadius: "5px",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
