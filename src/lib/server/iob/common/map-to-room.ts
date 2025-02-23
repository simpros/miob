import { env } from '$env/dynamic/private';
import type { CreateRoom } from '$lib/server/db/room';
import type { Object } from '../client/Api';

export function mapToRoom(iobId: string, obj: Object): CreateRoom | null {
	if (!obj.common) return null;
	if (!('name' in obj.common)) return null;

	const name = obj.common.name as string | Record<string, string>;
	const lng = env.LNG;

	return {
		iobId,
		name: typeof name === 'string' ? name : name[lng]
	};
}
