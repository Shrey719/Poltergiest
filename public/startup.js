window.addEventListener("beforeunload", () => {
    navigator.serviceWorker.getRegistration().then((reg) => {
	    if (reg) reg.unregister();
 	});
});


function init() {
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
			wisp:
				(location.protocol === "https:" ? "wss" : "ws") +
				"://" +
				location.host +
				$pol.wispServer,
		},
	])
}



init()
createRoute("/", home())
createRoute("/settings/", settings())
//createRoute("/about/", about())
renderRoutes();
//Navigate('/about')
