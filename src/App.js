import { useState } from "react";

function App() {
  const [points, setPoints] = useState([]);
  const [data, setData] = useState([]);

  const clickHandle = (e) => {
    setPoints((points) => [
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
  };
  const redoHandle = (e) => {
    e.stopPropagation();
    const data = [...points];
    const item = data.pop();
    setData((data) => [...data, item]);
    setPoints(data);
  };
  const undoHandle = (e) => {
    e.stopPropagation();
    const d = [...data];
    const item = d.pop();
    setPoints((points) => [...points, item]);
    setData(d);
  };
  return (
    <div className="screen" onClick={clickHandle}>
      <header className="header">
        <button disabled={points.length === 0} onClick={redoHandle}>
          Redu
        </button>
        <button disabled={data.length === 0} onClick={undoHandle}>
          Undo
        </button>
      </header>
      {points.map((point, key) => (
        <div
          className="point"
          key={key}
          style={{ "--left": point.x + "px", "--top": point.y + "px" }}
        ></div>
      ))}
    </div>
  );
}

export default App;
