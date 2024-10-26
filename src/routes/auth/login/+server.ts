import { redirect } from "@sveltejs/kit";

export async function GET() {
  // Hardcoded for testing purposes
  const clientId = "s9il8b3uvhyo99hy4hixr4pdevus8z";
  const redirectUri = "http://localhost:5173/auth/callback";
  const scopes = [
    "user:read:chat",
    "moderator:read:followers",
    "channel:read:subscriptions",
    "bits:read",
    "moderation:read",
    "channel:read:polls",
    "channel:read:predictions",
    "channel:read:hype_train",
    "channel:read:charity",
    "moderator:read:shoutouts",
    "channel:read:goals",
  ].join(" ");

  // Encode the scopes and construct the authorization URL
  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scopes)}`;

  // Redirect to the Twitch authorization URL
  throw redirect(302, authUrl);
}
