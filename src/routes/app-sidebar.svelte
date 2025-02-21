<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import LampCeiling from 'lucide-svelte/icons/lamp-ceiling';
	import RefreshCcw from 'lucide-svelte/icons/refresh-ccw';

	const items = [{ title: 'Beleuchtung', url: '/lighting', icon: LampCeiling }];

	async function resync() {
		await fetch('/api/resync', { method: 'POST' });
	}
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Kategorien</Sidebar.GroupLabel>
			<Sidebar.Menu>
				{#each items as item (item.title)}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<item.icon />
									<span>{item.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<Button variant="outline" size="icon" onclick={resync}><RefreshCcw /></Button>
	</Sidebar.Footer>
</Sidebar.Root>
