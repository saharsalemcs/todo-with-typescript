import type { TodoListProps } from "../model";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <ul className="flex w-[90%] justify-evenly flex-wrap">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
