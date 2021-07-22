import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, description: "todo1", isDone: false },
    { id: 2, description: "todo2", isDone: false },
    { id: 3, description: "todo3", isDone: true },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        description: action.payload.description,
        isDone: false,
      };
      state.push(newTodo);
    },
    toggleIsDone: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].isDone = action.payload.isDone;
    },
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTask: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            description: action.payload.description,
          };
        }
        return todo;
      });
    },
  },
},
);

export const { addTask, toggleIsDone, deleteTask, editTask } =
  todoSlice.actions;
export default todoSlice.reducer;
