import React from "react";
import { useState } from "react";

const Third = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [result1, setResult1] = useState("");

  const [number, setNumber] = useState(0);
  const [result2, setResult2] = useState("");

  const [number1, setNumber1] = useState(0);
  const [result3, setResult3] = useState("");

  const getDividers = () => {
    let resultat = 1;
    for (let i = 0; i <= number1; i++) {
      if (number1 % i === 0) {
        resultat *= i;
      }
    }
    return resultat;
  };

  return (
    <section>
      <h1>Задание 3</h1>
      <input
        type="number"
        value={input1}
        onChange={(event) => setInput1(event.target.value)}
      />
      <input
        type="number"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
      />
      <button
        onClick={() => {
          setResult(+input1 + +input2);
        }}
      >
        Сумма
      </button>
      <button
        onClick={() => {
          setResult(input1 * input2);
        }}
      >
        Произведение
      </button>
      <p>Результат: {result}</p>
      <input
        type="date"
        value={date1}
        onChange={(event) => setDate1(event.target.value)}
      />
      <input
        type="date"
        value={date2}
        onChange={(event) => setDate2(event.target.value)}
      />
      <button
        onClick={() =>
          setResult1(
            (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)
          )
        }
      >
        Разница
      </button>
      <p>Разница в днях: {result1}</p>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        onBlur={() => {
          setResult2(
            number
              .toString()
              .split("")
              .reduce((a, b) => a + parseInt(b), 0)
          );
        }}
      />
      <p>{result2}</p>
      <input
        type="number"
        value={number1}
        onChange={(event) => setNumber1(event.target.value)}
        onBlur={() => {
          setResult3(getDividers());
        }}
      />
      <p>{result3}</p>
    </section>
  );
};

export default Third;
