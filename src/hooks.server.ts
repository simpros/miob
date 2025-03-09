import { env } from '$env/dynamic/private';
import { db, enableDefaultPragmas, migrate } from '$lib/server/db/db';
import { Api } from '$lib/server/iob/client/Api';
import { syncEntities } from '$lib/server/iob/common/sync-entities';
import { redirect, type Handle, type ServerInit } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const init: ServerInit = async () => {
	if (!env.IOBROKER_URL) throw new Error('IOBROKER_URL is not defined');
	await migrate();
	await enableDefaultPragmas();
	await syncEntities(new Api({ baseUrl: env.IOBROKER_URL }), db);
};

const initializeIob: Handle = async ({ event, resolve }) => {
	event.locals.iob = new Api({ baseUrl: env.IOBROKER_URL, customFetch: event.fetch });
	return resolve(event);
};

const initializeDb: Handle = async ({ event, resolve }) => {
	event.locals.db = db;
	return resolve(event);
};

const reroute: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		redirect(307, '/lighting');
	}
	return resolve(event);
};

export const handle = sequence(initializeIob, initializeDb, reroute);
