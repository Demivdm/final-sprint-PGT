<script>
	export let workform
</script>

<article>
	<ul>
		{#if workform.tags.length > 0}
			{#each workform.tags as tag}
				<li style="border-color: {tag.tag_id.color};">{tag.tag_id.title}</li>
			{/each}
		{:else}
			<li style="border-color: white">Geen tags</li>
		{/if}
	</ul>

	<img src={"https://platform-big-themes.directus.app/assets/" + workform.thumbnail.id} alt="" width={workform.thumbnail.width} height={workform.thumbnail.height} />
	<div>
		<div>
			<h2>{workform.title}</h2>
			{#if workform.shortDescription}
				<p>{workform.shortDescription}</p>
			{:else}
				<p>Geen beschrijving beschikbaar.</p>
			{/if}
		</div>
		<a href={workform.link}><img src="images/icons/arrow-right.svg" alt="" />Bekijk werkvorm</a>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
        min-width: 20rem;
		max-width: 20rem;
		padding: 0.8rem;
	}

	article > img {
		height: 10rem;
		width: 100%;
		object-fit: cover;
		object-position: center;
		transition: all ease-in-out 0.2s;
	}

	article:hover a {
		transform: translateX(0.8rem);
	}

	article > div {
		display: flex;
		flex-direction: column;
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
		margin-bottom: 0.8rem;
		text-decoration: underline;
		font-weight: 600;
		font-size: 1rem;
		transition: all ease-in-out 0.2s;
	}

	a:focus {
		outline: solid 2px var(--color-hva-pink);
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
		position: relative;
		transition: all ease-out 0.2s;
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
