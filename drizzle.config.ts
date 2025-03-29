import { defineConfig } from "drizzle-kit";
import { env } from "~/lib/env";

export default defineConfig({
  out: "./server/migration",
  schema: "./server/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
