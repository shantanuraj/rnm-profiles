import * as React from "react";
import { Characters } from "../Characters";
import { useCharacters } from "../data/characters";
import { Back } from '../icons/Back';
import { Next } from '../icons/Next';

import './paged-list.css';

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
      <div className="page-info">
        <button onClick={prevPage} disabled={!info.prev}>
          <Back />
        </button>
        <span>Page {page} of {info.pages}</span>
        <button onClick={nextPage} disabled={!info.next}>
          <Next />
        </button>
      </div>
      <Characters data={results} />
    </>
  );
}
