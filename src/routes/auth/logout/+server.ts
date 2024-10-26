import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ cookies }) => {
  // Clear the auth token cookie
  cookies.delete("authToken", { path: "/" });

  return json({ success: true });
};
