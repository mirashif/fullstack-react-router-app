import type { Route } from "./+types/home";
import { useTRPC } from "~/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { caller } from "~/trpc/server";
import { redirect } from "react-router";

export default function Home({ loaderData }: Route.ComponentProps) {
  const trpc = useTRPC();
  const { data, isLoading } = useQuery(
    trpc.greeting.hello.queryOptions({ source: "client" })
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <p>{isLoading ? "Loading..." : data}</p>
      <p>{loaderData}</p>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader(loaderArgs: Route.LoaderArgs) {
  const api = await caller(loaderArgs);
  try {
    const data = await api.greeting.hello({ source: "server" });
    if (!data) {
      return redirect("/");
    }
    return data;
  } catch (error) {
    return redirect("/");
  }
}
