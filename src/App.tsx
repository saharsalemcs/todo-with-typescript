import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="h-screen bg-[#2f74c0] font-neucha flex items-center flex-col">
      <h1 className="uppercase text-white my-8 text-5xl text-center z-1">
        Taskify
      </h1>
      <InputField />
      <TodoList />
    </div>
  );
}
