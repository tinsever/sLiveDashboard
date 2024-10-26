import { redirect } from "@sveltejs/kit";
import { TWITCH_CLIENT_ID, TWITCH_REDIRECT_URI } from "$env/static/private";

export async function GET() {
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
  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${TWITCH_CLIENT_ID}&redirect_uri=${encodeURIComponent(TWITCH_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(scopes)}`;

  // Redirect to the Twitch authorization URL
  throw redirect(302, authUrl);
}
