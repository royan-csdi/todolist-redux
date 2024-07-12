"use client";

import { RootState } from "@/store";
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center dark:bg-slate-600">
      <section className="w-1/3">
        <TodoForm />
        <TodoList />
      </section>
    </div>
  );
};

export default Home;
