import "./App.css";
import Circle from "./components/Circle/Circle.js";

function App() {
  const circleArray = [
    "único",
    "irrepetible",
    "inconfundible",
    "exclusivo",
    "singular",
  ];

  const circles = circleArray.map((circle) => <Circle key={circle} />);
  return <div className="App">{circles}</div>;
}

export default App;
