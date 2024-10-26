import { json, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url, cookies }) => {
  const code = url.searchParams.get("code");
  if (!code) {
    throw redirect(303, "/?error=missing_code");
  }

  try {
    const response = await fetch("https://apibeta.slive.app/auth/twitch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ twitchAuthCode: code }),
    });

    if (!response.ok) {
      // Fehler beim Abrufen des Tokens
      const errorText = await response.text();
      console.error("Fehler bei der Authentifizierung:", errorText);
      throw redirect(303, "/?error=auth_failed");
    }

    const data = await response.json();

    console.error("Data: " + JSON.stringify(data.data));
    if (data.data.token) {
      // Speichern des Tokens im Cookie für die Session
      cookies.set("authToken", data.data.token, {
        httpOnly: true,
        secure: false,
        path: "/",
        maxAge: data.expiresIn || 60 * 60 * 24 * 7, // Setze maxAge auf die Lebensdauer des Tokens
      });

      // Nach erfolgreichem Login weiterleiten
      redirect(303, "/dashboard");
    } else {
      redirect(303, "/?error=token_missing");
    }
  } catch (error) {
    console.error("Fehler bei der Authentifizierung:", error);
    redirect(303, "/dashboard");
  }
};
