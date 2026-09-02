import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputField({ todo, setTodo, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex items-center relative w-[95%] sm:w-[80%]"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full bg-white border-none outline-none rounded-full text-xl px-6 py-4  duration-150 shadow-sm focus:shadow-[0_0_10px_1000px_rgb(0,0,0,0.5)]"
        placeholder="Add a task..."
      />
      <button className="absolute m-3 w-12 h-12 bg-[#2f74c0] text-white rounded-full text-lg transition-transform duration-150 right-0 cursor-pointer shadow-xl/20 hover:bg-[#388ae2] active:scale-80 active:shadow-[0_0_5px_black]">
        Add
      </button>
    </form>
  );
}
