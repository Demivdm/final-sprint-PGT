<section>
    <div>
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
        <dotlottie-player   
            src="https://lottie.host/ca1bc273-5190-4bce-b7c8-325269aa3bbb/nwJwAaGoKA.json" 
            background="transparent" 
            speed="1" 
            style="width: 128; height: 128" 
            direction="1" 
            mode="bounce" 
            loop 
            autoplay
        >
    </dotlottie-player>
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

    @media (min-width: 768px){
        section {
            width: 90vw;
            grid-template-columns: 1fr 10fr;
        }
    }

    @media (min-width: 1024px){
        section {
            width: 80vw;    
            margin: 0 auto;
        }
    }
</style>