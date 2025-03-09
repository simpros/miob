import { defineConfig } from 'drizzle-kit';
const url = process.env.DATABASE_URL ?? 'file:data/local.db';

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url
	},

	verbose: true,
	strict: true,
	dialect: 'sqlite'
});
