import React, { useState } from "react";
import "./Home.css";
import AccountCard from "./AccountCard";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
  // const [value, useValue] = useState(0);

  // const Change = () => {
  //   useValue(value + 1);
  // };

  // return (
  //   <div className="block">
  //     <p>Counter</p>
  //     <p>{value}</p>
  //     <button onClick={Change}>Click</button>
  //   </div>
  // );

  const [name, useName] = useState("");
  const [city, useCity] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [acc, useAcc] = useState(false);

  const HandleChangeEmail = (e) => {
    useEmail(e.target.value);
  };
  const HandleChangeName = (e) => {
    useName(e.target.value);
  };
  const HandleChangeCity = (e) => {
    useCity(e.target.value);
  };

  const HandleChangePassword = (e) => {
    usePassword(e.target.value);
  };

  const OnSubmitForm = () => {
    useAcc(true);
  };

  return (
    <div className="block">
      {acc ? (
        <AccountCard
          name={name}
          city={city}
          email={email}
          password={password}
        />
      ) : (
        <RegistrationForm
          handleChangeName={HandleChangeName}
          handleChangeCity={HandleChangeCity}
          handleChangeEmail={HandleChangeEmail}
          handleChangePassword={HandleChangePassword}
          onSubmitForm={OnSubmitForm}
          name={name}
          city={city}
          email={email}
          password={password}
        />
      )}
    </div>
  );
};

export default Home;
