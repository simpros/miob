import type { CreateMiobEntity } from '$lib/server/db/miob-entity';
import type { Object } from '../client/Api';
import { generateEntityType } from './generate-entity-type';

export function mapToMiobEntity(iobId: string, obj: Object): CreateMiobEntity | null {
	if (!obj.common) return null;
	if (!('enums' in obj)) return null;
	if (typeof obj.enums !== 'object') return null;

	const enums = obj.enums as Record<string, string | Record<string, string>>;
	if (Object.keys(enums).length === 0) return null;

	const common = obj.common as { name: string };

	const baseInformation = {
		iobId,
		kind: iobId.split('.')[0] as 'shelly' | 'zigbee'
	};

	return {
		...baseInformation,
		name: common.name,
		type: generateEntityType(baseInformation),
		roomId: Object.keys(enums)[0]
	};
}
