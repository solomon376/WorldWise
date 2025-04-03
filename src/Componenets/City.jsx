import { useParams, useSearchParams } from 'react-router-dom';

function City({cities}) {
    const { id } = useParams;
    const [searchParams, setSearch] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
  return (
    <>
        <h1>the city {id}</h1>{" "}
        <p>
            With position: {lat} and {lng}
        </p>
    </>
  );
}

export default City;