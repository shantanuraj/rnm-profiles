import * as React from "react";
import { RnMCharacter } from "../types";

import './character.css';

export function Character({ info }: { info: RnMCharacter }) {
  const { name, status, species, location, image } = info;
  return (
    <div className="character">
      <img src={image}></img>
      <div className="info">
        <h1 className="name">{name}</h1>
        <p className="status stat">{status}</p>
        <h4>Species: <span className="stat">{species}</span></h4>
        <h4>Location: <span className="stat">{location.name}</span></h4>
      </div>
    </div>
  )
}
