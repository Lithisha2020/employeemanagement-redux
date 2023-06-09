import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from "../reducers/employeesReducer";

export const store = configureStore({
  reducer: {
    ftemployees: mainReducer,
  },
});
