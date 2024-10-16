import { useSelector } from "react-redux";
import Pet from "./Pet";

export default function Results() {
  const pets = useSelector(store => store.petSlice.pets)
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => <Pet key={pet.id} {...pet} />)
      )}
    </div>
  );
}
