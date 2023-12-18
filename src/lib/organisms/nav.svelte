<script>
	export let data;

	// filter staat standaard uit, het menu is standaard uitgeklapt
	let mobileDropdownActive = true;
	let filterDropdownActive = false;

	function openMobileMenu() {
		// Deze functie checkt of de scherm breedte minder dan 700 pixels is.
		// wanneer het scherm kleiner is dan 700px werkt de knop, anders werkt deze niet.
		if (window.innerWidth < 700) {
			mobileDropdownActive = !mobileDropdownActive;

			// filter dropdown sluit ook wanneer het menu gesloten wordt
			if (!mobileDropdownActive) {
				filterDropdownActive = false;
			}
		}
	}

	function openFilter() {
		// funtie die kijkt of filterdropdown true of false is en deze naar de andere staat dan de huidige staat toe togglt.
		filterDropdownActive = !filterDropdownActive;
	}

	console.log(data);
</script>

<nav>
	<div class="mobile-menu">
		<button class="dropdown-menu-button" tabindex="0" aria-expanded="false" aria-controls="mobile-menu">
			<figure>
				<div>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_937_7)">
							<path
								d="M4 8H20"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4 16H20"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_937_7">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_937_18)">
							<path
								d="M6 6L17.3137 17.3137"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M6 17.3135L17.3137 5.99977"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_937_18">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<figcaption>menu</figcaption>
			</figure>
		</button>

		<ul role="menu" id="mobile-menu" hidden>
			<li class="menu-item" role="menuitem">
				<button id="filterSearch" aria-expanded="false" aria-controls="mega-menu" type="button">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1_168)">
							<path
								d="M4 4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12V19L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4Z"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_168">
								<rect width="24" height="24" rx="4" fill="white" />
							</clipPath>
						</defs>
					</svg>
					filteren & zoeken
				</button>
			</li>
			<li role="menuitem">
				<a href="/login" aria-expanded="true">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1_172)">
							<path
								d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_172">
								<rect width="24" height="24" rx="4" fill="white" />
							</clipPath>
						</defs>
					</svg>
					inloggen
				</a>
			</li>
			<li role="menuitem">
				<a class="link-primary" href="/upload" aria-expanded="true">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1_177)">
							<path
								d="M6.99996 18C5.75223 18 4.55561 17.5259 3.67334 16.682C2.79107 15.8381 2.29541 14.6935 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.4741 5.75223 9 6.99996 9C7.29464 7.68718 8.15672 6.53348 9.39654 5.79271C10.0104 5.42592 10.6986 5.17154 11.4217 5.04411C12.1449 4.91667 12.8888 4.91868 13.6111 5.05C14.3333 5.18132 15.0198 5.43939 15.6312 5.80948C16.2427 6.17956 16.7672 6.65442 17.1747 7.20693C17.5823 7.75943 17.8649 8.37878 18.0065 9.02959C18.1481 9.68041 18.1459 10.35 18 11H19C19.9282 11 20.8185 11.3687 21.4748 12.0251C22.1312 12.6815 22.5 13.5717 22.5 14.5C22.5 15.4283 22.1312 16.3185 21.4748 16.9749C20.8185 17.6312 19.9282 18 19 18H18"
								stroke="#F6F6F6"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9 15L12 12L15 15"
								stroke="#F6F6F6"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 12V21"
								stroke="#F6F6F6"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_177">
								<rect width="24" height="24" rx="4" fill="white" />
							</clipPath>
						</defs>
					</svg>
					upload een werkvorm
				</a>
			</li>
		</ul>
	</div>
	<ul class="desktop-menu" role="menu" tabindex="0">
		<li>
			<button id="filterSearch" aria-expanded="false" type="button">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1_168)">
						<path
							d="M4 4H20V6.172C19.9999 6.70239 19.7891 7.21101 19.414 7.586L15 12V19L9 21V12.5L4.52 7.572C4.18545 7.20393 4.00005 6.7244 4 6.227V4Z"
							stroke="#F6F6F6"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_168">
							<rect width="24" height="24" rx="4" fill="white" />
						</clipPath>
					</defs>
				</svg>
				filteren & zoeken
			</button>
		</li>
		<li>
			<a href="/login">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1_172)">
						<path
							d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z"
							stroke="#F6F6F6"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
							stroke="#F6F6F6"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_172">
							<rect width="24" height="24" rx="4" fill="white" />
						</clipPath>
					</defs>
				</svg>

				inloggen
			</a>
		</li>
		<li>
			<a class="link-primary" href="/upload">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1_177)">
						<path
							d="M6.99996 18C5.75223 18 4.55561 17.5259 3.67334 16.682C2.79107 15.8381 2.29541 14.6935 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.4741 5.75223 9 6.99996 9C7.29464 7.68718 8.15672 6.53348 9.39654 5.79271C10.0104 5.42592 10.6986 5.17154 11.4217 5.04411C12.1449 4.91667 12.8888 4.91868 13.6111 5.05C14.3333 5.18132 15.0198 5.43939 15.6312 5.80948C16.2427 6.17956 16.7672 6.65442 17.1747 7.20693C17.5823 7.75943 17.8649 8.37878 18.0065 9.02959C18.1481 9.68041 18.1459 10.35 18 11H19C19.9282 11 20.8185 11.3687 21.4748 12.0251C22.1312 12.6815 22.5 13.5717 22.5 14.5C22.5 15.4283 22.1312 16.3185 21.4748 16.9749C20.8185 17.6312 19.9282 18 19 18H18"
							stroke="#F6F6F6"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9 15L12 12L15 15"
							stroke="#F6F6F6"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 12V21"
							stroke="#F6F6F6"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_177">
							<rect width="24" height="24" rx="4" fill="white" />
						</clipPath>
					</defs>
				</svg>
				upload een werkvorm
			</a>
		</li>
	</ul>
