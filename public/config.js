self.$pol = {
    scramPrefix: "/lib/scr/",

    background: "#1E1E2F",   
    text: "#F0F0FF",      
    mutText: "#9A9AE0",     
    accent: "#A35CFF",    
    hover: "#7358fa",
    btnBg: "#3A3A6E",      
    btnHover: "#7D5CFF",
    focusBorder: "#30305c",   
    header: "#292940", 
    headerBtn: "#232342",
    menu: "#2f2f4e",
    homeHover: "#9494f2",

    fonts: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',

    selectedServer: "wss://wispserver.dev/wisp/",

    engine: (() => {
        const raw = localStorage.getItem("engine");
        return raw ? JSON.parse(raw) : {
            url: "https://duckduckgo.com?q=",
            name: "DuckDuckGo"
        };
    })(),

    wisp: {
        servers: [
            "wss://wispserver.dev/wisp/",
            // we need more wisp servers lmao
        ]
    }
    
}
