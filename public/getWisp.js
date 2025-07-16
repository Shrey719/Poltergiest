function getWispLatency(wisp) {
	return new Promise((res) => {
		const start = performance.now();
		const ws = new WebSocket(wisp);

		let worked = false;

		ws.onopen = () => {
			const time = performance.now() - start;
			worked = true;
			ws.close();
			console.log(`${wisp} was fetched in ${time}ms`)
			res(time);
		};

		ws.onerror = () => {
			if (!worked) {
				res(Infinity);
			}
		};
		setTimeout(() => {
			if (!worked) {
				ws.close();
				res(Infinity);
			}
		}, 3000);
	});
}

async function fastestWisp(arr) {
	const results = await Promise.all(
		arr.map(async (url) => ({ [url]: await getWispLatency(url) }))
	);
	const flat = Object.assign({}, ...results);
	const oEntries = Object.entries(flat);
	const [minKey, minValue] = oEntries.reduce((mEntry, curEntry) =>
		curEntry[1] < mEntry[1] ? curEntry : mEntry
	);
	return { [minKey]: minValue };
}


export {fastestWisp}