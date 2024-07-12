import { addTodo, setTitle } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const todoSchema = yup.object({
  text: yup.string().required(),
});

const TodoForm = () => {
  const { todos, form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.currentTarget.value));
  };

  const onSubmit = (data: any) => {
    const newTodo = {
      id: todos.length + 1,
      title: data.text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    reset();
    // handleAddTodo();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-3">
      <input
        type="text"
        {...register("text")}
        className="rounded py-1 px-4  dark:bg-slate-600  border border-black w-full"
      />
      <button type="submit" className="rounded py-2 px-5 bg-slate-900">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
