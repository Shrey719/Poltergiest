function settingsBar() {
	let menuS = css`
		height: 88.5vh;
		width: 15vw;
		background-color: ${$pol.background};
		display: flex;
		flex-direction: column;
		align-items: flex-start;
        font-family: ${$pol.fonts}
		padding: 1rem;
		top: 0;
		left: 0;
		margin-top: 8vh;
		position: absolute;
		color: white;

		transition: transform 0.3s ease;


		a {
			display: flex;
			align-items: center;
			color: white;
			text-decoration: none;
			margin: 0.5rem;
			font-size: 1rem;
			padding: 0.4rem 0.8rem;
			border-radius: 6px;
			transition: background 0.2s;
		}

		a:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}
	`;
	let navIcon = css`
		width: 2rem;
		height: 2rem;
		margin-right: 1.25vw;
		color: ${$pol.mutText};
		cursor: pointer;
		transition: color 0.2s ease;

		&:hover {
			color: ${$pol.homeHover};
		}
	`;

	return html`
		<div class="${menuS}">
			<a on:click=${() => Navigate("/")}>
				<svg
                    class="${navIcon}"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                >
                <g fill="none" stroke="currentColor" stroke-width="1.5" transform="translate(16,16)">
                    <g id="tooth">
                    <polygon points="5,-2 7,-4 9,-4 9,4 7,4 5,2" />
                    </g>

                    <use href="#tooth" transform="rotate(0)" />
                    <use href="#tooth" transform="rotate(30)" />
                    <use href="#tooth" transform="rotate(60)" />
                    <use href="#tooth" transform="rotate(90)" />
                    <use href="#tooth" transform="rotate(120)" />
                    <use href="#tooth" transform="rotate(150)" />
                    <use href="#tooth" transform="rotate(180)" />
                    <use href="#tooth" transform="rotate(210)" />
                    <use href="#tooth" transform="rotate(240)" />
                    <use href="#tooth" transform="rotate(270)" />
                    <use href="#tooth" transform="rotate(300)" />
                    <use href="#tooth" transform="rotate(330)" />
                </g>

                </svg>

				General
			</a>
			<a on:click=${() => Navigate("/settings/")}>
                <svg
                    class="${navIcon}"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="16" y="28" width="32" height="28" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="4" />
                    <path d="M20 28v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8h-6z" fill="currentColor"/>
                    <circle cx="32" cy="42" r="4" fill="currentColor"/>
                    <rect x="30" y="42" width="4" height="8" fill="currentColor"/>
                </svg>
				Privacy & Security
			</a>
			<a on:click=${() => Navigate("/about/")}>
				<svg
                    class="${navIcon}"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M26 38L38 26" />
                    <path d="M50 14a14 14 0 0 1 0 20l-4 4" />
                    <path d="M18 50a14 14 0 0 1 0-20l4-4" />
                </svg>


				Connection
			</a>
		</div>
	`;
}

export {
    settingsBar
}
