export function generateShellySwitchStateFilter(id: string) {
	return `${id}.lights.Switch`;
}
export function generateZigbeeSwitchStateFilter(id: string) {
	return `${id}.state`;
}
export function generateShellyBrightnessStateFilter(id: string) {
	return `${id}.lights.brightness`;
}
export function generateZigbeeBrightnessStateFilter(id: string) {
	return `${id}.brightness`;
}

export function generateIdentifierForState(id: string, type: 'state' | 'brightness') {
	const kind = id.split('.')[0];

	switch (kind) {
		case 'shelly':
			return type === 'state'
				? generateShellySwitchStateFilter(id)
				: generateShellyBrightnessStateFilter(id);
		case 'zigbee':
			return type === 'state'
				? generateZigbeeSwitchStateFilter(id)
				: generateZigbeeBrightnessStateFilter(id);
		default:
			throw new Error(`Unknown kind: ${kind}`);
	}
}
