let menuOpen = signal(false);

function menu() {
	let menuS = css`
		height: 88.5vh;
		width: 15vw;
		background-color: ${$pol.menu};
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

		transform: translateX(-100%);
		transition: transform 0.3s ease;

		&.open {
			transform: translateX(0);
		}

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
		width: 1.7rem;
		height: 1.7rem;
		margin-right: 1.25vw;
		color: ${$pol.mutText};
		cursor: pointer;
		transition: color 0.2s ease;

		&:hover {
			color: ${$pol.homeHover};
		}
	`;

	return html`
		<div class="${menuS}" id="menu">
			<a on:click=${() => Navigate("/")}>
				<svg
					class="${navIcon}"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.75z"
						fill="currentColor"
					/>
				</svg>
				Home
			</a>
			<a on:click=${() => Navigate("/settings/")}>
				<svg
					class="${navIcon}"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5zM19.4 13a7.961 7.961 0 0 0 0-2l2.1-1.6a0.5 0.5 0 0 0 .1-0.6l-2-3.4a0.5 0.5 0 0 0-.6-.2l-2.5 1a7.981 7.981 0 0 0-1.7-1l-0.4-2.6A0.5 0.5 0 0 0 14.9 2h-4a0.5 0.5 0 0 0-.5.4l-0.4 2.6a8.027 8.027 0 0 0-1.7 1l-2.5-1a0.5 0.5 0 0 0-.6.2l-2 3.4a0.5 0.5 0 0 0 .1.6l2.1 1.6a7.961 7.961 0 0 0 0 2l-2.1 1.6a0.5 0.5 0 0 0-.1.6l2 3.4a0.5 0.5 0 0 0 .6.2l2.5-1a8.027 8.027 0 0 0 1.7 1l0.4 2.6a0.5 0.5 0 0 0 .5.4h4a0.5 0.5 0 0 0 .5-.4l0.4-2.6a7.981 7.981 0 0 0 1.7-1l2.5 1a0.5 0.5 0 0 0 .6-.2l2-3.4a0.5 0.5 0 0 0-.1-.6L19.4 13z"
						fill="currentColor"
					/>
				</svg>
				Settings
			</a>
			<a on:click=${() => Navigate("/about/")}>
				<svg
					class="${navIcon}"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm2 12h-4v-1.5h1v-4H10V10h4v5.5h1V17z"
						fill="currentColor"
					/>
				</svg>
				About
			</a>
		</div>
	`;
}

addEventListener("DOMContentLoaded", () => {
	document.body.append(menu());
});
