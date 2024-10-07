import Pet from "./Pet";

export default function Results(props) {
  const { pets } = props;

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
