<script>
	export let data
	let workform = data.workform[0]
</script>

<main>
	<section>
		<div class="upload-button">
			<div class="icon-box">
				<img src="/images/icons/upload.svg" alt="Upload icon" />
			</div>
			<a href="/upload">Ben jij docent en wil je zelf een werkvorm uploaden? Klik dan hier om je aan te melden.</a>
		</div>

		<header>
			<h1>{workform.title}</h1>
			<p>{workform.shortDescription}</p>
		</header>

		<!-- svelte-ignore a11y-media-has-caption -->
        {#if workform.video == null}
        <img src={"https://platform-big-themes.directus.app/assets/" + workform.thumbnail.id} alt="Thumbnail" />
        {:else}
        <video controls poster={"https://platform-big-themes.directus.app/assets/" + workform.thumbnail.id}>
            <source src={"https://platform-big-themes.directus.app/assets/" + workform.video.id} type={workform.video.type} />
        </video>
        {/if}

		<article class="content">
            <div class="content-left">
                <div class="beschrijving">
                    <h2>Beschrijving</h2>
                    <p>{workform.description}</p>
                </div>

                <div class="extra-info">
                    <div class="info-left">
                        <h3>Faculteit/Opleiding</h3>
                        <p>{workform.course.faculty} - {workform.course.title}</p>
                    </div>
                    <div class="info-right">
                        <h3>Contactpersoon</h3>
                        <a class="mail-to-link" href="mailto:{workform.contact.email}">
                            <p>{workform.contact.email}</p>
                        </a>
                    </div>
                </div>
            </div>

            <div class="content-right">
                <div class="action-buttons">
                    <div class="action-button">
                        <div class="icon-box">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.862464 12.2897C0.269712 11.711 0.25835 10.7613 0.837086 10.1685L10.2681 0.50906C10.8469 -0.0836926 11.7966 -0.0950548 12.3893 0.483682C12.9821 1.06242 12.9934 2.0121 12.4147 2.60485L5.51348 9.6732L19.9823 9.50009C20.8106 9.49018 21.4902 10.1537 21.5001 10.982C21.51 11.8104 20.8465 12.49 20.0181 12.4999L5.54937 12.673L12.6177 19.5742C13.2105 20.1529 13.2218 21.1026 12.6431 21.6954C12.0644 22.2881 11.1147 22.2995 10.5219 21.7207L0.862464 12.2897Z" fill="white"/>
                            </svg>  
                        </div>
                        <a href="/">Terug naar overzicht</a>
                    </div>
                </div>

                <div class="tags">
                    <h2>Tags</h2>
                    <div class="tag-list">
                        {#each workform.tags as tag}
                            <div class="tag" style="border-color: {tag.tag_id.color};">
                                <p>{tag.tag_id.title}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
		</article>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 0 1rem 8rem;
	}

	section {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
		gap: 2rem;
	}

	.upload-button {
		display: flex;
		align-items: center;
		position: relative;
		margin: 0 0 1rem auto;
        max-width: 27rem;
	}

    .action-button {
        display: flex;
		align-items: center;
		position: relative;
		margin: 0 1rem;
        max-width: 27rem;
    }

	.icon-box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: -1rem;
		background: var(--color-hva-pink);
		padding: 0.5rem;
		aspect-ratio: 1/1;
		transform: rotate(45deg);
		transition: transform 0.2s ease-in-out;
	}

	.icon-box > svg, img {
		width: 1rem;
		height: 1rem;
        aspect-ratio: 1/1;
		transform: rotate(-45deg);
	}

	a {
		padding: 0.9rem 1.8rem 0.9rem 2.3rem;
		border: none;
		background-color: var(--color-hva-navy);
		color: var(--color-white);
		font-size: 0.9rem;
		font-weight: 600;
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
	}

	a:hover {
		background-color: #362e61;
	}

    a.mail-to-link {
        padding: 0;
        background-color: unset;
        color: var(--color-white);
        font-size: 0.9rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
    }

    a.mail-to-link:hover {
        opacity: 0.7;
    }

	header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	header h1 {
		font-size: 1.4rem;
		font-weight: 700;
	}

	header p {
        font-size: 1rem;
        font-weight: 400;
	}

	video {
		width: 100%;
        border-radius: 5px;
        max-width: 28rem;
	}

    img {
        width: 100%;
        border-radius: 5px;
        max-width: 28rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .content-left {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .beschrijving {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .beschrijving h2 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .beschrijving p {
        font-size: 1rem;
        font-weight: 400;
    }

    .extra-info {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .extra-info .info-left {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .extra-info .info-right {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .extra-info h3 {
        font-size: 1rem;
        font-weight: 700;
    }

    .extra-info p {
        font-size: 0.9rem;
        font-weight: 400;
    }

    .content-right {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .tags {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .tags h2 {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .tag-list {
        display: flex;
        flex-flow: row wrap;
        gap: 0.5rem;
    }

    .tag {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        padding: 0.3rem 0.5rem;
    }

    .tag p {
        font-size: 0.9rem;
        font-weight: 400;
    }

    .action-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
    }

    @media (min-width: 700px){
        main{
            padding: 0 3rem 8rem;
        }

        .content{
            flex-direction: row;
            gap: 3rem;
        }

        .content-left{
            width: 55%;
        }

        .extra-info{
            flex-direction: row;
            gap: 2rem;
        }

        .content-right{
            width: 45%;
            margin-top: 3rem;
        }
    }

    @media (min-width: 1024px){
        section{
            gap: 1.5rem;
        }

        header h1{
            font-size: 1.8rem;
        }

        video{
            max-width: 40rem;
        }

        .content {
            margin-top: 1rem;
        }

        .content-left{
            width: unset;
        }

        .beschrijving{
            max-width: 35rem;
        }

        .beschrijving h2 {
            font-size: 1.3rem;
        }

        .content-right{
            width: unset;
        }
    }

</style>
