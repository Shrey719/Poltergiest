const container = document.createElement("div")
const center = css`
	transform: translate(-50%, -50%);
	top: 33%;
	left: 50%;
	position: absolute;
	font-family: ${$pol.fonts};
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
		font-family: ${$pol.fonts};
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
					let val = e.target.value
					let isUrlH = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/.*)?$/
					let isUrl = /^(?!https?:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/.*)?$/
					let isQuery = /^(?!.*[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}).*$/;
					if (isUrlH.test(val)) {
						container.innerHTML = `<iframe src="${$pol.scramPrefix}${$scramjet.codec.encode(val)}" height=100% width=100% style="border: none"></iframe>`
					}
					if (isUrl.test(val)) {
						container.innerHTML = `
						<iframe 
							src="${$pol.scramPrefix}${$scramjet.codec.encode('https://'+val)}"
							height=100% width=100%
							style="border: none"
						></iframe>`
					}
					if (isQuery.test(val)) {
						container.innerHTML = `
						<iframe 
							src="${$pol.scramPrefix}${$scramjet.codec.encode($pol.engine.url+val)}"
							height=100% width=100%
							style="border: none"
						></iframe>`
					}
				}
			}
	  	}></input>
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
	container.className = mainBody
	container.replaceChildren(connected(container))
	return container
}

document.body.append(body())
