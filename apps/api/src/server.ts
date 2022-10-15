import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { getPokemon } from "@api/lib/get-pokemon";

const t = initTRPC.create();

export const appRouter = t.router({
  getPokemon: t.procedure
    .input(z.string())
    .query(({ input }) => getPokemon(input)),
});

export type AppRouter = typeof appRouter;
