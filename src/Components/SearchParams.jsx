import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  function changeName(e) {
    setName(e.target.value);
  }
  return (
  <div className="search-params">
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" placeholder="Search by Name" value={name}
        onChange={(e) => changeName(e)}
        />
      </label>
    </form>
  </div>
  );
}

export default SearchParams;
