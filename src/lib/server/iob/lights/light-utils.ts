import type { MiobEntity } from '$lib/server/db/miob-entity';

export function generateShellySwitchSwitchStateId(id: string) {
	return `${id}.Relay0.Switch`;
}
export function generateShellyDimmerSwitchStateId(id: string) {
	return `${id}.lights.Switch`;
}
export function generateZigbeeSwitchStateId(id: string) {
	return `${id}.state`;
}
export function generateShellyBrightnessStateId(id: string) {
	return `${id}.lights.brightness`;
}
export function generateZigbeeBrightnessStateId(id: string) {
	return `${id}.brightness`;
}

export function generateIdentifierForState(
	id: string,
	type: MiobEntity['type'],
	state: 'state' | 'brightness'
): string {
	const kind = id.split('.')[0];

	switch (kind) {
		case 'shelly':
			switch (type) {
				case 'switch':
					switch (state) {
						case 'state':
							return generateShellySwitchSwitchStateId(id);
						case 'brightness':
							throw new Error('Shelly switch does not have brightness');
						default:
							throw new Error(`Unknown state: ${state}`);
					}
				case 'dimmer':
					switch (state) {
						case 'state':
							return generateShellyDimmerSwitchStateId(id);
						case 'brightness':
							return generateShellyBrightnessStateId(id);
						default:
							throw new Error(`Unknown state: ${state}`);
					}
			}
			break;
		case 'zigbee':
			switch (type) {
				case 'dimmer':
					switch (state) {
						case 'state':
							return generateZigbeeSwitchStateId(id);
						case 'brightness':
							return generateZigbeeBrightnessStateId(id);
						default:
							throw new Error(`Unknown state: ${state}`);
					}
			}
			break;
		default:
			throw new Error(`Unknown kind: ${kind}`);
	}
	throw new Error(`Unknown kind: ${kind}`);
}
