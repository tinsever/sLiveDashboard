// src/hooks.server.ts
import type { Handle } from "@sveltejs/kit";
import { API_URL } from "$env/static/private";

const api = (authToken: string) => {
  const fetchFromAPI = async (endpoint: string) => {
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
    validateToken: async () => {
      try {
        const response = await fetch(`${API_URL}/auth/validate`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          return true; // Token is valid
        } else if (response.status === 401) {
          return false; // Token is invalid
        }
      } catch (err) {
        console.error(`Failed to validate token:`, err);
      }
      return false; // Treat errors as invalid token
    },
    me: () => fetchFromAPI("/me"),
    games: () => fetchFromAPI("/games"),
  };
};

export const handle: Handle = async ({ event, resolve }) => {
  const authToken = event.cookies.get("authToken");

  if (authToken) {
    const api_client = api(authToken);

    // Validate token by status code
    const isValidToken = await api_client.validateToken();

    if (isValidToken) {
      // Token is valid, proceed to fetch user data
      const [userData, gamesData] = await Promise.all([
        api_client.me(),
        api_client.games(),
      ]);

      event.locals.user = userData?.data || null;
      event.locals.games = gamesData?.data?.games || [];
    } else {
      // Token is invalid, clear cookies and session data
      event.cookies.delete("authToken", { path: "/" });
      event.locals.user = null;
      event.locals.games = [];
    }
  }

  const response = await resolve(event);
  return response;
};
