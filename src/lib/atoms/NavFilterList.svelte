<script>
	export let data;
	// verzameling met tags die een header zijn.  
	const headerTagIds = [
	  'clpl0vr7g16x10bvz5txuso4g',
	  'clpl0rq3814cl0bvzawxbkmtm',
	  'clpldj1qq2d5r0bw483xnvoyh',
	  'clpldjitj6nx10bw03rhqup1v'
	];
//   headfiltertags zijn alleen de tags die het id uit de array bevatten
	const headerFilterTags = data.tags.filter((tag) => headerTagIds.includes(tag.id));
//   lege array om de geselcteerde tags in te stoppen
	let selectedTags = [];
// alle werkenvormen zodat ze standaard aan kunnen staan
	let alleWerkvormen = data.werkvormen;
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
		selectedTags = selectedTags.filter(tag => tag !== value);
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
		return alleWerkvormen.filter(werkvorm => {
		  return werkvorm.tags.some(tag => selectedTags.includes(tag.titel));
		});
	  }
	}
	// dit is de functie om te laten zien hoeveel werkvormen met die tag er zijn
	 function werkvormenCount(tagTitel) {
	// hier wordt gecheckt van de gefilterde werkvormen hoeveel er een tag titel bevatten.
    return filterWerkvormen().filter(werkvorm => werkvorm.tags.some(tag => tag.titel === tagTitel)).length;
  }
  </script>
  
  <div class="tags">
	<ul>
		<!-- loop voor de header tags -->
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
	  {#each data.tags as tag}
	  <!-- if loop die checkt of de tags een id hebben uit het array -->
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


  <!-- de onderstaande code is de koppeling met de werkvormen -->
  <!-- dit ga ik later mergen met de werkvormen -->
  
  
  {#each displayedWerkvormen as filteredWerkvorm}
	{#if displayedWerkvormen.length > 0}
	  <h2>{filteredWerkvorm.title}</h2>
	  {#each filteredWerkvorm.tags as werkvormTag}
		<p>{werkvormTag.titel}</p>
	  {/each}
	{/if}
  {/each}
  
  <style>
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
	@media (min-width: 700px) {
	  ul:first-of-type {
		display: flex;
		flex-direction: row;
	  }
	  ul {
		display: flex;
		width: 75vw;
	  }
	}
  </style>