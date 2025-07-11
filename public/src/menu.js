let menuOpen = signal(false);

function menu() {
    let menuS = css`
        height: 92vh;
        width: 15vw;
        background-color: ${$pol.menu};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
            color: white;
            text-decoration: none;
            margin: 0.5rem 0;
            font-size: 1rem;
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            transition: background 0.2s;
        }

        a:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    `;

    return html`
        <div class="${menuS}" id="menu" >
            <a on:click=${
                () => {
                    Navigate("/")
                }
            }>🏠 Home</a>
            <a on:click=${
                () => {
                    Navigate("/settings/")
                }
            }>⚙️ Settings</a>
            <a on:click=${
                () => {
                    Navigate("/about/")
                }
            }>
            ℹ️ About</a>
        </div>
    `;

}

addEventListener("DOMContentLoaded", (event) => { 
	document.body.append(menu())
})