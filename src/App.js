import Timer from "./Component/Timer";
import "./styles.css";
import React from "react";

export default function App() {
  const [showTimer, setShowTImer] = React.useState(true);

  return (
    <div className="App">
      {showTimer && <Timer />}
      <button onClick={() => setShowTImer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}
