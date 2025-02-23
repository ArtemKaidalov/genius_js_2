import React from "react";
import "./Home.css";

const RegistrationForm = ({
  name,
  city,
  email,
  password,
  handleChangeName,
  handleChangeCity,
  handleChangeEmail,
  handleChangePassword,
  onSubmitForm,
}) => {
  const checkPass = (pass) => {
    return pass.length > 6;
  };

  const checkEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const ValidForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <div className="block">
      <p>Registration Form</p>
      <form>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => handleChangeName(event)}
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            value={city}
            onChange={(event) => handleChangeCity(event)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => handleChangePassword(event)}
          ></input>
        </div>
        {ValidForm() && (
          <button type="button" onClick={onSubmitForm}>
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
