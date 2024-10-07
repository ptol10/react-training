import { useParams } from "react-router-dom"

function Details() {

  const {id} = useParams();

  return (
    <p>Details - {id}</p>
  )
}

export default Details