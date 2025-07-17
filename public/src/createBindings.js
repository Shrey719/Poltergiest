import {
    renderSettingsAreaCon,
    renderSettingsAreaGeneral,
    renderSettingsAreaPriv
} from "/src/helpers/settings.js"

function attachBindings() {
    document.getElementById("sGen").addEventListener("click", () => {
        renderSettingsAreaGeneral()
    })

    document.getElementById("sPriv").addEventListener("click", () => {
        renderSettingsAreaPriv()
    })

    document.getElementById("sCon").addEventListener("click", () => {
        renderSettingsAreaCon()
    })
}

export default attachBindings