</nav>

<style>
	* {
		color: white;
		margin: 0;
	}

	nav {
		background-color: var(--color-hva-blue-secundary);
		box-shadow: 8px 8px #1e1649;
		height: 3rem;
		margin: 0 1rem;
		padding: 0.5rem;
		width: calc(100% - 2rem);
		text-transform: capitalize;
	}

	nav .mobile-menu {
		display: flex;
		justify-content: end;
		position: relative;
	}

	nav .mobile-menu ul {
		position: absolute;
    	top: 3.5rem;
    	flex-direction: column;
    	gap: 0.5rem;
    	background-color: var(--color-hva-blue-secundary);
    	box-shadow: 8px 8px var(--color-hva-navy);
    	right: -0.5rem;
		padding: 0.5rem;
	}

	nav .mobile-menu ul:hover {
		display: flex;
	}

	nav .mobile-menu ul a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	nav button {
		background-color: var(--color-hva-blue-secundary);
		border: unset;
		height: 2rem;
		text-transform: capitalize;
	}

	nav figure {
		align-items: end;
		display: flex;
		gap: 0.5rem;
		justify-content: center;
	}

	/* Filter button */
	li.menu-item button, .desktop-menu li button {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
		padding: 0.2rem 0.5rem;
		transition: 0.3s ease-in-out;
		border-radius: 0.25rem;
		border: 2px solid var(--color-hva-blue-secundary);
	}

	li.menu-item button svg {
		position: static;
	}

	li.menu-item button:hover, .desktop-menu li button:hover {
		background-color: var(--color-hva-pink);
	}	

	.desktop-menu li button:focus-within {
		border: 2px solid var(--color-hva-pink);
	}

	.desktop-menu li button svg {
		position: static;
	}

	/* Menu button */
	nav button figcaption {
		font-family: 'Open sans';
		font-size: 1.25rem;
		font-weight: 500;
		transition: 0.2s ease-in-out;
	}

	nav button:hover figcaption {
		font-weight: 700;
	}

	nav button div svg {
		position: relative;
	}

	nav button svg {
		display: block;
		position: absolute;
		transition: 0.2s ease-in-out;
		width: 1.5rem;
	}

	nav .dropdown-menu-button svg:first-child {
		display: block;
	}

	nav .dropdown-menu-button svg:last-child {
		display: none;
	}

	nav button:focus-within svg:first-child {
		display: none;
	}

	nav ul li button {
		display: block;
	}

	nav ul li:first-child {
		display: none;
	}

	.javascriptEnabled nav ul li:first-child {
		display: block;
	}

	nav button:focus-within svg:last-child {
		display: block;
	}

	nav .mobile-menu button:focus-within + ul  {
		display: flex;
	}

	/* Interactive states */
	nav a, nav .menu-item button {
		border: 2px solid var(--color-hva-blue-secundary);
		border-radius: 0.25rem;
		transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
		padding: 0.2rem 0.5rem;
	}

	nav a:hover, ul li button:hover {
		background-color: var(--color-hva-pink);
	}

	nav a:focus, ul li button:focus {
		border: 2px solid var(--color-hva-pink);
		background-color: var(--color-hva-blue-secundary);
	}

	/* Primaire ruisknop */
	.link-primary {
		align-items: center;
		background: #593bff;
		border-radius: 0.25rem;
		display: flex;
		gap: 0.5rem;
		padding: 0.2rem 0.5rem;
		position: relative;
	}

	.link-primary::before {
		background-image: url('https://img.freepik.com/free-vector/seamless-grainy-texture-background_1409-2115.jpg');
		background-size: 180%;
		border-radius: 0.25rem;
		content: '';
		height: 100%;
		left: 0;
		mix-blend-mode: color-burn;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.link-primary:hover {
		background: var(--color-hva-pink);
	}

	.link-primary:focus {
		border: 2px solid var(--color-hva-pink);
	}

	ul.desktop-menu {
		display: none;
	}

	ul.desktop-menu a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	@media (min-width: 1080px) {
		nav .mobile-menu {
			display: none;
		}

		ul.desktop-menu {
			align-items: center;
			display: flex;
			gap: 2rem;
			justify-content: end;
		}
	}
</style>