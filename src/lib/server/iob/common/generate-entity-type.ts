import type { MiobEntity } from '$lib/server/db/miob-entity';

export function generateEntityType(entity: {
	iobId: string;
	kind: MiobEntity['kind'];
}): MiobEntity['type'] {
	switch (entity.kind) {
		case 'shelly':
			return entity.iobId.includes('SHDM') ? 'dimmer' : 'switch';
		case 'zigbee':
			return 'dimmer';
		default:
			throw new Error(`Unknown kind: ${entity.kind}`);
	}
}
