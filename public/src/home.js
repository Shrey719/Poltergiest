
self._connected = signal(false);

const center = css`
	transform: translate(-50%, -50%);
	top: 33%;
	left: 50%;
	position: absolute;
	font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	text-align: center;
	font-size: 22px;
`
// container is passed in from body() (its just the div that contains the body of the thing)
function connected(container) {


	const searchBar = css`
		color: ${$pol.text};
		::placeholder {
			color: ${$pol.text};
		}
		border: none;
		width: 30vw;
		height: 5vh;
		background-color: ${$pol.btnBg}
		border-radius: 0.5rem;
		font-size: 18px;
		font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		margin-left: 0.5rem;
		text-align: center;
	`
	return html`
    <div class=${center}>
    	<h1>Poltergiest</h1>
      	<input class=${searchBar}
			spellcheck="false" 
			autocomplete="off" 
			placeholder="Search with ${$pol.engine.name}"
			id="searchBar" on:keydown=${
			(e) => {
				if (e.key === "Enter") {
					e.preventDefault()
					container.innerHTML = `<iframe src="${$pol.scramPrefix}${$scramjet.codec.encode(e.target.value)}" height=100% width=100% style="border: none"></iframe>`
				}
			}
	  	}></input>
    </div>
  	`
}

function connect() {
	
	const conBtn = css`
		color: ${$pol.text};
		border: none;
		width: 10vw;
		height: 5vh;
		border-radius: 0.5rem;
		font-size: 18px;
		font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 400;
		margin-left: 0.5rem;
	`

	const btnRow = css`
		display: flex;
		justify-content: center;
		align-items;: center;
		margin-top: 4vh;
		flex-wrap: wrap;
	`
	return html`
		<div class=${center}>
			
			<h1>Connect to wisp</h1>
			<div class=${btnRow}>
				<img src="/assets/poltergiest.svg" height="72" width="72" style="transform: scaleX(-1);"></img>
				<button class=${conBtn} on:click=${init}>Connect</button>
				<button class=${conBtn}>Configure connection</button>
				<img src="/assets/poltergiest.svg" height="72" width="72"></img>

			</div>
		</div>
	`
}

function body() {

	const mainBody = css`
		height: 92%;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
		background-color: ${$pol.background};
		color: ${$pol.text};

		& button {
			background-color: ${$pol.btnBg};
			position: relative;
			transition: color 0.2s ease, background 0.2s ease;
		}
		& button:hover {
			background-color: ${$pol.btnHover};
		}
		& input {
			outline: none;
			transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
		}
		
		& input:hover {
			background-color: ${$pol.hover};
		}

		& input:focus {
			outline: 3px solid ${$pol.focusBorder};
			background-color: ${$pol.hover};
			
		}
	`
	const container = document.createElement("div")
	container.className = mainBody

	function render(con) {
		container.replaceChildren(con ? connected(container) : connect())
	}

	_connected.subscribe(render)
	render(_connected.value)

	return container
}

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
	_connected.value = true
}

document.body.append(body())
