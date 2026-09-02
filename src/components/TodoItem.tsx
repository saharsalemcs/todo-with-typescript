import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import type { TodoItemProps } from "../model";
import { MdDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, todos, setTodos }: TodoItemProps) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  function handleDone(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  }
  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editTodo } : todo,
      ),
    );
    setEditMode(false);
  }
  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="flex p-4 mt-3 sm:w-[40%] w-full rounded-md bg-paper"
    >
      {editMode ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="bg-white flex-1 text-2xl focus:outline-none"
        />
      ) : (
        <span
          className={`flex-1 text-2xl focus:outline-none ${todo.isDone ? "line-through" : ""}`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex items-center justify-between gap-5 cursor-pointer text-xl">
        <span
          onClick={() => {
            if (!editMode && !todo.isDone) setEditMode((prev) => !prev);
          }}
        >
          <AiFillEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}
