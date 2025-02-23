import type { Api } from '../client/Api';
import type { AllLights } from './get-all-lights';
import { generateIdentifierForState } from './light-utils';

export async function getLightStates(entities: AllLights, api: Api<unknown>) {
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

	const lights = entities.map(
		(entity) =>
			({
				...entity,
				state:
					switches[generateIdentifierForState(entity.iobId, entity.type, 'state')]?.val === true,
				brightness:
					entity.type === 'dimmer'
						? (brightness[generateIdentifierForState(entity.iobId, entity.type, 'brightness')]
								?.val as number | undefined)
						: undefined
			}) as const
	);

	return lights;
}
