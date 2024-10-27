// src/types/Game.ts
export interface Game {
  id: string;
  name: string;
  tier: number;
  shortDescription: string;
  label: {
    name: string;
    color: string;
  };
}
