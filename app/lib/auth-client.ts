import { createAuthClient } from "better-auth/react";
import { env } from "~/lib/env";

export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: env.BETTER_AUTH_URL,
});
