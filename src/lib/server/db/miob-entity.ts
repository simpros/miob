import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const miobEntity = sqliteTable('miob_entity', {
	id: integer().primaryKey({ autoIncrement: true, onConflict: 'fail' }),
	iobId: text().notNull().unique(),
	name: text().notNull(),
	kind: text({ enum: ['shelly', 'zigbee'] }).notNull(),
	type: text({ enum: ['dimmer', 'switch', 'sensor', 'group'] }).notNull(),
	assignedTo: text().notNull() // this is in the form of enum.<group>.<group>...
});

export type CreateMiobEntity = typeof miobEntity.$inferInsert;
export type MiobEntity = typeof miobEntity.$inferSelect;
