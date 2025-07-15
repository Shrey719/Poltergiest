function about() {
    let main = css`
        height: 92vh;
        width: 100vw;
        background-color: ${$pol.background}
    `
    return html`
        <div class=${main}></div>
    `;
}


export default about