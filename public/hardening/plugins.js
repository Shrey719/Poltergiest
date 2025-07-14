const isChrome = navigator.userAgent.includes("Chrome");

if (isChrome) {
	const chromePlugins = [
		{
			name: "Chrome PDF Plugin",
			filename: "internal-pdf-viewer",
			description: "Portable Document Format",
		},
		{
			name: "Chrome PDF Viewer",
			filename: "internal-pdf-viewer",
			description: "Portable Document Format",
		},
		{
			name: "Native Client",
			filename: "internal-nacl-plugin",
			description: "Native Client",
		},
	];
	chromePlugins.item = (i) => chromePlugins[i];
	chromePlugins.namedItem = (name) =>
		chromePlugins.find((p) => p.name == name);

	Object.defineProperty(navigator, "plugins", {
		get: () => chromePlugins,
		configurable: true,
	});
} else {
	// yeah the ladybird two users will not be able to do much
	Object.defineProperty(navigator, "plugins", {
		get: () => [],
		configurable: true,
	});
}
