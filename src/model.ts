export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export interface TodoItemProps extends TodoListProps {
  todo: Todo;
}
