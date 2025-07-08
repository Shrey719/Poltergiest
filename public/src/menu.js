let menuOpen = signal(false);

function menu() {
    let menuS = css`
        height: 92vh;
        width: 15vw;
		background-color: ${$pol.menu};
		display: flex;
		align-items: center;
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

    `

    return html`
        <div class=${menuS} id="menu">
            
        </div>
    `
}
document.body.append(menu())