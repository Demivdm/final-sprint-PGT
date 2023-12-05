<script>


    import Nav from "$lib/organisms/nav.svelte"
    import { page } from '$app/stores'
	import LoginOutButton from '../lib/organisms/LoginOutButton.svelte';
	import WerkvormCard from "../lib/organisms/WerkvormCard.svelte";

    export let data

    let loading = false

    const handleLogout = () => {
		loading = true
		return async ({ result }) => {
			await invalidate('supabase:auth')
			await applyAction(result)
			loading = false
		}
	}


    // console.log(data)
</script>


<main>

    <!-- <Nav {data}></Nav> -->

    <!-- <LoginOutButton /> -->

    <section class="werkvormen">
        {#each data.werkvormen as werkvorm}
            <WerkvormCard {werkvorm}/>
        {/each}
    </section>


</main>

<style>
    main {
        display: flex;
		flex-direction: column;
		padding: 0 2rem;
		width: 100%;
    }

    .werkvormen {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        margin: 2rem 0;
    }
</style>