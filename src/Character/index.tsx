import * as React from "react";
import { RnMCharacter } from "../types";

import "./character.css";
import { Episodes } from './Episodes';
import { Location } from "./Location";
import { Stat } from './Stat';

export function Character({ info }: { info: RnMCharacter }) {
  const { name, status, species, location, image, episode } = info;
  return (
    <div className="character">
      <img src={image} alt={name} width="300px" height="300px"></img>
      <div className="info">
        <h1>{name}</h1>
        <h4 className="stat stat-info">{status}</h4>
        <Stat left="Species" right={species} />
        <React.Suspense
          fallback={
            <Stat left="Location" right={location.name} />
          }
        >
          <Location data={location} />
        </React.Suspense>

        <React.Suspense
          fallback={
            <h4>
              Appears in {episode.length} episodes
            </h4>
          }
        >
          <Episodes data={episode} />
        </React.Suspense>
      </div>
    </div>
  );
}
