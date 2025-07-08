function popupBar() {
    let popup = css`
        background-color: black;
    `
    return html`

        <div class=${popup}>
            
        </div>
    `
}

function header() {
    let header = css`
        height: 8vh;
        background-color: ${$pol.header};
        display: flex;
        justify-content: center; 
        align-items: center;   

    `
    let popupBtn = css`
        & button {
            background-color: ${$pol.headerBtn};
            border: none;
            border-radius: 0.5rem;
            height: 10rem;
            width: 10rem;
        }
    `
    return html`
        <div class=${header}>
            <div class=${popupBtn}>
                <button>+</button>
            </div>
        </div>
    `
}
document.body.append(header())