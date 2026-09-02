import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import type { TodoItemProps } from "../model";
import { MdDone } from "react-icons/md";

export default function TodoItem({ todo, todos, setTodos }: TodoItemProps) {
  function handleDone(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  }
  return (
    <form className="flex p-4 mt-3 sm:w-[40%] w-full rounded-md bg-paper">
      <span
        className={`flex-1 text-2xl focus:outline-none ${todo.isDone ? "line-through" : ""}`}
      >
        {todo.text}{" "}
      </span>

      <div className="flex items-center justify-between  gap-5 cursor-pointer text-xl">
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}
