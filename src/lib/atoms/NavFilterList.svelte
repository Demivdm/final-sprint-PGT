<script>
	export let data;
  
	const headerTagIds = [
	  'clpl0vr7g16x10bvz5txuso4g',
	  'clpl0rq3814cl0bvzawxbkmtm',
	  'clpldj1qq2d5r0bw483xnvoyh',
	  'clpldjitj6nx10bw03rhqup1v'
	];
  
	const headerFilterTags = data.tags.filter((tag) => headerTagIds.includes(tag.id));
  
	let selectedTags = [];
	let alleWerkvormen = data.werkvormen;
	let displayedWerkvormen = alleWerkvormen;
	
  
	function handleCheckboxChange(event) {
	  const { checked, value } = event.target;
  
	  if (checked) {
		selectedTags.push(value);
	  } else {
		selectedTags = selectedTags.filter(tag => tag !== value);
	  }
  
	  updateDisplayedWerkvormen();
	}
  
	function updateDisplayedWerkvormen() {
	  if (selectedTags.length === 0) {
		displayedWerkvormen = alleWerkvormen;
	  } else {
		displayedWerkvormen = filterWerkvormen();
	  }
	}
  
	function isTagSelected(tagTitle) {
	  return selectedTags.includes(tagTitle);
	}
  
	function filterWerkvormen() {
	  if (selectedTags.length === 0) {
		return alleWerkvormen;
	  } else {
		return alleWerkvormen.filter(werkvorm => {
		  return werkvorm.tags.some(tag => selectedTags.includes(tag.titel));
		});
	  }
	}
  </script>
  
  <div class="tags">
	<ul>
	  {#each headerFilterTags as tag}
		<li>
		  <h2>
			{tag.titel}
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
		{#if !headerTagIds.includes(tag.id)}
		  <li>
			{tag.titel}
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

  <div class="tag" id="mega-menu">
	<form method="GET" action="/">
	  <fieldset>
		<button type="submit">
		  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
		  zoeken
		</button>
		<input name="searchbar" type="text" />
		<label for="searchbar" hidden>Zoek een werkvorm</label>
	  </fieldset>
	</form>
	  <ul>
		  {#each headerFilterTags as tag}
			  <li><h2>{tag.titel}<input type="checkbox" /></h2></li>
		  {/each}
	  </ul>
	  <ul>
		  {#each data.tags as tag}
			  <!-- dit if statement checkt of de tag in de lijst met headerTagIds zit -->
			  {#if !headerTagIds.includes(tag.id)}
				  <!-- als de tag er niet inzit dan wordt hier de titel getoond -->
				  <li>{tag.titel}<input type="checkbox" /></li>
			  {/if}
		  {/each}
	  </ul>
  </div>


  <!-- de onderstaande code is de koppeling met de werkvormen -->
  <!-- dit ga ik later mergen met de werkvormen -->
  
  
  <!-- {#each displayedWerkvormen as filteredWerkvorm}
	{#if displayedWerkvormen.length > 0}
	  <h2>{filteredWerkvorm.title}</h2>
	  {#each filteredWerkvorm.tags as werkvormTag}
		<p>{werkvormTag.titel}</p>
	  {/each}
	{/if}
  {/each} -->
  
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
