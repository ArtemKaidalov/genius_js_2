import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [value, useValue] = useState(0);

  return (
    <div className="block">
      <p>Counter</p>
      <p>{value}</p>
      <button></button>
    </div>
  );
};

export default Home;
