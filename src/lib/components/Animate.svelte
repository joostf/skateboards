<script>
	import { onMount, tick } from 'svelte'

	let play = false

	onMount(() => {
		play = true
	})

	async function replay() {
		play = false
		await tick()
		play = true
	}
</script>

{#if play}
	<slot />
{/if}

<button on:click={replay}>
	replay
</button>

<style lang="scss">
	button {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
        z-index:1000
	}
</style>
