import React from "react";
import ReactDOM from "react-dom/client";
// import { Saludar } from "./Saludar";
import { Button } from "./Button.js";
import { Post } from "./Posts.js";
// import { TaskCard } from "./Task.js";
// root.render(<h1>Hola Mundo</h1>)

// import { Greeting, UserCard } from "./Greeting.js";
// import Product, { Navbar } from "./Product.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log("Event:  ", e);
  console.log("Id:  ", e.target.id);
  console.log("Escribiendo en input ", e.target.value);
};

const users = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "John",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
    {/* <Post /> */}
    {/* <Saludar /> */}

    {/* <TaskCard ready={true} /> */}
    {/* <Button text="Click me" /> */}
    {/* <input id="Hola" onChange={handleChange} /> */}
    {/* <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Registrando usuario", new Date());
      }}
    >
      <h3>Registro de usuario</h3>
      <button>Send</button>
    </form> */}
    {/* 
    <Button text="Play" />
    <Button text="Go to" name="Joe" /> */}
    {/* <Greeting title="Hola Mundo" name="joe" /> */}
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.33, 22.2]}
      addres={{ street: "123 Main", city: "New Your" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="James"
      amount={1000}
      married={false}
      points={[10, 32.33, 22.2]}
      addres={{ street: "av 123", city: "New Your" }}
      greet={function () {
        console.log("Saludo desde consola");
      }}
    /> */}

    {/* 
        <Product />
        <Navbar /> */}
  </>
);
