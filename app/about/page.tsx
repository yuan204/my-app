import Image from "next/image";
import Link from "next/link";
export const revalidate = 10;

function fetchTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
}

export default async function Home() {
  const todos = await fetchTodos();
  console.log(todos);

  return (
    <>
      <h1>homepage</h1>
      <ul>
        {todos.map((todo: any) => {
          return (
            <li key={todo.id}>
              <span>{todo.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
