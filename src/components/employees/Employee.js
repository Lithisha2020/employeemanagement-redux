import React from "react";
import { useSelector } from "react-redux";

export default function Employee() {
  const employees = useSelector((state) => {
    return state.ftemployees.employeeReducer.employees;
  });

  return (
    <>
      <div className="container-fluid mt-3 border rounded">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>EmployeeId</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.city}</td>
                    <td>
                      <button
                        onClick={editHandler(emp.Id)}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                      <button
                        onClick={deleteHandler}
                        className="btn btn-danger ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
