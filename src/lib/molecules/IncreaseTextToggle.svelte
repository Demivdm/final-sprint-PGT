<script>
	import { onMount } from 'svelte';
    import AccessilbleTextIcon from '$lib/atoms/AccessilbleTextIcon.svelte';

    onMount(async () => {
        // Vergroot de tekst op de site
        const textIncrease = document.querySelector('#textIncrease')

        textIncrease.addEventListener('click', () => {
            document.documentElement.classList.toggle('text-large')
        })
    })
</script>

<button id="textIncrease">
    <figure>
        <AccessilbleTextIcon />
        <figcaption>vergroot tekst</figcaption>
    </figure>

</button>

<style>
    button {
        position: fixed;
        bottom: 2rem;
        right: 2.5rem;
        padding: 0.25rem 0.5rem;
        background-color: var(--color-hva-pink-enhanced);
        border: unset;
        color: var(--color-default);
        box-shadow: 0.5rem 0.5rem #1e1649;
        transition: 0.3s ease-in-out;
    }

    button figure {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        text-transform: capitalize;
    }

    /* Interactive states */
    button:hover {
        background-color: var(--color-hva-blue-secundary-enhanced);
        box-shadow: 0px 0px #1e1649;
        transition: 0.3s ease-in-out;
    }
</style>