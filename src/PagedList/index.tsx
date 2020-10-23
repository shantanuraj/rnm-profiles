import * as React from "react";
import { Characters } from "../Characters";
import { useCharacters } from "../data/characters";
import { Back } from '../icons/Back';
import { Next } from '../icons/Next';
import { CharacterResponse } from '../types';

import './paged-list.css';

export function PagedList() {
  const [page, setPage] = React.useState(1);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const infoRef = React.useRef<CharacterResponse['info']>({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  })
  const { data, error } = useCharacters(page);

  React.useEffect(() => {
    if (data?.info) {
      infoRef.current = data.info
    }
  }, [data])

  const isError = !!error
  const isLoading = !data
  const isLoaded = !!data

  const { info, results } = data  || { info: infoRef.current, results: [] };

  return (
    <>
      <div className="page-info">
        <button onClick={prevPage} disabled={isLoading || !info.prev}>
          <Back />
        </button>
        <span>Page {page} of {info.pages || '?'}</span>
        <button onClick={nextPage} disabled={isLoading || !info.next}>
          <Next />
        </button>
      </div>
      <div className="page-list">
        {isError && <div>Failed to load data from API for page {page}</div>}
        {isLoading && <div>Loading...</div>}
        {isLoaded && <Characters data={results} />}
      </div>
    </>
  );
}
