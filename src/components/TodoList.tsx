import { useTodoStore } from "../store/useTodoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  // const { todos, toggleTodo, editTodo, deleteTodo } = useTodoStore();  //! this subscribe for all store; if any another piece of state will make the component re-render.

  //! subscribe for specific part of state, the component will re-render only with this specific part changed.
  const todos = useTodoStore((state) => state.todos);
  return (
    <ul className="flex w-[90%] justify-evenly flex-wrap">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
