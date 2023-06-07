import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../../actions/employeeActions";
import Employee from "./Employee";

export default function EmployeeList() {
  const dispatch = useDispatch();

  const fetchData = () => {
    const actionObj = fetchEmployees();
    dispatch(actionObj);
  };

  useEffect(() => {
    debugger
    fetchData();
  });

  return <Employee></Employee>;
}
