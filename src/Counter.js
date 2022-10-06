import { useState, useEffect } from "react";

export const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <h1>Counter: {counter} </h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        Reiniciar
      </button>

      <hr />
      <br />
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value);
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("El mensaje es: " + mensaje);
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>

      <hr />
    </>
  );
};
