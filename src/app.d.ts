// src/types/app.d.ts
import type { UserData } from "./types/UserData"; // Adjust the import path as necessary

declare global {
  declare namespace App {
    interface Locals {
      authToken?: string | null; // This is for your auth token
      user?: UserData | null; // Include UserData in the locals
    }
  }
}
