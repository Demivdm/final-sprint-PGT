<script>
    import Nav from "$lib/organisms/nav.svelte"    
    import { page } from '$app/stores'
	import LoginOutButton from '../lib/organisms/LoginOutButton.svelte';

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
    console.log(data)
</script>


<main>

    <Nav {data}></Nav>

    <LoginOutButton />

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