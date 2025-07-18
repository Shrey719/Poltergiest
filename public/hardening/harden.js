import "./height.js"
import "./plugins.js"


if (Number(localStorage.getItem("safety")) > 1) {
    Object.keys(localStorage)
        .filter(key => key.includes('@'))
        .forEach(key => localStorage.removeItem(key));
}