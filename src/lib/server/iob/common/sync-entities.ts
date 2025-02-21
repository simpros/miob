import type { DB } from '$lib/server/db/db';
import { miobEntity } from '$lib/server/db/miob-entity';
import { syncLog } from '$lib/server/db/sync-log';
import { sql } from 'drizzle-orm';
import type { Api } from '../client/Api';
import { mapToMiobEntity } from './map-to-miob-entity';

export async function syncEntities(iob: Api<unknown>, db: DB) {
	const devices = await Promise.all([
		iob.objects.listObjects({ filter: 'shelly.*', type: 'device' }),
		iob.objects.listObjects({ filter: 'zigbee.*', type: 'device' })
	]).then(([shellyDevices, zigbeeDevices]) =>
		Object.assign({}, shellyDevices.data, zigbeeDevices.data)
	);

	const entities = Object.entries(devices)
		.map(([id, obj]) => mapToMiobEntity(id, obj))
		.filter((x) => x !== null);

	db.transaction(async (tx) => {
		await tx
			.insert(miobEntity)
			.values(entities)
			.onConflictDoUpdate({
				target: miobEntity.iobId,
				set: {
					name: sql`excluded.name`,
					assignedTo: sql`excluded.assignedTo`,
					kind: sql`excluded.kind`,
					type: sql`excluded.type`
				}
			});
		await tx.insert(syncLog).values({});
	});
}
