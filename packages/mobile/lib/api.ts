import { hc } from "hono/client";
import type { AppType } from "@template/web";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

if (!baseUrl) {
  throw new Error("Set EXPO_PUBLIC_API_URL to the URL of the Nelly's Garden API.");
}

const client = hc<AppType>(baseUrl);

export const api = client.api;
