self.$pol = {
    wispServer: "/wisp/",
    scramPrefix: "/lib/scr/",

    background: "#1E1E2F",   
    text: "#F0F0FF",      
    mutText: "#9A9AE0",     
    accent: "#A35CFF",    
    hover: "#3A3A6E",
    btnBg: "#5C3AFF",      
    btnHover: "#7D5CFF",
    focusBorder: "#30305c",   
    header: "#292940", 
    headerBtn: "#232342",
    menu: "#2f2f4e",
    


    engine: {
        url: "https://duckduckgo.com?q=",
        name: "DuckDuckGo"
    },

}

window.addEventListener("beforeunload", () => {
	navigator.serviceWorker.getRegistration().then((reg) => {
		if (reg) reg.unregister();
	});
});




