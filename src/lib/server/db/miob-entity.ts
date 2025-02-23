import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { rooms } from './room';

export const miobEntities = sqliteTable('miob_entities', {
	id: integer().primaryKey({ autoIncrement: true, onConflict: 'fail' }),
	iobId: text().notNull().unique(),
	name: text().notNull(),
	kind: text({ enum: ['shelly', 'zigbee'] }).notNull(),
	type: text({ enum: ['dimmer', 'switch', 'sensor', 'group'] }).notNull(),
	roomId: text() // this is in the form of enum.<group>.<group>...
		.notNull()
		.references(() => rooms.iobId)
});

export const miobEntitysRelations = relations(miobEntities, ({ one }) => ({
	room: one(rooms, { fields: [miobEntities.roomId], references: [rooms.iobId] })
}));

export type CreateMiobEntity = typeof miobEntities.$inferInsert;
export type MiobEntity = typeof miobEntities.$inferSelect;
