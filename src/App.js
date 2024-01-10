import { useState } from "react";

export default function App() {
  return (
    <div>
      <DateCalc />
    </div>
  );
}

function DateCalc() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const [today, setToday] = useState(new Date());

  function handleIncSteps() {
    setSteps((s) => s + 1);
  }
  function handleDecSteps() {
    setSteps((s) => s - 1);
  }
  function handleIncCount() {
    setCount((c) => c + steps);
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + steps);
    setToday(newDate);
  }
  function handleDecCount() {
    setCount((c) => c - steps);
    const newDate = new Date(today);
    newDate.setDate(today.getDate() - steps);
    setToday(newDate);
  }
  console.log(`${today}`);

  return (
    <div className="container">
      <div className="data">
        <div className="btn">
          <button onClick={() => handleDecSteps(steps)}>-</button>
          <p>Steps : {steps}</p>
          <button onClick={() => handleIncSteps(steps)}>+</button>
        </div>
        <div className="btn">
          <button onClick={() => handleDecCount(count)}>-</button>
          <p>Count : {count}</p>
          <button onClick={() => handleIncCount(count)}>+</button>
        </div>
        <p className="diaplay">
          {count !== 0
            ? `${count > 0 ? `${count}` : `${-count}`} days ${
                count > 0 ? "after" : "ago"
              } today ${
                count > 0 ? "will be" : "was"
              } ${today.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`
            : `Today is
              ${today.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}
        </p>
      </div>
    </div>
  );
}
