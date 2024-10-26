// src/routes/+page.server.ts
import { error, redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  const authToken = cookies.get("authToken");

  // Redirect to login if no token exists
  if (!authToken) {
    throw redirect(303, "/login");
  }

  try {
    const response = await fetch("https://apibeta.slive.app/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Check for a successful response
    if (!response.ok) {
      const errorText = await response.text();
      //console.error("Error fetching user data:", errorText);
      throw error(500, "Server error while fetching user data.");
    }

    const data = await response.json(); // Return JSON data

    //console.log("Fetched user data:", JSON.stringify(data)); // Log the data to see what is returned

    // Check if the data format is as expected
    if (!data || !data.data) {
      //console.error("Unexpected data format:", data);
      throw error(500, "Unexpected data format received.");
    }

    const userInfo = data.data;
    console.log(userInfo);
    return {
      data: userInfo,
    }; // Return the user info
  } catch (err) {
    //console.error("Error while fetching user data:", err);
    throw error(500, "Failed to fetch user data.");
  }
}
