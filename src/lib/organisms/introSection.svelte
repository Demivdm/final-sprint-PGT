<script>
    import { onMount } from 'svelte';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
</script>
<section>
    <div>
    <!-- <LottiePlayer
        src="https://lottie.host/ca1bc273-5190-4bce-b7c8-325269aa3bbb/nwJwAaGoKA.json"
        autoplay="true"
        loop="true"
        renderer="svg"
        background="transparent"
        height="128"
        width="128"
    /> -->
        <img src="/images/werkvorm-animation.gif" width="300" height="300" alt="animatie" />
    </div>
    <div>
        <h1>Welkom op het platform Werkvormen Grote Thema's</h1>
        <p>Wil jij met jouw studenten werken aan ‘moeilijke’ maatschappelijke vraagstukken?  Vind hier een werkvorm die helpt om grote thema’s bespreekbaar en behapbaar te maken.</p>
    </div>
</section>

<style>
    section {
        padding: var(--unit-default) var(--unit-default) 5rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    section img {
        width: 150px;
        height: 150px;
    }

    @media (min-width: 768px){
        section {
            width: 90vw;
            grid-template-columns: 1fr 10fr;
        }

        section div:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    @media (min-width: 1024px){
        section {
            width: 80vw;    
            margin: 0 auto;
        }
    }
</style>