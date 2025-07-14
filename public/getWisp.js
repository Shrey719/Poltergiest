function getWispLatency(wisp) {
	return new Promise((res) => {
		const start = performance.now();
		const ws = new WebSocket(wisp);

		let worked = false;

		ws.onopen = () => {
			const time = performance.now() - start;
			worked = true;
			ws.close();
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
	let times = [];

	for (let i = 0; i < arr.length; i++) {
		times.push({ [arr[i]]: await getWispLatency(arr[i]) });
	}

	const flat = Object.assign({}, ...times);

	const entries = Object.entries(flat);
	const [minKey, minValue] = entries.reduce((minEntry, currentEntry) => {
		if (currentEntry[1] < minEntry[1]) {
			return currentEntry;
		} else {
			return minEntry;
		}
	});

	return { [minKey]: minValue };
}


export {fastestWisp}