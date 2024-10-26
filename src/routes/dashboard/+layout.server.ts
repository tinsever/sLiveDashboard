// src/routes/+page.server.ts
import { error, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  const userInfo = locals.user; // Access user data from locals
  if (!userInfo) {
    throw redirect(303, "/auth/login");
  }
  // Return user info to be used in the page
  return {
    data: userInfo, // This can be used in your Svelte components
  };
}
