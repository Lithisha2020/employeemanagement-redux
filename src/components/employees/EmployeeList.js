import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../../actions/employeeActions";
import Employee from "./Employee";
import SetEmployee from "./SetEmployee";

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

  return <>
  <div className="container-fluid">
    <div className="row">
        <div className="col-md-8"><Employee></Employee></div>
        <div className="col-md-4"><SetEmployee></SetEmployee></div>
    </div>
  </div>
  </>;
}
