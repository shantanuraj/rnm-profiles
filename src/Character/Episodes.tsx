import * as React from "react";
import { useEpisodes } from "../data/episodes";
import { EpisodeInfo } from "../types";

export function Episodes({ data }: { data: string[] }) {
  const { data: episodes, error } = useEpisodes(data);
  if (error) {
    return <h4>Couldn't fetch episodes info</h4>;
  }
  const episodesData = episodes
    ? ([] as Array<EpisodeInfo>).concat(episodes)
    : [];
  return (
    <div className="episode-info">
      <h4 className="stat-info">
        Appears in {data.length} episode{data.length > 1 ? "s" : ""} including
      </h4>
      {episodes && (
        <ul>
          {episodesData.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
