import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { miobEntities } from './miob-entity';

export const rooms = sqliteTable('rooms', {
	id: integer().primaryKey({ autoIncrement: true, onConflict: 'fail' }),
	iobId: text().notNull().unique(),
	name: text().notNull()
});

export const roomsRelations = relations(rooms, ({ many }) => ({
	miobEntitys: many(miobEntities)
}));

export type CreateRoom = typeof rooms.$inferInsert;
export type Room = typeof rooms.$inferSelect;
