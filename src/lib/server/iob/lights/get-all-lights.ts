import type { DB } from '$lib/server/db/db';

export async function getAllLights(db: DB) {
	return db.query.miobEntities.findMany({
		with: {
			room: true
		}
	});
}

export type AllLights = Awaited<ReturnType<typeof getAllLights>>;
