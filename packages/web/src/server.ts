import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Hono } from "hono";
import app from "./api";

const port = Number(process.env.PORT ?? 3000);
const distDir = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");
const indexPath = resolve(distDir, "index.html");

const serverApp = new Hono();

serverApp.route("/", app);
serverApp.use("*", serveStatic({ root: distDir }));
serverApp.get("*", async (c) => {
  try {
    return c.html(await readFile(indexPath, "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;

    return c.text(
      "Build output not found. Run `npm run build --workspace=@template/web` first.",
      500,
    );
  }
});

serve({ fetch: serverApp.fetch, port }, (info) => {
  console.log(`Web server listening on http://localhost:${info.port}`);
});
