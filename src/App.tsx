import { useState } from "react";
import InputField from "./components/InputField";
import type { Todo } from "./model";

export default function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), text: todo, isDone: false }]);
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <div className="h-screen bg-[#2f74c0] font-neucha flex items-center flex-col">
      <h1 className="uppercase text-white my-8 text-5xl text-center z-1">
        Taskify
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}
