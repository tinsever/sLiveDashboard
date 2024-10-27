// src/hooks.server.ts
import type { Handle } from "@sveltejs/kit";
import { API_URL } from "$env/static/private";

const api = (authToken) => {
  const fetchFromAPI = async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`API error ${endpoint}:`, response.statusText);
        return null;
      }

      return await response.json();
    } catch (err) {
      console.error(`Failed fetching ${endpoint}:`, err);
      return null;
    }
  };

  return {
    me: () => fetchFromAPI("/me"),
    games: () => fetchFromAPI("/games"),
  };
};

export const handle: Handle = async ({ event, resolve }) => {
  const authToken = event.cookies.get("authToken");

  if (authToken) {
    const api_client = api(authToken);

    // Get whatever data we can, ignore errors
    const [userData, gamesData] = await Promise.all([
      api_client.me(),
      api_client.games(),
    ]);

    event.locals.user = userData?.data || null;
    event.locals.games = gamesData?.data?.games || [];
  }

  const response = await resolve(event);
  return response;
};
