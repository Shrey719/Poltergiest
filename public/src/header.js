function tabs() {
    let tabs = css`
        background-color: black;
        top: 0%;
        height: 3vh
        width: 100vw;
        position: absolute
    `


    return html`
        <div class=${tabs}>
            hi
        </div>
    `
}

function control() {
        let tabs = css`
        background-color: grey;
        top: 3%;
        height: 3vh
        width: 100vw;
        position: absolute
    `


    return html`
        <div class=${tabs}>
            hi
        </div>
    `
}

function bookmarks() {
     let tabs = css`
        background-color: red;
        top: 6%;
        height: 3vh
        width: 100vw;
        position: absolute
    `


    return html`
        <div class=${tabs}>
            hi
        </div>
    `
}

function header() {
    return html`
        <div>
        ${bookmarks()}
        ${control()}
        ${tabs()}
        </div>
    `
}
document.body.append(header())