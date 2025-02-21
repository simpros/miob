import type { MiobEntity } from '$lib/server/db/miob-entity';
import type { Api } from '../client/Api';
import { generateIdentifierForState } from './light-utils';

export async function getLightStates(entities: MiobEntity[], api: Api<unknown>) {
	const [shellySwitches, zigbeeSwitches, shellyBrightness, zigbeeBrightness] = await Promise.all([
		api.states
			.listStates({ filter: generateIdentifierForState('shelly.*', 'state') })
			.then((res) => res.data),
		api.states
			.listStates({ filter: generateIdentifierForState('zigbee.*', 'state') })
			.then((res) => res.data),
		api.states
			.listStates({ filter: generateIdentifierForState('shelly.*', 'brightness') })
			.then((res) => res.data),
		api.states
			.listStates({ filter: generateIdentifierForState('zigbee.*', 'brightness') })
			.then((res) => res.data)
	]);

	const switches = { ...shellySwitches, ...zigbeeSwitches };
	const brightness = { ...shellyBrightness, ...zigbeeBrightness };

	const lights = entities.map((entity) => ({
		id: entity.iobId,
		name: entity.name,
		kind: entity.kind,
		state: switches[generateIdentifierForState(entity.iobId, 'state')]?.val === true,
		brightness: brightness[generateIdentifierForState(entity.iobId, 'brightness')]?.val
	}));

	return lights;
}
