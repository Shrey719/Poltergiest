import {fastestWisp} from "./getWisp.js"

import attachBindingsRoot from "./src/createBindings.js"

import home from "./src/home.js"
import settings from "./src/settings.js"
import about from "./src/about.js"

window.addEventListener("beforeunload", () => {
    navigator.serviceWorker.getRegistration().then((reg) => {
	    if (reg) reg.unregister();
 	});
});


// set the background color so that the darken effect with the sidebar works 
// really hacky but eh
document.documentElement.style.backgroundColor = "black"

async function initSj() {
	let tUrl;
	if (location.protocol == "https:") {
		tUrl = `wss://${location.host}/wisp/`
	} else {
		tUrl = `ws://${location.host}/wisp/`
	}
	$pol.wisp.servers.push(tUrl)
	$pol.selectedServer = await fastestWisp($pol.wisp.servers) 
	let wServer = Object.keys($pol.selectedServer)[0]
	console.log(`Selected ${wServer} as the wisp server`)
	const scramjet = new ScramjetController({
		prefix: $pol.scramPrefix,
		files: {
			wasm: "/lib/scramjet.wasm.wasm",
			worker: "/lib/scramjet.worker.js",
			client: "/lib/scramjet.client.js",
			shared: "/lib/scramjet.shared.js",
			sync: "/lib/scramjet.sync.js",
		},
		flags: {
			rewriterLogs: true,
		},
	});

	scramjet.init()
	navigator.serviceWorker.register("/sw.js")

	const connection = new BareMux.BareMuxConnection("/baremux/worker.js")
	connection.setTransport("/epoxy/index.mjs", [
		{
			wisp: wServer
		
		},
	])
}

	

createRoute("/", home)
createRoute("/settings/", settings)
createRoute("/about/", about)

renderRoutes();

await initSj()
attachBindingsRoot()