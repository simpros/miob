import type { DB } from '$lib/server/db/db';

export async function getAllLights(db: DB) {
	return db.query.miobEntity.findMany();
}
