<script>
	export let searchInput;
	export let data;
  export let workform;


  // hier definieer ik wat er in filteredworkforms zit
  let filteredWorkforms = data.workform;
  // een variabel om de aangeklikte tags in op te slaan
  let selectedTag = '';

  // hier maak ik een globaal variabel aan, waarin ik workform filter
// er wordt gecheckt of workform 
  $: filteredWorkforms = workform && workform.filter(workformItem => {
    return selectedTag == '' || (workformItem.tags && workformItem.tags.some(tag => tag.title === selectedTag));
  });

  // functie om de actieve tag te laten zien
  // standaard staat de button alltags aan
  let activeTag = 'allTags'

  // dit is een functie die defineerd dat de active tag 
  // in de html wordt verteld dat de active tag de opgehaalde tag is. 
  function currentTag(tag) {
        activeTag = tag;
    }
  // console.log(filteredWorkforms)
  // console.log(selectedTag)

  </script>



  <div class="tag" id="mega-menu">
	  <form method="get" action="/">
	    <fieldset>
        <input name="q" type="text" id="search-werkvormen" bind:this={searchInput} />
		    <label for="search-werkvormen" hidden>Zoek een werkvorm</label>
		    <button bind:this={searchInput} type="submit">
		      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
		        zoeken
		    </button>
      </fieldset>
	  </form>
    <section class="header-tags">
      <button class:selected-tag={activeTag === 'allTags'} on:click={() => currentTag('allTags')}>Alle tags</button>
      {#each data.tag as tag}
        {#if [ 3, 4, 5, 6].includes(tag.id)}
        <button class:selected-tag={activeTag === tag.title} style="border: 2px solid {tag.color};" on:click={() => currentTag(tag.title)}>
          {tag.title}
        </button>
        {/if}
      {/each}
    </section>
    <section>
      {#each data.tag as tag}
      <button class:selected-tag={activeTag === tag.title} style="border: 2px solid {tag.color};" on:click={() => currentTag(tag.title)}>
        {tag.title}
      </button>
      {/each}
    </section>
  </div>




  <style>
    .header-tags button{
      font-size: 1rem;

    }
    section button{
      color: var(--color-white);
      margin: .5rem .5rem;
    }
    .tag button:focus {
		outline: solid 2px var(--color-hva-pink);
    
	}
  
	div {
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
		height: fit-content;
		margin: 0 1rem;
		padding: 0.5rem;
		width: calc(100% - 2rem);
    margin-top: 1rem;
	}

	section {
		display: flex;
		flex-direction: row;
	}
	

	/* ul input[type='checkbox'] {
		margin-left: 1em;
	} */

  /* Zoekbalk */
  form {
    width: 100%;
    height: auto;
    display: block;
    padding: 1rem 2rem;
  }

  form fieldset {
    width: fit-content;
    display: flex;
    gap: 0.5rem;
    border: unset;
    margin: auto;
  }

  form input , button {
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
  .selected-tag{
        background-color: var(--color-hva-pink);
    }

		
</style>