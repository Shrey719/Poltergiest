import {settingsBar} from "./components/settingsSidebar.js"

function settings() {
    let main = css`
        height: 92vh;
        width: 100vw;
        background-color: ${$pol.background};
        display: flex;
        flex-direction: column;
        color: ${$pol.text};
        font-family: ${$pol.fonts};
        & select {
            background-color: ${$pol.btnBg};
            border: none;
            color: ${$pol.text};
            width: 15rem;
            font-family: ${$pol.fonts};
            text-align: center;
            height: 2rem;
        }
    `
    let settingsArea = css`
        & div {
            margin-top: 2.5vh;
            margin-left: 20vw;
            margin-bottom: 2.5vh;
        }
    `

    return html`
        <div class=${main}>
            ${settingsBar()}
            <div id="settingsArea" class=${settingsArea}>
                <div>
                    <h1>Default Search engine</h1>
                    <p>This is the search engine in search bar. <br> 
                    You can switch it at any time.<p>
                    <select on:change=${() => {
                        localStorage.setItem("engine", (event.target.value))
                    }}>
                        <option value="" disabled selected>Select a search engine</option> 
                        <option value=${JSON.stringify({name: "DuckDuckGo", url: "https://www.duckduckgo.com?q="})}>DuckDuckGo</option>
                        <option value=${JSON.stringify({name: "Startpage", url: "https://www.startpage.com/sp/search?q="})}>Startpage</option>
                        <option value=${JSON.stringify({name: "Searx", url: "https://searxng.site?q="})}>Searx</option>
                    </select>
                </div>
                <div>
                    <h1>Saftey level</h1>
                    <select on:change=${() => {
                        localStorage.setItem("safetey", (event.target.value))
                    }}>
                        <option value="" disabled selected>Select a saftey level</option> 
                        <option value="1">Unsafe</option>
                        <option value="2">Private</option>
                        <option value="3">Anonymous (WIP)</option>
                        <option value="4">Uncensored Anonymous (WIP)</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

export default settings