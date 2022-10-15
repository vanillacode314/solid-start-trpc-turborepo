import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "api";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/trpc",
    }),
  ],
});
