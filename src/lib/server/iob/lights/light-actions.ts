import type { MiobEntity } from '$lib/server/db/miob-entity';
import type { Api } from '../client/Api';
import { generateIdentifierForState } from './light-utils';

export function toggleLight(api: Api<unknown>, entity: MiobEntity) {
	const switchId = encodeURIComponent(
		generateIdentifierForState(entity.iobId, entity.type, 'state')
	);

	return api.state.toggleState(switchId);
}

export function updateBrightness(api: Api<unknown>, entity: MiobEntity, brightness: string) {
	const switchId = encodeURIComponent(
		generateIdentifierForState(entity.iobId, entity.type, 'brightness')
	);
	return api.command.setStateList({ id: switchId, state: brightness });
}
