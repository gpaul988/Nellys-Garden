import { Hono } from 'hono';
import { cors } from "hono/cors"

// Mock broadcast message storage (in production, use a database)
let broadcastMessage = {
  id: 'broadcast-001',
  message: '🚀 Welcome to Nellys-Garden! Explore 40+ plants and join our growing Nigerian horticulture community.',
  type: 'success' as const,
  enabled: true,
};

// Mock stories storage (in production, use a database)
interface Story {
  id: string;
  author: string;
  location: string;
  title: string;
  description: string;
  createdAt: string;
  status: 'ACTIVE' | 'VERIFIED';
}

let stories: Story[] = [
  {
    id: '1',
    author: 'Chioma A.',
    location: 'Lagos',
    title: 'MORINGA_v3.2 DEPLOYMENT',
    description: 'Harvesting cycle initiated. Nutritional output: +340%. Network status: OPTIMAL. Started with just seedlings and now have a thriving moringa farm.',
    createdAt: new Date().toISOString(),
    status: 'ACTIVE',
  },
  {
    id: '2',
    author: 'Kunle O.',
    location: 'Ibadan',
    title: 'OKRA_YIELD_PROTOCOL',
    description: '3x yield increase achieved. Pest defense systems: 98% effective. Chemical exposure: 0%. Used organic methods throughout the season.',
    createdAt: new Date().toISOString(),
    status: 'VERIFIED',
  },
];

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
  })
  .get('/stories', (c) => {
    // Return all stories sorted by newest first
    return c.json(stories.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()), 200);
  })
  .post('/stories', async (c) => {
    try {
      const body = await c.req.json();
      const { author, location, title, description } = body;

      // Validate required fields
      if (!author || !location || !title || !description) {
        return c.json({ error: 'Missing required fields' }, 400);
      }

      // Create new story
      const newStory: Story = {
        id: Date.now().toString(),
        author,
        location,
        title,
        description,
        createdAt: new Date().toISOString(),
        status: 'ACTIVE',
      };

      stories.push(newStory);
      return c.json({ success: true, story: newStory }, 201);
    } catch (error) {
      return c.json({ error: 'Failed to create story' }, 500);
    }
  });

export type AppType = typeof app;
export default app;
