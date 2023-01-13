import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Second = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [age, setAge] = useState(0);
  const [temp, setTemp] = useState(0);

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [input5, setInput5] = useState(0);

  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(calculate());
  }, [input1, input2, input3, input4, input5]);

  const calculate = () => {
    let sum = +input1 + +input2 + +input3 + +input4 + +input5;
    return sum / 5;
  };

  return (
    <section className="second">
      <h1>Задание 2</h1>
      <input
        type="text"
        value={text1}
        onChange={(event) => setText1(event.target.value)}
      />
      <p>{text1}</p>
      <input
        type="text"
        value={text2}
        onChange={(event) => setText2(event.target.value)}
      />
      <p>{text2}</p>
      <input
        type="text"
        value={text3}
        onChange={(event) => setText3(event.target.value)}
      />
      <p>{text3.length}</p>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <p>{2023 - age}</p>
      <input
        type="number"
        value={temp}
        onChange={(event) => setTemp(event.target.value)}
      />
      <p>{(temp - 32) / 1.8} °C</p>

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
      <input
        type="number"
        value={input3}
        onChange={(event) => setInput3(event.target.value)}
      />
      <input
        type="number"
        value={input4}
        onChange={(event) => setInput4(event.target.value)}
      />
      <input
        type="number"
        value={input5}
        onChange={(event) => setInput5(event.target.value)}
      />
      <p>Среднее арифмитическое: {result}</p>
    </section>
  );
};

export default Second;
