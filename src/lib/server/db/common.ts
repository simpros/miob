import { sql } from 'drizzle-orm/sql';
import { integer } from 'drizzle-orm/sqlite-core';

export const commonFields = {
	createdAt: integer({ mode: 'timestamp' }).default(sql`(unixepoch())`),
	updatedAt: integer({ mode: 'timestamp' }).default(sql`(unixepoch())`)
};
