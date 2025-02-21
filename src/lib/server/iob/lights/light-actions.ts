import type { Api } from '../client/Api';
import { generateIdentifierForState } from './light-utils';

export function updateBrightness(api: Api<unknown>, id: string, brightness: string) {
	const switchId = encodeURIComponent(generateIdentifierForState(id, 'brightness'));
	return api.command.setStateList({ id: switchId, state: brightness });
}

export function toggleLight(api: Api<unknown>, id: string) {
	const switchId = encodeURIComponent(generateIdentifierForState(id, 'state'));

	return api.state.toggleState(switchId);
}
