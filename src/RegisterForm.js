import React from "react";
import withForm from "./components/withForm";

function RegisterForm(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit REGISTER", props.formData);
  };
  console.log("REGISTER FORM PROPS => ", props);
  const { formData, handleOnChange } = props;
  return (
    <div>
      <div className="col-md-4 offset-md-4 mt-2">
        <h1>Register Form</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group mb-2 ">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-2 ">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mb-2 ">
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group ">
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withForm(RegisterForm);
