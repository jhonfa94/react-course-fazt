import "./task.css";
export function TaskCard({ ready }) {
  //   const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  return (
    // <div style={cardStyles}>
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </span>
      {/* <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </span> */}
    </div>
  );
}
