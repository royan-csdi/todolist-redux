import { ITodo } from "@/types/todo";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IForm {
  text: string;
}

export interface TodoState {
  todos: ITodo[];
  form: IForm;
}

const initialState: TodoState = {
  todos: [],
  form: { text: "" },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.form = { ...state.form, text: action.payload };
    },
  },
});

export const { addTodo, setTitle, deleteTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
