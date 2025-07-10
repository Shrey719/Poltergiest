let blur = css`
	filter: brightness(0.5);
	transition: filter 0.1s ease;
	overflow: hideen;
	border: none;
	outline: none;
	background-color: ${$pol.background};
	box-shadow: none;
	overflow: hidden;
	pointer-events: none;
`
function header() {
	let header = css`
		height: 8vh;
		background-color: ${$pol.header};
		display: flex;
		align-items: center;
	`;

	let popupBtn = css`
		border: none;
		height: 5rem;
		width: 5rem;
		color: ${$pol.text};
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		& svg {
			height: 2rem;
			width: 2rem;
			fill: currentColor;
		}
	`;
	let orgTag = css`
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-left: 2vw;
		user-select: none;
		cursor: pointer;

		& img {
			width: 2rem;
			height: 2rem;
		}
		& span {
			color: ${$pol.mutText};
			font-size: 20px;
			font-family: ${$pol.fonts};
			font-weight: 600;
		}
		& span:hover {
			color: ${$pol.homeHover};
		}
	`;

// pretti er (its actually pretty nice)
	return html`
		<div class=${header}>
			<div
				class=${popupBtn}
				on:click=${() => {
					requestAnimationFrame(() => {
						if (menuOpen.value == true) {
							container.classList.add(blur)
						} else if (menuOpen.value == false) {
							container.classList.remove(blur)
						}
						let menu = document.getElementById("menu")
						menu.classList.toggle("open")
					});	
					menuOpen.value = !menuOpen.value;
				}}
			>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Menu"
					role="img"
				>
					<rect y="4" width="24" height="2" />
					<rect y="11" width="24" height="2" />
					<rect y="18" width="24" height="2" />
				</svg>
			</div>
			<div class=${orgTag} on:click=${() => {Navigate("/")}}>
				<img src="/assets/poltergiest.svg"></img>
				<span>Poltergiest</span>
				<img src="/assets/poltergiest.svg" style="transform: scaleX(-1)"></img>
			</div>
		</div>
	`;
}
document.body.append(header());
