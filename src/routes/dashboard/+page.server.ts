// src/routes/+page.server.ts
import { error, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  const { user, games } = locals;

  // Redirect to login if no user data exists
  if (!user) {
    throw redirect(303, "/login");
  }

  return {
    user: user,
    games: games,
  };
}
