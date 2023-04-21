import React from "react";
// import "./Person.css";

function Person({ imgPath, age, name }) {
  return (
    <div className="person">
      <img src={imgPath} alt={name} />

      <div className="person-info">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}

export default Person;
