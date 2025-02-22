import type { MiobEntity } from '$lib/server/db/miob-entity';
import type { Api } from '../client/Api';
import { generateIdentifierForState } from './light-utils';

export async function getLightStates(entities: MiobEntity[], api: Api<unknown>) {
	const [shellySwitches, zigbeeSwitches, shellyBrightness, zigbeeBrightness] = await Promise.all([
		api.states
			.listStates({ filter: generateIdentifierForState('shelly.*', 'dimmer', 'state') })
			.then((res) => res.data),
		api.states
			.listStates({ filter: generateIdentifierForState('zigbee.*', 'dimmer', 'state') })
			.then((res) => res.data),
		api.states
			.listStates({ filter: generateIdentifierForState('shelly.*', 'dimmer', 'brightness') })
			.then((res) => res.data),
		api.states
			.listStates({ filter: generateIdentifierForState('zigbee.*', 'dimmer', 'brightness') })
			.then((res) => res.data)
	]);

	const switches = { ...shellySwitches, ...zigbeeSwitches };
	const brightness = { ...shellyBrightness, ...zigbeeBrightness };

	const lights = entities.map((entity) =>
		entity.type === 'dimmer'
			? ({
					id: entity.id,
					name: entity.name,
					kind: entity.kind,
					type: entity.type,
					state:
						switches[generateIdentifierForState(entity.iobId, entity.type, 'state')]?.val === true,
					brightness: brightness[
						generateIdentifierForState(entity.iobId, entity.type, 'brightness')
					]?.val as number
				} as const)
			: ({
					id: entity.id,
					name: entity.name,
					type: entity.type,
					kind: entity.kind,
					state:
						switches[generateIdentifierForState(entity.iobId, entity.type, 'state')]?.val === true
				} as const)
	);

	return lights;
}
