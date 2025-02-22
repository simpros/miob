<script lang="ts">
	import { enhance } from '$app/forms';
	import { Slider } from '$lib/components/ui/slider';
	import { Switch } from '$lib/components/ui/switch';
	import type { PageData } from './$types';
	import { createDevice, Dimmer } from './device.svelte';

	const { data }: { data: PageData } = $props();
	let toggles = $state<HTMLFormElement[]>([]);
	let devices = $state(data.lights.map((l) => createDevice(l)));

	function toggleSwitch(i: number) {
		toggles[i].requestSubmit();
	}

	function updateBrightness(i: number) {
		devices[i].form?.requestSubmit();
	}
</script>

<section class="space-y-4 @container">
	<h1 class="text-2xl font-bold">Beleuchtung</h1>
	<div class="grid gap-3 @3xl:grid-cols-3">
		{#each devices as device, i}
			<article class="card grid grid-cols-2">
				<div class="col-span-full flex items-center justify-between">
					<h2>{device.entity.name}</h2>
					<form
						class="contents"
						method="POST"
						action="?/toggle-switch"
						use:enhance
						bind:this={toggles[i]}
					>
						<input type="hidden" name="id" value={device.entity.id} />
						<Switch name="state" checked={device.entity.state} onclick={() => toggleSwitch(i)} />
					</form>
				</div>
				{#if device instanceof Dimmer}
					<div class="col-span-full p-3">
						<form
							class="contents"
							method="POST"
							action="?/update-brightness"
							use:enhance
							bind:this={devices[i].form}
						>
							<input type="hidden" name="id" value={device.entity.id} />
							<input type="hidden" name="brightness" bind:value={device.brightness} />
							<Slider
								type="single"
								min={0}
								max={100}
								step={1}
								bind:value={device.brightness}
								onValueCommit={() => updateBrightness(i)}
							/>
						</form>
					</div>
				{/if}
			</article>
		{:else}
			<p>Keine Inhalte vorhanden.</p>
		{/each}
	</div>
</section>
