import * as React from "react";
import { RnMCharacter } from "../types";

import './character.css';

export function Character({ info }: { info: RnMCharacter }) {
  const { name, status, species, location, image } = info;
  return (
    <div className="character">
      <img src={image}></img>
      <div>
        <h1>{name}</h1>
        <h4><span className="info">{status}</span> - {species}</h4>
        <h4>Location - <span className="info">{location.name}</span></h4>
      </div>
    </div>
  )
}
