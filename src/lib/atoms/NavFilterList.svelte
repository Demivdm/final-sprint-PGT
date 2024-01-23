<script>
	export let searchInput;
	export let data;
	import { setTag, selectedTag } from '../Utils/tagStore';

	let allTags = data.tag;
	let isActive = false;

	// functie om de geklikte tag mee af te handelen
	function handleTagClick(tagID) {
		setTag(tagID);
		isActive = !isActive;
	}

	console.log(allTags);
</script>

<div class="tag" id="mega-menu">
	<form method="get" action="/">
		<fieldset>
			<input name="q" type="text" id="search-werkvormen" bind:this={searchInput} />
			<label for="search-werkvormen" hidden>Zoek een werkvorm</label>
			<button bind:this={searchInput} type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-search"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
					/><path d="M21 21l-6 -6" /></svg
				>
				zoeken
			</button>
		</fieldset>
	</form>
	<section class="header-tags">
		<button
			class:selected-tag={selectedTag === data.tag}
			class:active-tag={$selectedTag === 'allTags'}
			on:click={() => selectedTag.set('allTags')}>Alle tags</button
		>
		{#each data.tag as tag}
			<button
				class:selected-tag={selectedTag === tag.title}
				class:active-tag={$selectedTag === tag.id}
				style="border: 2px solid {tag.color};"
				on:click={() => handleTagClick(tag.id)}
			>
				{tag.title}
			</button>
		{/each}
	</section>
	<!-- secondaire rij met tags, uitgecomment wegens feedback -->
	<!-- <section>
		{#each data.tag as tag}
			<button
				class:selected-tag={selectedTag === tag.title}
				style="border: 2px solid {tag.color};"
				on:click={() => handleTagClick(tag.id)}
			>
				{tag.title}
			</button>
		{/each}
	</section> -->
</div>

<style>
	div {
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
		height: fit-content;

		padding: 0.5rem;
		width: 100%;

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background-color: var(--color-hva-blue-secundary-enhanced);
		}
	}

	/* Zoekbalk */
	form {
		width: 100%;
		height: auto;
		display: block;
		padding: 1rem;
	}

	form fieldset {
		width: fit-content;
		display: flex;
		gap: 0.5rem;
		border: unset;
		margin: auto;
	}

	form input,
	form button {
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		background-color: var(--color-hva-blue-secundary);

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background-color: var(--color-hva-blue-secundary-enhanced);
		}
	}

	form input {
		width: 50vw;
		height: auto;
		border: 2px solid var(--color-white);
		background-color: #f5f5f512;
		color: var(--color-white);
	}

	form button {
		color: var(--color-white);
		background-color: #593bff;
		font-size: 1rem;
		border: unset;
		position: relative;
		transition: 0.3s ease-in-out;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	form button:hover {
		background-color: var(--color-hva-pink);

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			background: var(--color-hva-pink-enhanced);
		}
	}

	form button:focus {
		border: 2px solid var(--color-hva-pink);

		/* Enhanced kleur binnen @supports */
		@supports (--css: variables) {
			border: 2px solid var(--color-hva-pink-enhanced);
		}
	}

	form button::before {
		background-image: url('https://img.freepik.com/free-vector/seamless-grainy-texture-background_1409-2115.jpg');
		background-size: 180%;
		border-radius: 0.25rem;
		content: '';
		height: 100%;
		left: 0;
		mix-blend-mode: color-burn;
		position: absolute;
		top: 0;
		width: 100%;
	}

	/* FILTER */
	.header-tags {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.header-tags button {
		font-size: 1rem;
		background-color: transparent;
		padding: 0.3rem 0.5rem 0.3rem 0.5rem;
	}
	.tag button:focus-visible {
		outline: solid 2px var(--color-hva-pink);
	}

	.header-tags .active-tag {
		background-color: var(--color-hva-pink);
	}

	section {
		display: flex;
		flex-direction: row;
	}

	section button {
		color: var(--color-white);
		margin: 0.5rem 0.5rem;
	}
</style>
