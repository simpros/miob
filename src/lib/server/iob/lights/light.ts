export type Light = {
	id: string;
	name: string;
	state: boolean;
	brightness?: number;
	readonly type: 'light';
};
