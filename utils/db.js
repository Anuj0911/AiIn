import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Initialize Neon client with URL and optional logging for debugging
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL, { debug: true });

// Export Drizzle ORM instance with explicit schema typing for better TS support
export const db = drizzle(sql, { schema });
