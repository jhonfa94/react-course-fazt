import { VscGlobe } from "react-icons/vsc";
const datos = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export const Post = () => {
  return (
    <button onClick={datos}>
      <VscGlobe />
      Traer datos
    </button>
  );
};
