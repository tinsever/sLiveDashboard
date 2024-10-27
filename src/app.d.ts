// src/types/app.d.ts
import type { UserData } from "$lib/UserData"; // Adjust the import path as necessary
import type { Game } from "$lib/Game"; // Import the Game type

declare global {
  declare namespace App {
    interface Locals {
      authToken?: string | null;
      user?: UserData | null;
      games?: Game[]; // Include games in the locals
    }
  }
}

type dataType = {
  user: UserData | null;
  games: Game[]; // Specify the type of games
};
