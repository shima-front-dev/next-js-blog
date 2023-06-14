import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "next-engineer-blog",
  apiKey: process.env.API_KEY,
});
