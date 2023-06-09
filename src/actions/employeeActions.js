import employeeAPI from "../apis/employeeAPI";
import { ActionTypes } from "../constants/action-types";

//returns async function
//the returned function which takes dispatch as arg is called as thunk
export const fetchEmployees = () => {
  return async function (dispatch) {
    const response = await employeeAPI.get("/employees");
    const actionObj = setEmployees(response.data);
    dispatch(actionObj);
  };
};

export const setEmployees = (employees) => {
  return {
    type: ActionTypes.SET_EMPLOYEES,
    payload: employees,
  };
};
