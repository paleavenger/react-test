import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
  };

  return (
    <div className="app-container">
      <h2>Калькулятор ИМТ</h2>

      <input
        type="number"
        placeholder="Вес (кг)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Рост (см)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Рассчитать</button>

      {bmi && (
        <>
          <div className="result-box">
            Ваш ИМТ: <span>{bmi}</span>
          </div>

          <button className="reset-btn" onClick={reset}>
            Сбросить
          </button>
        </>
      )}
    </div>
  );
}

export default App;
