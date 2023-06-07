import React from "react";
import { useSelector } from "react-redux";

export default function Employee() {
  debugger;
  const employees = useSelector((state) => {
    console.log(state);
    return state.EmployeeReducer.employees;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>EmployeeId</th>
            <th>Name</th>
            <th>Department</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <td>emp.id</td>
              <td>emp.name</td>
              <td>emp.department</td>
              <td>emp.city</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
