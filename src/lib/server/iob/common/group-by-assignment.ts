import type { MiobEntity } from '$lib/server/db/miob-entity';

export function groupByAssignment(entities: MiobEntity[], levels: number) {
	const grouped = new Map();
	for (const entity of entities) {
		const assignment = entity.assignedTo;
		if (!grouped.has(assignment)) {
			grouped.set(assignment, []);
		}
		grouped.get(assignment).push(entity);
	}
	return grouped;
}
