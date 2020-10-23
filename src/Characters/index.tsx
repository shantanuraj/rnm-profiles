import * as React from "react";
import { Character } from "../Character";
import { RnMCharacter } from "../types";

export function Characters({ data }: { data: RnMCharacter[] }) {
  return (
    <>
      {data.map((character) => (
        <Character key={character.id} info={character} />
      ))}
    </>
  );
}
