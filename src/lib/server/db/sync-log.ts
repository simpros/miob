import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { commonFields } from './common';

export const syncLog = sqliteTable('synch_log', {
	id: integer().primaryKey({ autoIncrement: true }),
	...commonFields
});
