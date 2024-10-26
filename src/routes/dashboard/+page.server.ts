// src/routes/+page.server.ts
import { error, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  const userInfo = locals.user; // Access user data from locals

  // Redirect to login if no token exists
  if (!userInfo) {
    throw redirect(303, "/login");
  }

  return {
    data: userInfo, // This can be used in your Svelte components
  };
}
