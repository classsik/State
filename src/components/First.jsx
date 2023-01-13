import React from "react";
import { useState } from "react";

const First = () => {
  const [name, setName] = useState("Bob");
  const [lastname, setLastname] = useState("Bobov");
  const [age, setAge] = useState(20);
  const [banned, setBanned] = useState(false);

  const changeNameAndLastname = () => {
    setName("User");
    setLastname("User");
  };

  return (
    <section className="first">
      <h1>Задание 1</h1>
      <div>
        <p>Имя: {name}</p>
        <p>Фамилия: {lastname}</p>
        <p>Возраст: {age}</p>
        <button onClick={() => changeNameAndLastname()}>
          Изменить имя и фамилию
        </button>
        <h3>Забанен: {banned ? "да" : "нет"}</h3>
        <button onClick={() => setBanned(!banned)}>
          {banned ? "Разбанить" : "Забанить"}
        </button>
        <br />
        <br />
        <button onClick={() => setAge(age + 1)}>Увеличить возраст</button>
        <br />
        <br />
        <button onClick={() => setAge(age - 1)}>Уменьшить возраст</button>
      </div>
    </section>
  );
};

export default First;
