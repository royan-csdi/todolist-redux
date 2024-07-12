"use client";

import { RootState } from "@/store";
import PasswordForm from "@/components/PasswordForm";
import DynamicForm from "@/components/DynamicForm";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useState } from "react";

const TodoList = dynamic(() => import("@/components/TodoList"));
const TodoForm = dynamic(() => import("@/components/TodoForm"));

const Home = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const [show, setShow] = useState(false);
  return (
    <div className="w-screen h-screen flex justify-center items-center dark:bg-slate-600">
      <section className="w-1/3">
        <DynamicForm />
        <PasswordForm />
        <button
          type="submit"
          className="rounded py-2 px-5 bg-slate-900 w-full mb-4"
          onClick={() => setShow(!show)}
        >
          Create Todos
        </button>
        {show && <TodoForm />}
        {todos.length > 0 && <TodoList />}
      </section>
    </div>
  );
};

export default Home;
