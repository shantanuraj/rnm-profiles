export type RnMCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export type Location = {
  name: string;
  url: string;
};

export type CharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Array<RnMCharacter>;
};
