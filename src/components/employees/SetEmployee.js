import React, { useState } from "react";

export default function SetEmployee() {
  let [name, setName] = useState("");
  let [dept, setDept] = useState("");
  let [city, setCity] = useState("");
  
  let getDataHandler = (event) => {
    let data = event.target.value;
    switch (event.target.name) {
      case "name":
        setName(data);
        break;
      case "dept":
        setDept(data);
        break;
      case "city":
        setCity(data);
        break;
      default:
        break;
    }
  };

  let submitHandler = (event) => {
    event.preventDefault();
    var payload = {name, dept, city};
    alert(payload.name + " " + payload.dept + " " + payload.city);
  };

  let resetHandler = () =>{
    setName('');
    setDept('');
    setCity('');
  }
  return (
    <>
      <div className="container-fluid border rounded mt-3">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="row">
            <div className="col-md-12 mt-3">
              <label htmlFor="empName" className="form-label">
                Employee Name
              </label>
              <input
                id="empName"
                name="name"
                value={name}
                onChange={(e) => getDataHandler(e)}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="empDept" className="form-label">
                Employee Department
              </label>
              <input
                id="empDept"
                name="dept"
                value={dept}
                onChange={(e) => getDataHandler(e)}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="empCity" className="form-label">
                Employee City
              </label>
              <input
                id="empCity"
                name="city"
                value={city}
                onChange={(e) => getDataHandler(e)}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="submit" className="btn btn-primary mt-3 mb-3" />
              <input type="reset" className="btn btn-warning ms-3" onClick={resetHandler} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
