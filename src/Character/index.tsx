import * as React from "react";
import { RnMCharacter } from "../types";

export function Character({ info }: { info: RnMCharacter }) {
  const { name } = info;
  return <div>{name}</div>;
}
