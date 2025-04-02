import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>React basics hello </h1>
      <Counter />
    </div>
  );
};

export default App;
