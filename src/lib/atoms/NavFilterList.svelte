<script>
	export let data;
	export let searchInput;
	export let searchWerkvormen;

	// verzameling met tags die een header zijn.
	const headerTagIds = [
		'clpl0vr7g16x10bvz5txuso4g',
		'clpl0rq3814cl0bvzawxbkmtm',
		'clpldj1qq2d5r0bw483xnvoyh',
		'clpldjitj6nx10bw03rhqup1v'
	];
	//   headfiltertags zijn alleen de tags die het id uit de array bevatten
	const headerFilterTags = data.tag.filter((tag) => headerTagIds.includes(tag.id));
	//   lege array om de geselcteerde tags in te stoppen
	let selectedTags = [];
	// alle werkenvormen zodat ze standaard aan kunnen staan
	let alleWerkvormen = data.workform;
	// alle werkvormen maar krijgen later een check of ze aangeklikt zijn of niet
	let displayedWerkvormen = alleWerkvormen;

	// functie voor de afhandeling van de checkbox
	function handleCheckboxChange(event) {
		// een variabele met daarin de gebinde waarden van de tags
		const { checked, value } = event.target;
		//   als de checkbox checked is dan wordt alleen de waarde van de geselecteerde tag gepusht
		if (checked) {
			selectedTags.push(value);
		} else {
			// als de checkbox niet gecheckt is dan wordt de waarde van de tag niet getoond
			selectedTags = selectedTags.filter((tag) => tag !== value);
		}
		//   dit is een functie die de staat van de werkvorm update

		updateDisplayedWerkvormen();
	}

	// de functie wordt hier aangemaakt
	function updateDisplayedWerkvormen() {
		// als de tag niks bevat dan worden alle werkvormen getoond
		if (selectedTags.length === 0) {
			displayedWerkvormen = alleWerkvormen;
		} else {
			// als de tag iets bevat dan wordt de functie filterWerkvormen aangeroepen
			displayedWerkvormen = filterWerkvormen();
		}
	}
	//   deze functie laat alleen de tags zien wanneer ze een tagtitel bevatten
	function isTagSelected(tagTitle) {
		return selectedTags.includes(tagTitle);
	}
	//   dit is de functie om de werkvormen te filteren
	function filterWerkvormen() {
		// wanneer de tags leeg zijn dan worden alle werkvormen getoond
		if (selectedTags.length === 0) {
			return alleWerkvormen;
		} else {
			// anders worden alle werkvormen gefilterd, er wordt gekeken of de werkvorm een tag heeft
			// de werkvorm met de geselecteerd tag titel wordt teruggestuurd
			return alleWerkvormen.filter((werkvorm) => {
				return werkvorm.tags.some((tag) => selectedTags.includes(tag.titel));
			});
		}
	}

	// dit is de functie om te laten zien hoeveel werkvormen met die tag er zijn
	function werkvormenCount(tagTitel) {
		// hier wordt gecheckt van de gefilterde werkvormen hoeveel er een tag titel bevatten.
		return filterWerkvormen().filter((werkvorm) =>
			werkvorm.tags.some((tag) => tag.titel === tagTitel)
		).length;
	}
</script>

<div class="tag" id="mega-menu">
	<form method="get" action="/">
		<fieldset>
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
			<input name="q" type="text" id="search-werkvormen" bind:this={searchInput} />
			<label for="search-werkvormen" hidden>Zoek een werkvorm</label>
		</fieldset>
	</form>
	<ul>
		{#each headerFilterTags as tag}
			<li>
				<h2>
					<!-- indiviudele tag titel als header tag -->
					{tag.titel}
					<!-- waarom staat het tussen gewone haakjes -->
					<!-- hier wordt het resultaat van de werkvorm count getoond -->
					({werkvormenCount(tag.titel)})
					<!-- onchange voor de afhandeling van de checkbox -->
					<!-- checked is een soort bind zodat er gezien wordt dat de tagtitel wordt geselecteerd -->
					<input
						type="checkbox"
						on:change={handleCheckboxChange}
						checked={isTagSelected(tag.titel)}
						value={tag.titel}
					/>
				</h2>
			</li>
		{/each}
	</ul>

	<ul>
		{#each data.tag as tag}
			{#if !headerTagIds.includes(tag.id)}
				<!-- als dat niet zo is worden de tags getoond -->
				<li>
					{tag.titel}
					({werkvormenCount(tag.titel)})
					<input
						type="checkbox"
						on:change={handleCheckboxChange}
						checked={isTagSelected(tag.titel)}
						value={tag.titel}
					/>
				</li>
			{/if}
		{/each}
	</ul>
</div>

<style>
	div {
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
		height: fit-content;
		margin: 1rem 0 0 0;
		padding: 0.5rem;
		width: 100%;
	}

	ul:first-of-type {
		display: flex;
		flex-direction: column;
	}
	ul > li {
		padding: 0.5em;
		margin-left: 1.5em;
	}

	ul input[type='checkbox'] {
		margin-left: 1em;
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
		flex-direction: row-reverse;
		gap: 0.5rem;
		border: unset;
		margin: auto;
	}

	form input,
	button {
		padding: 0.25rem 0.5rem;
		background-color: var(--color-hva-blue-secundary);
		border-radius: 0.25rem;
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
	}

	form button:focus {
		border: 2px solid var(--color-hva-pink);
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

	/*  */
	@media (min-width: 700px) {
		ul:first-of-type {
			display: flex;
			flex-direction: row;
		}
		ul {
			display: flex;
			width: 100%;
			overflow: auto;
		}
	}
</style>
