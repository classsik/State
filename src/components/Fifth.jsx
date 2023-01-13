import React from "react";
import { useState } from "react";

const Fifth = () => {
  const [city, setCity] = useState("Уфа");
  const [value, setValue] = useState("");

  const cities = ["Уфа", "Елабуга", "Казань"];

  return (
    <section>
      <h1>Задание 5</h1>
      <select onChange={(event) => setCity(event.target.value)} value={city}>
        <option value="Уфа">Уфа</option>
        <option value="Москва">Москва</option>
        <option value="Казань">Казань</option>
      </select>
      <p>Выбранный город: {city}</p>
      <select>
        {cities.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <br />
      <br />
      <select>
        <option value="1">от 0 до 12 лет</option>
        <option value="2">от 13 до 17 лет</option>
        <option value="3">от 18 до 25 лет</option>
        <option value="3">старше 25 лет</option>
      </select>
      <br />
      <br />
      <div
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <label htmlFor="html1">HTML</label>
        <input type="radio" name="radio" value="HTML" id="html1" />
        <br />
        <label htmlFor="css1">CSS</label>
        <input type="radio" name="radio" value="CSS" id="css1" />
        <br />
        <label htmlFor="js1">JS</label>
        <input type="radio" name="radio" value="JS" id="js1" />
      </div>

      <p>
        {value} {value == "JS" && "👍"}
      </p>
    </section>
  );
};

export default Fifth;
