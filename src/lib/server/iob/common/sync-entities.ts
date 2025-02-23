import type { DB } from '$lib/server/db/db';
import { miobEntities } from '$lib/server/db/miob-entity';
import { rooms } from '$lib/server/db/room';
import { syncLog } from '$lib/server/db/sync-log';
import { sql } from 'drizzle-orm';
import type { Api } from '../client/Api';
import { mapToMiobEntity } from './map-to-miob-entity';
import { mapToRoom } from './map-to-room';

export async function syncEntities(iob: Api<unknown>, db: DB) {
	const [devices, iobEnums] = await Promise.all([
		iob.objects.listObjects({ filter: 'shelly.*', type: 'device' }),
		iob.objects.listObjects({ filter: 'zigbee.*', type: 'device' }),
		iob.objects.listObjects({ filter: 'enum.rooms.*', type: 'enum' })
	]).then(([shellyDevices, zigbeeDevices, rooms]) => [
		Object.assign({}, shellyDevices.data, zigbeeDevices.data),
		rooms.data
	]);

	const entities = Object.entries(devices)
		.map(([id, obj]) => mapToMiobEntity(id, obj))
		.filter((x) => x !== null);
	const createRooms = Object.entries(iobEnums)
		.map(([id, obj]) => mapToRoom(id, obj))
		.filter((x) => x !== null);

	db.transaction(async (tx) => {
		await tx
			.insert(rooms)
			.values(createRooms)
			.onConflictDoUpdate({
				target: rooms.iobId,
				set: {
					name: sql`excluded.name`
				}
			});
		await tx
			.insert(miobEntities)
			.values(entities)
			.onConflictDoUpdate({
				target: miobEntities.iobId,
				set: {
					name: sql`excluded.name`,
					roomId: sql`excluded.roomId`,
					kind: sql`excluded.kind`,
					type: sql`excluded.type`
				}
			});
		await tx.insert(syncLog).values({});
	});
}
