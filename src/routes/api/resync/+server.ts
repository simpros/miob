import { syncEntities } from '$lib/server/iob/common/sync-entities';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals: { db, iob } }) => {
	await syncEntities(iob, db);
	return json({ success: true });
};
