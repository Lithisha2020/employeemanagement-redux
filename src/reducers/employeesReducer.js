import { combineReducers } from "redux";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  employees: [],
  contractors: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
};

export const mainReducer = combineReducers({
    employeeReducer
});
