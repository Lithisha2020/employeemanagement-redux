import { combineReducers } from "redux";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  employees: [],
  contractors: [],
};

let employeeId = 4;

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    case ActionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            id: employeeId++,
            name: action.payload.name,
            dept: action.payload.dept,
            city: action.payload.city,
          },
        ],
      };
    case ActionTypes.EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id
            ? {
                name: action.payload.name,
                city: action.payload.city,
                dept: action.payload.dept,
              }
            : emp
        ),
      };
    case ActionTypes.REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: [
          state.employees.filter((emp) => emp.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export const mainReducer = combineReducers({
  employeeReducer,
});
