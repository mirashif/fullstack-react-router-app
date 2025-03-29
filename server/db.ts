import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "~/lib/env";

// You can specify any property from the node-postgres connection options
export const db = drizzle(env.DATABASE_URL);
