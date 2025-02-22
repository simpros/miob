import type { PageData } from './$types';

type LightEntity = PageData['lights'][number];

abstract class Device {
	form = $state<HTMLFormElement>();

	entity: LightEntity;
	state = $state<boolean>(false);

	constructor(entity: LightEntity, state: boolean) {
		this.entity = entity;
		this.state = state;
	}
}

export function createDevice(props: LightEntity) {
	if (props.type === 'dimmer') return new Dimmer(props, props.state, props.brightness);
	return new Switch(props, props.state);
}

export class Switch extends Device {
	constructor(entity: LightEntity, state: boolean) {
		super(entity, state);
	}
}

export class Dimmer extends Device {
	brightness = $state<number>(0);

	constructor(entity: LightEntity, state: boolean, brightness: number) {
		super(entity, state);
		this.brightness = brightness;
	}
}
