import { getAllLights } from '$lib/server/iob/lights/get-all-lights';
import { getLightStates } from '$lib/server/iob/lights/get-light-states';
import { toggleLight, updateBrightness } from '$lib/server/iob/lights/light-actions';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { db, iob } }) => {
	const miobLights = await getAllLights(db);
	const lights = await getLightStates(miobLights, iob);

	return { lights };
}) satisfies PageServerLoad;

export const actions: Actions = {
	'toggle-switch': async ({ locals: { iob }, request }) => {
		const formData = await request.formData();
		const id = formData.get('device-id');
		if (typeof id !== 'string') throw new Error('Invalid id');
		await toggleLight(iob, id);
	},
	'update-brightness': async ({ locals: { iob }, request }) => {
		const formData = await request.formData();
		const id = formData.get('device-id');
		const brightness = formData.get('brightness');
		if (typeof id !== 'string' || typeof brightness !== 'string')
			throw new Error('Invalid id or brightness');
		await updateBrightness(iob, id, brightness);
	}
};
