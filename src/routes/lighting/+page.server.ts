import type { DB } from '$lib/server/db/db';
import type { MiobEntity } from '$lib/server/db/miob-entity';
import { getAllLights } from '$lib/server/iob/lights/get-all-lights';
import { getLightStates } from '$lib/server/iob/lights/get-light-states';
import { toggleLight, updateBrightness } from '$lib/server/iob/lights/light-actions';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { db, iob } }) => {
	const miobLights = await getAllLights(db);
	const lights = await getLightStates(miobLights, iob);

	return { lights };
}) satisfies PageServerLoad;

async function getMiobEntityFromRequest(db: DB, request: Request): Promise<MiobEntity>;
async function getMiobEntityFromRequest(db: DB, formData: FormData): Promise<MiobEntity>;
async function getMiobEntityFromRequest(db: DB, input: Request | FormData): Promise<MiobEntity> {
	let formData: FormData;

	if (input instanceof Request) {
		formData = await input.formData();
	} else {
		formData = input;
	}

	const requestedId = formData.get('id');
	if (typeof requestedId !== 'string') throw new Error('Invalid id');
	const parsedId = parseInt(requestedId);
	if (isNaN(parsedId)) throw new Error('Invalid id');
	const entity = await db.query.miobEntities.findFirst({
		where({ id }, { eq }) {
			return eq(id, parsedId);
		}
	});
	if (!entity) throw new Error(`Entity with id "${parsedId}" not found`);
	return entity;
}

export const actions: Actions = {
	'toggle-switch': async ({ locals: { iob, db }, request }) => {
		const entity = await getMiobEntityFromRequest(db, request);

		await toggleLight(iob, entity);
	},
	'update-brightness': async ({ locals: { iob, db }, request }) => {
		const formData = await request.formData();
		const entity = await getMiobEntityFromRequest(db, formData);
		const brightness = formData.get('brightness');
		if (typeof brightness !== 'string') throw new Error('Invalid brightness');
		await updateBrightness(iob, entity, brightness);
	}
};
