import Pet from "./Pet";
import SearchParams from "./SearchParams";
import "./App.css";

function App() {
  const heading = "Adopt Me";
  const pets = [
    {
      name: "Luna",
      animal: "Dog",
      breed: "Husky",
    },
    {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot",
    },
    {
      name: "Ricky",
      animal: "Cat",
      breed: "Mix",
    },
  ];
  return (
    <div>
      <h1>{heading}</h1>
      <SearchParams />
      
      {pets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </div>
  );
}

export default App;
