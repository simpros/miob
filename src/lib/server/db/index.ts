import { env } from '$env/dynamic/private';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
const url = env.DATABASE_URL ?? 'file:data/local.db';
const client = createClient({ url });
export const db = drizzle(client);
