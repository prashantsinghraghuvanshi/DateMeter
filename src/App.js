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
  const d = new Date();

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

  function handleReset() {
    setSteps(1);
    setCount(0);
    const newDate = new Date(d);
    newDate.setDate(d.getDate());
    setToday(newDate);
  }

  return (
    <div className="container">
      <div className="data">
        <div className="btn">
          <input
            type="range"
            min="0"
            max="10"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
          ></input>
          {/* <button onClick={() => handleDecSteps(steps)}>-</button> */}
          <p> Steps : {steps}</p>
          {/* <button onClick={() => handleIncSteps(steps)}>+</button> */}
        </div>
        <div className="btn">
          <button onClick={() => handleDecCount(count)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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

        {count !== 0 || steps !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
