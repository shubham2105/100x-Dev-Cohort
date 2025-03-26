import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    console.log("mounted");
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 10,
      }}
    >
      <h1>Count is {count}</h1>
      <div>
        <button
          style={{
            borderRadius: "5px",
            borderWidth: 0.1,
            padding: 5,
            fontSize: 16,
            margin: 10,
          }}
          onClick={incrementCount}
        >
          Increase Count
        </button>
        <button
          style={{
            borderRadius: "5px",
            borderWidth: 0.1,
            padding: 5,
            fontSize: 16,
            margin: 10,
          }}
          onClick={decrementCount}
        >
          Decrease Count
        </button>
        <button
          style={{
            borderRadius: "5px",
            borderWidth: 0.1,
            padding: 5,
            fontSize: 16,
            margin: 10,
          }}
          onClick={resetCount}
        >
          Reset Count
        </button>
        {/* <button
            style={{
                borderRadius: "5px",
                borderWidth: 0.1,
                padding: 5,
                fontSize: 16,
                margin: 10,
            }}
            onClick={setInterval}
            >
            Interval Increment
            </button> */}
      </div>
    </div>
  );
};

export default Counter;
