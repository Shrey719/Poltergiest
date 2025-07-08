function header() {
	let header = css`
		height: 8vh;
		background-color: ${$pol.header};
		display: flex;
		align-items: center;
	`;

	let popupBtn = css`
		border: none;
		border-radius: 0.5rem;
		height: 3rem;
		width: 3rem;
		margin-left: 1vw;
		color: ${$pol.text};
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		& svg {
			height: 1.5rem;
			width: 1.5rem;
			fill: currentColor;
		}
	`;
// pretti er (its actually pretty nice)
	return html`
		<div class=${header}>
			<div
				class=${popupBtn}
				on:click=${() => {
					alert(1);
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
		</div>
	`;
}
document.body.append(header());
