<script>
	import { onMount } from 'svelte';
    import AccessilbleTextIcon from '$lib/atoms/AccessilbleTextIcon.svelte';

    onMount(async () => {
    // Vergroot de tekst op de site
    const textIncrease = document.querySelector('#textIncrease')

    // Event bij vergrootknop
    textIncrease.addEventListener('click', () => {
        document.documentElement.classList.toggle('text-large')
    })

 // Event bij toetscombinatie command + shift + i
 document.addEventListener('keydown', function(event) {
        if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === 'i') {
            document.documentElement.classList.toggle('text-large')

            event.preventDefault();
        }
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
        bottom: 16px;
        right: 16px;
        padding: 0.25rem 0.5rem;
        padding-left: 12px;
        background-color: var(--color-hva-pink);
        border: 2px solid var(--color-hva-pink);
        /* Enhanced kleuren */
        background-color: var(--color-hva-pink-enhanced);
        border: 2px solid var(--color-hva-pink-enhanced);
        color: var(--color-white);
        box-shadow: 0.5rem 0.5rem #1e1649;
        transition: 0.3s ease-in-out;
        z-index: 5;
    }

    button figure {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        font-size: var(--unit-default);
        text-transform: capitalize;
    }

    button figure figcaption {
        visibility: hidden;
        width: 0px;
    }

    /* Interactive states */
    button:hover {
        background-color: var(--color-hva-blue-secundary);
        border: 2px solid var(--color-hva-blue-secundary);
        /* Enhanced kleuren */
        background-color: var(--color-hva-blue-secundary-enhanced);
        border: 2px solid var(--color-hva-blue-secundary-enhanced);
        box-shadow: 0px 0px #1e1649;
        transition: 0.3s ease-in-out;
    }

    button:focus {
        border: 2px solid var(--color-hva-pink);
        background-color: var(--color-hva-blue-secundary);
        /* Enhanced kleuren */
        border: 2px solid var(--color-hva-pink-enhanced);
        background-color: var(--color-hva-blue-secundary-enhanced);
    }


    @media (min-width: 40rem){

        button {
            padding-left: 0.5rem;
        }

        button figure figcaption {
            visibility: visible;
            width: fit-content;
        }
    }

</style>