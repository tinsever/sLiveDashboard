// src/hooks.server.ts
import type { Handle } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  // Retrieve the auth token from cookies, if it exists
  const authToken = event.cookies.get("authToken");
  event.locals.authToken = authToken || null; // Attach the auth token to locals

  // Fetch user data if the token exists
  if (authToken) {
    try {
      const response = await fetch("https://apibeta.slive.app/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Check if the response is successful
      if (!response.ok) {
        throw error(401, "Unauthorized access to user data.");
      }

      const data = JSON.parse(await response.text());

      // Ensure the data structure is as expected
      if (!data || !data.data) {
        throw error(500, "Unexpected data format received.");
      }

      // Attach user data to locals
      event.locals.user = data.data; // Set user data here
    } catch (err) {
      console.error("Error while fetching user data:", err);
      event.locals.user = null; // Set to null if there's an error
    }
  } else {
    event.locals.user = null; // No token, set user to null
  }

  // Continue processing the request
  const response = await resolve(event);
  return response;
};
