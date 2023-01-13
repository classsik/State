import React from "react";
import { useState } from "react";

const Fourth = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [result, setResult] = useState(false);

  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);

  const [is18, setIs18] = useState(false);

  return (
    <section>
      <h1>Задание 4</h1>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
      <button onClick={() => setResult(checked)}>Получить</button>
      <p>{result ? "Привет" : "Пока"}</p>
      <div>
        <label htmlFor="html">HTML</label>
        <input
          type="checkbox"
          checked={html}
          id="html"
          name="html"
          onChange={(event) => setHtml(event.target.checked)}
        />
        <label htmlFor="css">CSS</label>
        <input
          type="checkbox"
          checked={css}
          id="css"
          name="css"
          onChange={(event) => setCss(event.target.checked)}
        />
        <label htmlFor="js">JS</label>
        <input
          type="checkbox"
          checked={js}
          id="js"
          name="js"
          onChange={(event) => setJs(event.target.checked)}
        />
        <p>
          {html && "HTML "}
          {css && "CSS "}
          {js && "JS "}
        </p>
      </div>
      Вам есть 18?
      <input
        type="checkbox"
        checked={is18}
        onChange={(event) => setIs18(event.target.checked)}
      />
      {is18 && (
        <code>
          <p>print('Hello World')</p>
        </code>
      )}
      <br />
      <br />
      <input
        type="checkbox"
        checked={checked1}
        onChange={(event) => setChecked1(event.target.checked)}
      />
      {checked1 && <p>Абзац</p>}
    </section>
  );
};

export default Fourth;
