import { completeTodo, deleteTodo } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="py-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex py-2 px-4 bg-slate-200 text-slate-900 justify-between my-2 rounded shadow"
        >
          <p className={todo.completed ? "line-through" : ""}>{todo.title}</p>
          <div>
            <span
              className="cursor-pointer"
              onClick={() => dispatch(completeTodo(todo.id))}
            >
              ✅
            </span>
            <span
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="cursor-pointer"
            >
              🗑️
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
