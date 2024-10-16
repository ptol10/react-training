import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPets } from "../store/slices/pet-slice";

export default function usePets() {

  const dispatch = useDispatch();

  async function fetchPets() {
    const response = await fetch("http://pets-v2.dev-apis.com/pets");
    const data = await response.json();
    dispatch(setPets(data.pets));
  }

  async function filterPets(location, animal) {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}`)
    const body = await res.json();
    setPets(body.pets);
  }

  useEffect(() => {
    fetchPets();
  }, []);

  return filterPets;
}