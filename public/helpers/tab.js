function fetchFav(url) {
  return new Promise((resolve, reject) => {
    const f = document.createElement("iframe");
    f.src = `${$pol.scramPrefix}${$scramjet.codec.encode(url)}`;
    f.style.width = "0";
    f.style.height = "0";
    f.style.border = "none";
    f.style.zIndex = "-99999999999"
    f.style.position = "absolute";
    f.style.visibility = "hidden";

    f.onload = () => {
      try {
        const doc = f.contentDocument || f.contentWindow.document;
        const selectors = [
          "link[rel='icon']",
          "link[rel='shortcut icon']",
          "link[rel='apple-touch-icon']",
          "link[rel='apple-touch-icon-precomposed']"
        ];

        for (const sel of selectors) {
          const el = doc.querySelector(sel);
          if (el?.href) {
            const fUrl = new URL(el.getAttribute("href"), url).href;
            document.body.removeChild(f);
            resolve(fUrl);
            return;
          }
        }

        // if it cant find it itl just do that
        document.body.removeChild(f);
        resolve(new URL("/favicon.ico", url).href);
      } catch (err) {
        document.body.removeChild(f);
        reject("Parsing favicon failed: " + err);
      }
    };

    f.onerror = () => {
      document.body.removeChild(f);
      reject("Could not load f used to fetch favicon");
    };

    document.body.appendChild(f);
  });
}
