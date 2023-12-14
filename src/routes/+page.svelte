<script>
	import { onMount } from 'svelte';
    import Nav from "$lib/organisms/nav.svelte"    
    import { page } from '$app/stores'
  
      import NavFilterList from "../lib/atoms/NavFilterList.svelte";
  
  
      export let data;
  
      let loading = false;
  
      const handleLogout = () => {
          loading = true;
          return async ({ result }) => {
  
              await invalidate('supabase:auth')
              await applyAction(result)
              loading = false
          }
      }

      onMount(async () => {
		document.documentElement.classList.add("javascriptEnabled");

		const filterSearchButtons = document.querySelectorAll('#filterSearch')

        filterSearchButtons.forEach(filterSearchButton => {
            const filterMegaMenu = document.querySelector('#mega-menu')
		    filterSearchButton.addEventListener('click', () => {
			    filterMegaMenu.classList.toggle('visible')
		    })
        });
	});
  
  </script>


<main>

    <Nav {data}></Nav>
    <NavFilterList {data}/>

</main>

<style>
    main {
        display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
    }

    @media (min-width: 700px){
        main {
            padding: 0 2rem;
        }
    }
</style>