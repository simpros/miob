import { env } from '$env/dynamic/private';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate as drizzle_migrate } from 'drizzle-orm/libsql/migrator';
import * as schema from './schema';

const url = env.DATABASE_URL ?? 'file:data/local.db';

const client = createClient({ url });
export const db = drizzle({
	client,
	schema
});
export type DB = typeof db;

export async function enableDefaultPragmas() {
	await Promise.all([
		db.run('PRAGMA journal_mode = WAL'),
		db.run('PRAGMA foreign_keys = ON'),
		db.run('PRAGMA synchronous = NORMAL')
	]);
}

export async function migrate() {
	await drizzle_migrate(db, { migrationsFolder: 'drizzle' });
}

export function closeDb() {
	client.close();
}
