import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import type { Todo } from "../model";
import { MdDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const editTodo = useTodoStore((state) => state.editTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    editTodo(todo.id, newText);
    setEditMode(false);
  };
  return (
    <form
      onSubmit={(e) => handleEdit(e)}
      className="flex p-4 mt-3 sm:w-[40%] w-full rounded-md bg-paper"
    >
      {editMode ? (
        <input
          ref={inputRef}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          type="text"
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
        <span onClick={() => deleteTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => toggleTodo(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}
