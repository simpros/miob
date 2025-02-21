<script module lang="ts">
	class Brightness {
		value = $state<number>(0);
		form = $state<HTMLFormElement>();

		constructor(value: number) {
			this.value = value;
		}
	}
</script>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Slider } from '$lib/components/ui/slider';
	import { Switch } from '$lib/components/ui/switch';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	let toggles = $state<HTMLFormElement[]>([]);
	let brightness = $state<Brightness[]>(data.lights.map((l) => new Brightness(l.brightness)));

	function toggleSwitch(i: number) {
		toggles[i].requestSubmit();
	}

	function updateBrightness(i: number) {
		brightness[i].form?.requestSubmit();
	}
</script>

<section class="space-y-4 @container">
	<h1 class="text-2xl font-bold">Beleuchtung</h1>
	<div class="grid gap-3 @3xl:grid-cols-3">
		{#each data.lights as light, i}
			<article class="card grid grid-cols-2">
				<div class="col-span-full flex items-center justify-between">
					<h2>{light.name}</h2>
					<form
						class="contents"
						method="POST"
						action="?/toggle-switch"
						use:enhance
						bind:this={toggles[i]}
					>
						<input type="hidden" name="device-id" value={light.id} />
						<input type="hidden" name="device-kind" value={light.kind} />
						<Switch name="state" checked={light.state} onclick={() => toggleSwitch(i)} />
					</form>
				</div>

				<div class="col-span-full p-3">
					<form
						class="contents"
						method="POST"
						action="?/update-brightness"
						use:enhance
						bind:this={brightness[i].form}
					>
						{light.brightness}
						<input type="hidden" name="device-id" value={light.id} />
						<input type="hidden" name="brightness" bind:value={brightness[i].value} />
						<Slider
							type="single"
							min={0}
							max={100}
							step={1}
							bind:value={brightness[i].value}
							onValueCommit={(v) => updateBrightness(i)}
						/>
					</form>
				</div>
			</article>
		{:else}
			<p>Keine Inhalte vorhanden.</p>
		{/each}
	</div>
</section>
