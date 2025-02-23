<script lang="ts">
	import { enhance } from '$app/forms';
	import { Slider } from '$lib/components/ui/slider';
	import { Switch } from '$lib/components/ui/switch';
	import type { PageData } from './$types';
	import { createDevice, Device, Dimmer } from './device.svelte';

	const { data }: { data: PageData } = $props();
	let devices = $state(mapLightsToDevices(data.lights));

	function mapLightsToDevices(lights: PageData['lights']) {
		return Object.values(
			lights
				.map((l) => createDevice(l))
				.reduce(
					(acc, d) => {
						const arr = acc[d.entity.roomId];
						if (!arr) {
							acc[d.entity.roomId] = { name: d.entity.room.name, devices: [d] };
						} else {
							arr.devices.push(d);
						}
						return acc;
					},
					{} as Record<string, { name: string; devices: Device[] }>
				)
		).sort((a, b) => a.name.localeCompare(b.name));
	}
</script>

<section class="space-y-4 @container">
	<h1 class="text-2xl font-bold">Beleuchtung</h1>
	<div class="grid gap-3 @3xl:grid-cols-3">
		{#each devices as group}
			<h2 class="col-span-full text-xl font-bold">{group.name}</h2>
			{#each group.devices as device}
				<article class="card grid grid-cols-2">
					<div class="col-span-full flex items-center justify-between">
						<h2>{device.entity.name}</h2>
						<form
							class="contents"
							method="POST"
							action="?/toggle-switch"
							use:enhance
							bind:this={device.stateForm}
						>
							<input type="hidden" name="id" value={device.entity.id} />
							<Switch
								name="state"
								checked={device.entity.state}
								onclick={() => device.stateForm?.requestSubmit()}
							/>
						</form>
					</div>
					{#if device instanceof Dimmer}
						<div class="col-span-full p-3">
							<form
								class="contents"
								method="POST"
								action="?/update-brightness"
								use:enhance
								bind:this={device.brightnessForm}
							>
								<input type="hidden" name="id" value={device.entity.id} />
								<input type="hidden" name="brightness" bind:value={device.brightness} />
								<Slider
									type="single"
									min={0}
									max={100}
									step={1}
									bind:value={device.brightness}
									onValueCommit={() => device.brightnessForm?.requestSubmit()}
								/>
							</form>
						</div>
					{/if}
				</article>
			{:else}
				<p>Keine Inhalte vorhanden.</p>
			{/each}
		{:else}
			<p>Keine Inhalte vorhanden.</p>
		{/each}
	</div>
</section>
