import { useState } from "react";
import Results from "./Results";
import usePets from "../Hooks/usePets";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [pets, filterPets] = usePets();

  function changeLocation(e){
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form 
      onSubmit={(e) => {
        e.preventDefault()
        filterPets(location, animal)
      }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Search by Name"
            value={location}
            onChange={(e) => changeLocation(e)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label> */}
        <button type="submit">Submit</button>
      </form>

      <Results pets={pets}/>
    </div>
  );
}

export default SearchParams;
