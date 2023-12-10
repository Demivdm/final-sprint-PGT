<script>
  import { onMount } from "svelte";

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

// array om de tags in te gooien zodat ze terug kunnen komen
// deze is leeg omdat de :bind ervoor zorgt dat hier de objecten inkomen die gebind zijn (zoals tags)
// misschien dat dit niet werkt doordat de tags nu als objecten worden gezien en niet als array
// let selectedTags = [];

// hiermee haal ik alle tags op
// map zorgt ervoor dat de array niet naar een object wordt omgezet
// let selectedTags = data.tags.map(tag => tag.titel);

// nu maak ik een nieuwe set aan voor de tags. 
let selectedTags = new Set(data.tags.map(tag => tag.titel));



// Function to handle checkbox changes
function handleCheckboxChange(event) {
    const { checked, value } = event.target;

    if (checked) {
      selectedTags.add(value);
    } else {
      selectedTags.delete(value);
    }

    // Hier verander ik de set weer terug in een array
    selectedTags = new Set(selectedTags);
  }

// functie om de werkvormen te filteren
function filterWerkvormen() {
  // length is voor arrays
  // size is voor sets
  if (selectedTags.size === 0) {
    return data.werkvormen; // als er geen tags geselecteerd zijn komen alle werkvormen terug
  } else {
    // de gefilterde werkvormen worden teruggegeven wanneer ze een tag.titel bevatten
    return data.werkvormen.filter(werkvorm => {
      return werkvorm.tags.some(tag => selectedTags.has(tag.titel));
    });
  }
}
// komt het omdat het een set is dat er niet heen en weer kan worden gegaan binnen de set

function filterDuplicateWerkvormen() {
    const uniqueTitles = new Set();
    const result = [];

    filterWerkvormen().forEach(filteredWerkvorm => {
      // Check if the title is already encountered
      if (!uniqueTitles.has(filteredWerkvorm.title)) {
        // Add the title to the set to mark it as encountered
        uniqueTitles.add(filteredWerkvorm.title);
        
        // Collect unique tag.titel values for the current werkvorm
        const uniqueTags = new Set();
        filteredWerkvorm.tags.forEach(tag => uniqueTags.add(tag.titel));
        
        // Create a new object with the unique werkvorm title and tags
        const uniqueWerkvorm = {
          title: filteredWerkvorm.title,
          tags: Array.from(uniqueTags).map(tagTitel => ({ titel: tagTitel }))
        };

        // Add the uniqueWerkvorm to the result
        result.push(uniqueWerkvorm);
      }
    });

    return result;
  }
console.log(filterDuplicateWerkvormen())
  
</script>

<!-- Tags stonden binnen werkvormen in de query en daarom werkte het niet -->
<!-- Wanneer een werkvorm maar 1 tag had, werd tags niet meer als array gezien en kan er geen forEach doorheen lopen -->

<div class="tags">
  <ul>
    {#each headerFilterTags as tag}
      <li> <h2>{tag.titel} <input type="checkbox" on:change={handleCheckboxChange} checked={selectedTags.has(tag.titel)} value={tag.titel} /></h2>
      </li>
    {/each}
  </ul>
  <ul>
    {#each data.tags as tag}
      <!-- Dit if-statement checkt of de tag in de lijst met headerTagIds zit -->
      {#if !headerTagIds.includes(tag.id)}
        <!-- Als de tag er niet in zit, wordt hier de titel getoond -->
        <li>{tag.titel} <input type="checkbox" on:change={handleCheckboxChange} checked={selectedTags.has(tag.titel)} value={tag.titel} />
        </li>
      {/if}
    {/each}
    
  </ul>
 
</div>




  <ul class="werkvormen">
    {#each filterDuplicateWerkvormen() as filteredWerkvorm}
      <!-- Check if any tag in filteredWerkvorm.tags is in selectedTags -->
      {#if filteredWerkvorm.tags.some(tag => selectedTags.has(tag.titel))}
        <h2>{filteredWerkvorm.title}</h2>
        {#each filteredWerkvorm.tags as werkvormTag}
          <!-- Display all tags for the current werkvorm -->
          <p>{werkvormTag.titel}</p>
        {/each}
      {/if}
    {/each}
  </ul>


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