export interface IPokemonItems {
  id: number;
  name: string;
  sprites: ImageType;
  moves: MoveType[];
  types: TypeType[];
  stats: StatsType[];
}

export type MoveType = {
  move: { name: string };
};

export type StatsType = {
  base_stat: number;
  stat: { name: string };
};

export type TypeType = {
  type: { name: string };
};

export type ImageType = {
  front_default: string;
};
