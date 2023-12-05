<script>
	export let werkvorm;
	console.log(werkvorm.tags[0]);
</script>

<article>
	<img src={werkvorm.thumbnail.url} alt="" />
	<div>
        <div class="werkvorm-content">
            <h2>{werkvorm.title}</h2>
            <p>{werkvorm.korteBeschrijving}</p>

        </div>
        <div>
            <a href={werkvorm.link}><img src="images/icons/arrow-right.svg" alt="" />Bekijk werkvorm</a>
            <ul>
                {#each werkvorm.tags as tag}
                    <li style="border-color: {tag.kleur.hex};">{tag.titel}</li>
                {/each}
            </ul>
        </div>
	</div>
</article>

<style>
	* {
		/* border: solid 1px red; */
	}

	article {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		background: var(--color-hva-navy);
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.25);
        max-width: 20rem;
	}

	article > img {
		height: 8rem;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	article > div {
		display: flex;
		flex-direction: column;
		padding: 0 1rem 1rem;
        height: 100%;
        justify-content: space-between;
	}

	h2 {
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 0.9rem;
	}

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.5rem;
		margin-left: 0.5rem;
        margin-bottom: 1.2rem;
		text-decoration: underline;
		font-weight: 600;
		font-size: 1rem;
	}

	a > img {
		height: 1rem;
		width: 1rem;
	}

    ul {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        list-style: none;
        column-gap: 0.5rem;
        text-transform: capitalize;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem 0.5rem;
        border: solid 2px;
        border-radius: 0;
        font-size: 0.8rem;
        font-weight: 500;
    }
</style>
