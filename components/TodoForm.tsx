import { addTodo, setTitle } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoForm = () => {
  const { todos, form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.currentTarget.value));
  };

  const handleAddTodo = () => {
    if (form.text) {
      const newTodo = {
        id: todos.length + 1,
        title: form.text,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      dispatch(setTitle(""));
    }
  };
  const onSubmit = () => {
    handleAddTodo();
  };
  return (
    <form action={onSubmit} className="flex gap-x-3">
      <input
        type="text"
        value={form.text}
        onChange={onHandleChange}
        className="rounded py-1 px-4  dark:bg-slate-600  border border-black w-full"
      />
      <button type="submit" className="rounded py-2 px-5 bg-slate-900">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
