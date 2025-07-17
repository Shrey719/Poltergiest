import {
    renderSettingsAreaCon,
    renderSettingsAreaGeneral,
    renderSettingsAreaPriv
} from "/src/helpers/settings.js"



function attachBindingsRoot() {
    let rContainer = document.getElementById("root") || document.body

    rContainer.addEventListener("click", (e) => {
        if (e.target.id == "sGen") {
            renderSettingsAreaGeneral()
        }
        if (e.target.id == "sPriv") {
            renderSettingsAreaPriv()
        }
        if (e.target.id == "sCon") {
            renderSettingsAreaCon()
        }
    })
}

export default attachBindingsRoot