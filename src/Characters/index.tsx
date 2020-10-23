import * as React from "react";
import { Character } from "../Character";
import { RnMCharacter } from "../types";

export function Characters({ data }: { data: RnMCharacter[] }) {
  return (
    <ul>
      {data.map((character) => (
        <li key={character.id}>
          <Character info={character} />
        </li>
      ))}
    </ul>
  );
}
