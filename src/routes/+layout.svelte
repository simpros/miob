<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import AppSidebar from './app-sidebar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>MIOB</title>
</svelte:head>

<ModeWatcher />
<Sidebar.Provider>
	<AppSidebar />
	<main class="w-full px-2">
		<Sidebar.Trigger />
		{@render children()}
	</main>
</Sidebar.Provider>
