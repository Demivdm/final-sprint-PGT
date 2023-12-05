<script>
  import { onMount } from 'svelte';
  import { afterUpdate } from 'svelte';

  export let data;

  // Een array met de id's van de tags die header moeten worden
  const headerTagIds = [
    'clpl0vr7g16x10bvz5txuso4g',
    'clpl0rq3814cl0bvzawxbkmtm',
    'clpldj1qq2d5r0bw483xnvoyh',
    'clpldjitj6nx10bw03rhqup1v'
  ];

  // In deze variabele zitten de tags overeenkomen met een specifiek id.
  const headerFilterTags = data.tags.filter((tag) => headerTagIds.includes(tag.id));

  
</script>

<!-- Tags stonden binnen werkvormen in de query en daarom werkte het niet -->
<!-- Wanneer een werkvorm maar 1 tag had, werd tags niet meer als array gezien en kan er geen forEach doorheen lopen -->

<div class="tag">
  <ul>
    {#each headerFilterTags as tag}
      <li><h2>{tag.titel}<input type="checkbox" bind:this={filterCheckboxes} data-name={tag.titel}/></h2></li>
    {/each}
  </ul>
  <ul>
    {#each data.tags as tag}
      <!-- Dit if-statement checkt of de tag in de lijst met headerTagIds zit -->
      {#if !headerTagIds.includes(tag.id)}
        <!-- Als de tag er niet in zit, wordt hier de titel getoond -->
        <li>{tag.titel}<input type="checkbox" bind:this={filterCheckboxes} data-name={tag.titel} /></li>
      {/if}
    {/each}
  </ul>
</div>



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
