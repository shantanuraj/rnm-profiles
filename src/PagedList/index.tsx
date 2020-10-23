import * as React from "react";
import { Characters } from "../Characters";
import { useCharacters } from "../data/characters";

export function PagedList() {
  const [page, setPage] = React.useState(1);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const { data, error } = useCharacters(page);

  if (error) {
    console.error(error);
    return <div>Failed to load data from API for page {page}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  const { info, results } = data;

  return (
    <>
      <div>Page {page} of {info.pages}</div>
      <div>
        <button onClick={prevPage} disabled={!info.prev}>
          Previous
        </button>
        <button onClick={nextPage} disabled={!info.next}>
          Next
        </button>
      </div>
      <Characters data={results} />
    </>
  );
}
