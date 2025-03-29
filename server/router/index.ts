import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const appRouter = router({
  greeting: {
    hello: publicProcedure
      .input(
        z
          .object({
            source: z.string(),
          })
          .optional()
      )
      .query(({ input }) => {
        return `Hello ${input?.source ?? "world"}!`;
      }),
  },
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
