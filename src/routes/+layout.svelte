<script>
	import Header from '$lib/organisms/Header.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import { page } from '$app/stores';
</script>

<Header path={$page.url.pathname} />

<slot />

<Footer />
