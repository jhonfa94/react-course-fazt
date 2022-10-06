export function Greeting({ title, name = "user" }) {
  // console.log(props);

  // function add(x, y) {
  //     return x + y
  // }

  // return (
  //     <div>
  //         <h1>Este es un componente</h1>
  //         <p>Lorem 123</p>
  //         <p>La suma del componente es: {add(10, 20)}</p>
  //     </div>
  // );
  return (
    <div>
      <h1>
        {title} dice {name}
      </h1>
    </div>
  );
}

export function UserCard({ name, amount, married, addres, greet }) {
  //   console.log(props);
  greet();

  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>{addres.city}</li>
        <li>{addres.street}</li>
      </ul>
    </div>
  );
}

// export function UserCard(props) {
//   console.log(props);
//   props.greet();

//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>${props.amount}</p>
//       <p>{props.married ? "married" : "single"}</p>
//       <ul>
//         <li>{props.addres.city}</li>
//         <li>{props.addres.street}</li>
//       </ul>
//     </div>
//   );
// }
