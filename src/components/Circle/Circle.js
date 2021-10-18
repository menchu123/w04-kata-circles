import "./Circle.css";
import { useState } from "react";

function Circle() {
  const [isOn, setIsOn] = useState(false);
  function turnOn() {
    setIsOn(!isOn);
  }

  return (
    <div
      className="circle"
      onClick={turnOn}
      style={{ backgroundColor: isOn ? "orange" : "grey" }}
    ></div>
  );
}

export default Circle;
