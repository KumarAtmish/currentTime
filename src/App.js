import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
  };

  return (
    <div className="App">
      <h1>
        <strong>{newTime}</strong>
      </h1>
      <button class="btn btn-success" onClick={UpdateTime}>
        Get Time
      </button>
    </div>
  );
}
