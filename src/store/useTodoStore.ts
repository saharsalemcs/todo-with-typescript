import { create } from "zustand";
import type { Todo } from "../model";

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => {
      const newTodos = [
        ...state.todos,
        { id: Date.now(), text, isDone: false },
      ];
      return { todos: newTodos };
    }),

  toggleTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      );
      return { todos: newTodos };
    }),

  editTodo: (id, newText) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      );
      return { todos: newTodos };
    }),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

//! #### return new array , no mutate on the original array ####
