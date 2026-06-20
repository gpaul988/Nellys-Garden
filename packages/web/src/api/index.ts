import { Hono } from 'hono';
import { cors } from "hono/cors"

// Mock broadcast message storage (in production, use a database)
let broadcastMessage = {
  id: 'broadcast-001',
  message: '🚀 Welcome to Nellys-Garden! Explore 40+ plants and join our growing Nigerian horticulture community.',
  type: 'success' as const,
  enabled: true,
};

const app = new Hono()
  .basePath('api')
  .use(cors({ origin: (origin) => origin ?? "*", credentials: true, exposeHeaders: ["set-auth-token"] }))
  .get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }, 200))
  .get('/health', (c) => c.json({ status: 'ok' }, 200))
  .get('/broadcast', (c) => {
    if (broadcastMessage.enabled) {
      return c.json(broadcastMessage, 200);
    }
    return c.json({ message: null }, 200);
  })
  .post('/broadcast', (c) => {
    // Optional: Update broadcast message (could add auth here)
    return c.json({ success: true, message: 'Broadcast updated' }, 200);
  });

export type AppType = typeof app;
export default app;
