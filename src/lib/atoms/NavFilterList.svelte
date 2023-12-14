<script>
	export let data;
	// een array met de id's van de tags die header moeten worden
	const headerTagIds = [
		'clpl0vr7g16x10bvz5txuso4g',
		'clpl0rq3814cl0bvzawxbkmtm',
		'clpldj1qq2d5r0bw483xnvoyh',
		'clpldjitj6nx10bw03rhqup1v'
	];

	// in dit variabel zitten de tags overeenkomen met een specifiek id.
	// the filter() is een methode
	// de => opent een functie
	// includes() is een methode
	const headerFilterTags = data.tags.filter((tag) => headerTagIds.includes(tag.id));

	console.log(data);
	console.log(data.tags);
</script>

<!-- tags stond binnen werkvormen in de query en daarom werkte het niet -->
<!-- wanneer een werkvorm maar 1 tag had werd tags niet meer als array gezien en kan er geen for each doorheen loopen -->

<div class="tag" id="mega-menu">
  <form method="GET" action="/">
    <button type="submit">zoeken</button>
    <input name="searchbar" type="text" />
    <label for="searchbar" hidden>Zoek een werkvorm</label>
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

<style>
	div {
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
		height: fit-content;
		margin: 0 1rem;
		padding: 0.5rem;
		width: calc(100% - 2rem);
    margin-top: 1rem;
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
    height: 2rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: row-reverse;
  }

  form input , button {
    padding: 0.25rem 0.5rem;
    background-color: var(--color-hva-blue-secundary);
    border-radius: 0.25rem;
  }

  form input {
    width: auto;
    height: auto;
    border: 2px solid var(--color-white);
    color: var(--color-white);
  }

  form button {
    color: var(--color-white);
    background-color: #593bff;
    font-size: 1rem;
    border: unset;
    position: relative;
    transition: 0.3s ease-in-out;
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
