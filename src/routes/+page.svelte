<script>

  import Nav from "$lib/organisms/nav.svelte"    
  import { page } from '$app/stores'

	import LoginOutButton from '../lib/organisms/LoginOutButton.svelte';
	import WerkvormCard from "../lib/organisms/WerkvormCard.svelte";
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
    // console.log(data)

</script>

<main>
	<Nav {data}/>
	<NavFilterList {data}/>


    <!-- <Nav {data}></Nav> -->

    <!-- <LoginOutButton /> -->

    <section class="werkvormen">
        {#each data.werkvormen as werkvorm}
            <WerkvormCard {werkvorm}/>
        {/each}
    </section>

</main>

<style>
	

    
  
    .werkvormen {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        margin: 2rem 0;}

    @media (min-width: 700px){
        main {
            padding: 0 2rem;
        }
    }
</style>

