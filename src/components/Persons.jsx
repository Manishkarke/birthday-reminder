import React from "react";
import Person from "./Person";

function Persons({ data }) {
  return (
    <section className="persons">
      {data.map(({ id, name, age, image }) => {
        return <Person key={id} imgPath={image} name={name} age={age} />;
      })}
    </section>
  );
}

export default Persons;
