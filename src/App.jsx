import { useState } from "react";
import Persons from "./components/Persons";
import data from "./data";

const App = () => {
  const [people, setPeoples] = useState(data);
  return (
    <main>
      <article className="container">
        <h3>{people.length} Birthdays today</h3>
        <Persons data={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            setPeoples([]);
          }}
        >
          Clear All
        </button>
      </article>
    </main>
  );
};
export default App;
