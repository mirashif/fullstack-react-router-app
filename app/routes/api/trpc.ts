import { createTRPCContext } from "~/server/trpc";
import { appRouter } from "~/server/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

export const loader = async (args: LoaderFunctionArgs) => {
  return handleRequest(args);
};

export const action = async (args: ActionFunctionArgs) => {
  return handleRequest(args);
};

function handleRequest(args: LoaderFunctionArgs | ActionFunctionArgs) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: args.request,
    router: appRouter,
    createContext: () =>
      createTRPCContext({
        headers: args.request.headers,
      }),
  });
}
