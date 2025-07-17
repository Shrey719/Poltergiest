import {settingsBar} from "/src/components/settingsSidebar.js"
import {
    settingsAreaGeneral
} from "/src/helpers/settings.js"

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
                ${settingsAreaGeneral()}
            </div>
        </div>
    `;

}

export default settings